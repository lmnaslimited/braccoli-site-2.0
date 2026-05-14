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

  const [LaFollowups, fnSetFollowups] = useState<
    Array<{ id: string; prompt: string }>
  >([]);

  const [LdResult, fnSetResult] = useState<{
    summary: string;
    score?: number;
    recommendation?: string;
  }>();

  const [LdContext, fnSetContext] = useState<TbenefitContext | null>(null);

  const [LGreeting, fnSetGreeting] = useState("");

  const [LdCurrentQuestion, fnSetCurrentQuestion] =
    useState<DiscoveryQuestion | null>(null);

  const [LaAnswers, fnSetAnswers] = useState<Record<string, string>>({});

  // State to store chat UI content fetched from API
  const [LdUiContent, fnSetUiContent] = useState<TbenefitChat | null>(null);
  // State to store benefit PDF content based on selected benefit type
  const [LdPdfContent, fnSetPdfContent] = useState<TbenefitPdfContent | null>(null)
  const LdParams = useParams();

  const LLocale = LdParams.locale as string;
  // Fetch localized chat UI content whenever locale changes
  useEffect(() => {

    const fnFetchChatData = async () => {
  
      try {
        // API call to fetch chat content for current locale
        const LdGetChatData = await fetch(
          `/api/benefit/chat-data?locale=${LLocale}`
        );
  
        const LdChatData = await LdGetChatData.json();
        
        fnSetUiContent(LdChatData);
  
      } catch (LError) {
  
        console.error("Failed to load chat content", LError);
  
      }
  
    };
  
    void fnFetchChatData();
  
  }, [LLocale]);

  // Fetch benefit PDF content whenever benefit type or locale changes
  useEffect(()=>{
    const fnFetchPdfData = async () => {
      try {
         // API call to fetch PDF content for locale and benefit type
        const LdGetChatData = await fetch(
          `/api/benefit/benefit-pdf?locale=${LLocale}&benefit_type=${benefitType}`
        );
        const LaChatData = await LdGetChatData.json();
        
        fnSetPdfContent(LaChatData);
        
      } catch (LError) {
        console.error("Failed to load benefit pdf content", LError);
      }
    };
  
    void fnFetchPdfData();
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

      if (!benefitType || !LdUiContent|| LInitializedRef.current) return;

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

      fnSetContext(initialContext);
      const chatStartResponse = await fetch("/api/chat/start", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          context: initialContext,
          message: LdUiContent?.startFlowText
        }),

      });

      const chatStart = await chatStartResponse.json();

      fnSetGreeting(chatStart.greeting);

      if (chatStart.question?.question) {

        fnSetCurrentQuestion(chatStart.question);

        addMessage({
          role: "assistant",
          content: chatStart.question.question,
        });

      }

      fnSetAnswers({});
      fnSetFollowups([]);
      fnSetResult(undefined);
      fnSetLoading(false);
    };

    void run();

  }, [benefitType, LdUiContent, addMessage]);

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
        stage: LaFollowups.length ? "followup" : "standard_completed",
        answers: Object.entries(discoveryAnswers).map(
          ([questionId, value]) => ({
            questionId,
            value,
          })
        ),
      }),

    });

    const json = await response.json();

    fnSetFollowups(json.followupQuestions ?? []);
    fnSetResult(json.result);

  };

  /*
  ----------------------------
  Submit discovery answer
  ----------------------------
  */

  const submitDiscoveryAnswer = async (answer: string) => {

    if (!LdCurrentQuestion || !LdContext || !answer.trim()) return;

    addMessage({
      role: "user",
      content: answer.trim(),
    });

    const mergedAnswers = {
      ...LaAnswers,
      [LdCurrentQuestion.key]: answer.trim(),
    };

    fnSetAnswers(mergedAnswers);
    fnSetLoading(true);

    const response = await fetch("/api/chat/stream", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        context: LdContext,
        answers: mergedAnswers,
        messages: LdUiContent?.streamFlow
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

      fnSetCurrentQuestion(json.nextQuestion);

      fnSetLoading(false);

      return;
    }

    fnSetCurrentQuestion(null);

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

          <GreetingBanner idSession={LdSession} idContent={LdUiContent} />
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

          {LGreeting || fallbackGreeting}

        </div>

        {/* Messages */}

        <div
          ref={LdChatScrollRef}
          className="max-h-80 overflow-y-auto space-y-3 rounded-xl border bg-slate-50 p-3"
        >

          {messages.map((message) => (
            <AIMessage key={message.id} message={message} />
          ))}

          <AIStreaming iActive={LLoading} idContent={LdUiContent}/>

        </div>

        {/* Question */}

        {LdCurrentQuestion && (

          <div className="space-y-3 rounded-xl border border-border bg-muted/40 p-4">

            <ChatInput
              inputType={LdCurrentQuestion.inputType}
              options={LdCurrentQuestion.options}
              onSubmit={submitDiscoveryAnswer}
              idContent={LdUiContent}
            />

            {LLoading && (
              <p className="text-xs text-muted-foreground">
               {LdUiContent?.working ?? "working..."}
              </p>
            )}

          </div>

        )}

        {/* Results */}

        {LaFollowups.length ? (

          <FollowUpQuestionRenderer iaQuestions={LaFollowups} idContent={LdUiContent}/>

        ) : (

          <>
            <ResultSummaryRenderer idResult={LdResult} idContent={LdUiContent}/>

            {LdResult && (
            <>
            <div className="flex flex-wrap gap-2">
             {LdUiContent?.chatbuttons?.map((iButton) => {
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
              </div>
              {fnRenderFormBelowSection("containerOne", {
                idPdfData: {
                  type: "benefit",
                  benefitType,
                  result:LdResult,
                  answers:LaAnswers,
                  session:LdSession,
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