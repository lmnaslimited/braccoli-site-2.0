"use client";

import { useEffect, useMemo, useState, useRef } from "react";

import type {
  TbenefitChat,
  TbenefitContext,
  TbenefitPdfContent,
  TbenefitPdfData,
  TbenefitType,
  TformMode,
} from "@repo/middleware/types";

import type { DiscoveryQuestion } from "../types/engine";
import type { TuserSession } from "@repo/middleware/types";

import ChatInput from "../components/chat-input";
import GreetingBanner from "../components/greeting-banner";
import FollowUpQuestionRenderer from "../components/follow-up-question-renderer";
import ResultSummaryRenderer from "../components/result-summary-renderer";
import AIMessage from "../components/ai-message";
import AIStreaming from "../components/ai-streaming";

import { useAISessionStore } from "../store/ai-session-store";

import { Button } from "@repo/ui/components/ui/button";
import { useFormHandler } from "../hooks/form-handler";
import { useParams } from "next/navigation";

type Props = {
  benefitType: TbenefitType;
};

export default function ChatDrawer({ benefitType }: Props) {

  const { fnHandleFormButtonClick, fnRenderFormBelowSection } = useFormHandler();

  const LdChatScrollRef = useRef<HTMLDivElement | null>(null);
  const LInitializedRef = useRef(false);

  const { messages, addMessage, resetSession } = useAISessionStore();

  const [LdSession, fnSetSession] = useState<TuserSession | null>(null);
  const [LLoading, fnSetLoading] = useState(false);

  const [followups, setFollowups] = useState<
    Array<{ id: string; prompt: string }>
  >([]);

  const [result, setResult] = useState<{
    summary: string;
    score?: number;
    recommendation?: string;
  }>();

  const [context, setContext] = useState<TbenefitContext | null>(null);

  const [greeting, setGreeting] = useState("");

  const [currentQuestion, setCurrentQuestion] =
    useState<DiscoveryQuestion | null>(null);

  const [answers, setAnswers] = useState<Record<string, string>>({});

  const [uiContent, setUiContent] = useState<TbenefitChat | null>(null);
  const [LdPdfContent, fnSetPdfContent] = useState<TbenefitPdfContent | null>(null)
  const LdParams = useParams();

  const LLocale = LdParams.locale as string;
  useEffect(() => {

    const fnFetchChatData = async () => {
  
      try {
  
        const LdGetChatData = await fetch(
          `/api/benefit/chat-data?locale=${LLocale}`
        );
  
        const LdChatData = await LdGetChatData.json();
        
        setUiContent(LdChatData);
  
      } catch (LError) {
  
        console.error("Failed to load chat content", LError);
  
      }
  
    };
  
    void fnFetchChatData();
  
  }, [LLocale]);

  useEffect(()=>{
    const fnFetchChatData = async () => {
      try {
        const LdGetChatData = await fetch(
          `/api/benefit/benefit-pdf?locale=${LLocale}`
        );
        const LaChatData = await LdGetChatData.json();
        const LdMatchedPdf = LaChatData.find(
          (iPdfData: TbenefitPdfContent) =>
            iPdfData.benefit_type === benefitType
        );
  
        if (LdMatchedPdf) {
          fnSetPdfContent(LdMatchedPdf);
        }
      } catch (LError) {
        console.error("Failed to load benefit pdf content", LError);
      }
    };
  
    void fnFetchChatData();
  }, [benefitType, LLocale])
  /*
  ----------------------------
  Auto scroll chat
  ----------------------------
  */

  useEffect(() => {

    const el = LdChatScrollRef.current;

    if (!el) return;

    el.scrollTop = el.scrollHeight;

  }, [messages, LLoading]);

  /*
  ----------------------------
  Reset session when widget loads
  ----------------------------
  */

  useEffect(() => {

    resetSession();

  }, [benefitType, resetSession]);

  /*
  ----------------------------
  Chat bootstrap
  ----------------------------
  */

  useEffect(() => {

      if (!benefitType || !uiContent|| LInitializedRef.current) return;

      LInitializedRef.current = true;

    const run = async () => {

      await fetch("/api/session/bootstrap", { method: "POST" });

      const response = await fetch("/api/session/me");

      const json = (await response.json()) as {
        session: TuserSession | null;
      };

      fnSetSession(json.session);

      const initialContext: TbenefitContext = {
        benefitType,
        industry: "Transformer Manufacturing",
        entryPage: "/",
        leadSource: "Website CTA",
        userIntent: `Run ${benefitType.replaceAll("_", " ")}`,
      };

      setContext(initialContext);
      const chatStartResponse = await fetch("/api/chat/start", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          context: initialContext,
          message: uiContent?.startFlowText
        }),

      });

      const chatStart = await chatStartResponse.json();

      setGreeting(chatStart.greeting);

      if (chatStart.question?.question) {

        setCurrentQuestion(chatStart.question);

        addMessage({
          role: "assistant",
          content: chatStart.question.question,
        });

      }

      setAnswers({});
      setFollowups([]);
      setResult(undefined);
      fnSetLoading(false);
    };

    void run();

  }, [benefitType, uiContent, addMessage]);

  /*
  ----------------------------
  Greeting fallback
  ----------------------------
  */

  const fallbackGreeting = useMemo(() => {

    if (LdSession?.identity?.name)
      return `Welcome back, ${LdSession.identity.name}`;

    return `Let's run your ${benefitType ?? "benefit"} flow.`;

  }, [benefitType, LdSession?.identity?.name]);

  /*
  ----------------------------
  Benefit Runner
  ----------------------------
  */

  const runBenefit = async (discoveryAnswers: Record<string, string>) => {

    if (!benefitType || !LdSession?.sessionId) return;

    const response = await fetch("/api/benefit/run", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        benefitType,
        sessionId: LdSession.sessionId,
        stage: followups.length ? "followup" : "standard_completed",
        answers: Object.entries(discoveryAnswers).map(
          ([questionId, value]) => ({
            questionId,
            value,
          })
        ),
      }),

    });

    const json = await response.json();

    setFollowups(json.followupQuestions ?? []);
    setResult(json.result);

  };

  /*
  ----------------------------
  Submit discovery answer
  ----------------------------
  */

  const submitDiscoveryAnswer = async (answer: string) => {

    if (!currentQuestion || !context || !answer.trim()) return;

    addMessage({
      role: "user",
      content: answer.trim(),
    });

    const mergedAnswers = {
      ...answers,
      [currentQuestion.key]: answer.trim(),
    };

    setAnswers(mergedAnswers);
    fnSetLoading(true);

    const response = await fetch("/api/chat/stream", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        context,
        answers: mergedAnswers,
        messages: uiContent?.streamFlow
      }),

    });

    const json = await response.json();

    if (json.nextQuestion) {

      if (json.message) {

        addMessage({
          role: "assistant",
          content: json.message,
        });

      }

      addMessage({
        role: "assistant",
        content: json.nextQuestion.question,
      });

      setCurrentQuestion(json.nextQuestion);

      fnSetLoading(false);

      return;
    }

    setCurrentQuestion(null);

    if (json.message) {

      addMessage({
        role: "assistant",
        content: json.message,
      });

    }

    await runBenefit(mergedAnswers);

    fnSetLoading(false);

  };

  return (

    <aside className="relative w-full border border-border bg-card text-card-foreground dark:bg-neutral-500 p-4">

      <div className="mx-auto max-w-4xl space-y-3">

        {/* Header */}

        <div className="flex items-center justify-between border-border pb-3">

          <GreetingBanner idSession={LdSession} idContent={uiContent} />
{/* 
          <button
            onClick={() => resetSession()}
            className="text-xs font-medium text-muted-foreground hover:text-foreground"
          >
            Close
          </button> */}

        </div>

        {/* Greeting */}

        <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-2 py-2 text-md text-slate-700">

          {greeting || fallbackGreeting}

        </div>

        {/* Messages */}

        <div
          ref={LdChatScrollRef}
          className="max-h-80 overflow-y-auto space-y-3 rounded-xl border bg-slate-50 p-3"
        >

          {messages.map((message) => (
            <AIMessage key={message.id} message={message} />
          ))}

          <AIStreaming iActive={LLoading} idContent={uiContent}/>

        </div>

        {/* Question */}

        {currentQuestion && (

          <div className="space-y-3 rounded-xl border border-border bg-muted/40 p-4">

            <ChatInput
              inputType={currentQuestion.inputType}
              options={currentQuestion.options}
              onSubmit={submitDiscoveryAnswer}
              idContent={uiContent}
            />

            {LLoading && (
              <p className="text-xs text-muted-foreground">
               {uiContent?.working ?? "working..."}
              </p>
            )}

          </div>

        )}

        {/* Results */}

        {followups.length ? (

          <FollowUpQuestionRenderer iaQuestions={followups} idContent={uiContent}/>

        ) : (

          <>
            <ResultSummaryRenderer idResult={result} idContent={uiContent}/>

            {result && (
            <>
             {uiContent?.chatbuttons?.map((iButton) => {
                  return (
                    <Button
                      key={iButton.label}
                      variant={iButton.variant ?? "outline"}
                      onClick={() => {
                        fnHandleFormButtonClick(
                          iButton.formMode as TformMode,
                          "containerOne",
                          iButton.label
                        );
                      }}
                    >
                      {iButton.label}
                    </Button>
                  );
                }
              )}
              {fnRenderFormBelowSection("containerOne", {
                idPdfData: {
                  type: "benefit",
                  benefitType,
                  result,
                  answers,
                  LdSession,
                  content: LdPdfContent
                } as TbenefitPdfData
              })}
              
            </>
          )}
          </>
        )}
      </div>

    </aside>

  );
}