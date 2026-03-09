"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import { useCTAContext } from "@repo/ui/context/cta-context-provider";
import type {
  TbenefitContext,
  TdiscoveryQuestion,
  TuserSession,
} from "@repo/middleware/types";

import ChatInput from "../components/chat-input";
import GreetingBanner from "../components/greeting-banner";
import FollowUpQuestionRenderer from "../components/follow-up-question-renderer";
import ResultSummaryRenderer from "../components/result-summary-renderer";
import AIMessage from "./message-box";
import AIStreaming from "./streaming";
import { useAISessionStore } from "../store/ai-session-store";

import { Button } from "@repo/ui/components/ui/button";
import Link from "next/link";

export default function ChatDrawer() {
  const LChatScrollRef = useRef<HTMLDivElement | null>(null);
  const { LaMessages, fnAddMessage, fnResetSession } = useAISessionStore();
  const { isChatOpen, closeChat, benefitType } = useCTAContext();

  const [LdSession, setSession] = useState<TuserSession | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [LaFollowups, setFollowups] = useState<
    Array<{ id: string; prompt: string }>
  >([]);
  const [LdResult, setResult] = useState<{
    summary: string;
    score?: number;
    recommendation?: string;
  }>();
  const [LdContext, setContext] = useState<TbenefitContext | null>(null);
  const [LGreeting, setGreeting] = useState<string>("");
  const [LdCurrentQuestion, setCurrentQuestion] =
    useState<TdiscoveryQuestion | null>(null);
  const [LdAnswers, setAnswers] = useState<Record<string, string>>({});

  useEffect(() => {
    const el = LChatScrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [LaMessages, isLoading]);

  useEffect(() => {
    if (!isChatOpen || !benefitType) return;

    console.log("Chat opened with benefit type:", benefitType);

    const run = async () => {
      await fetch("/api/session/bootstrap", { method: "POST" });

      const response = await fetch("/api/session/me");
      const json = (await response.json()) as { session: TuserSession | null };
      setSession(json.session);

      const initialContext: TbenefitContext = {
        benefitType,
        industry: "Transformer Manufacturing",
        entryPage: "/",
        leadSource: "Website CTA",
        userIntent: `Run ${benefitType.replaceAll("_", " ")}`,
      };

      console.log("Initial CTA context:", initialContext);

      setContext(initialContext);

      const chatStartResponse = await fetch("/api/chat/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ context: initialContext }),
      });

      const chatStart = await chatStartResponse.json();

      setGreeting(chatStart.greeting);
      if (chatStart.question?.question) {
        setCurrentQuestion(chatStart.question);

        fnAddMessage({
          role: "assistant",
          content: chatStart.question.question,
        });
      }
      setAnswers({});
      setFollowups([]);
      setResult(undefined);
      setLoading(false);
    };

    void run();
  }, [benefitType, isChatOpen]);

  const fallbackGreeting = useMemo(() => {
    if (LdSession?.identity?.name)
      return `Welcome back, ${LdSession.identity.name}`;
    return `Let's run your ${benefitType ?? "benefit"} flow.`;
  }, [benefitType, LdSession?.identity?.name]);

  const runBenefit = async (discoveryAnswers: Record<string, string>) => {
    if (!benefitType || !LdSession?.sessionId) return;

    const response = await fetch("/api/benefit/run", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        benefitType,
        sessionId: LdSession.sessionId,
        stage: LaFollowups.length ? "followup" : "standard_completed",
        answers: Object.entries(discoveryAnswers).map(
          ([questionId, value]) => ({
            questionId,
            value,
          }),
        ),
      }),
    });

    const json = await response.json();
    setFollowups(json.followupQuestions ?? []);
    setResult(json.result);
  };

  const submitDiscoveryAnswer = async (answer: string) => {
    if (!LdCurrentQuestion || !LdContext || !answer.trim()) return;

    // USER bubble
    fnAddMessage({
      role: "user",
      content: answer.trim(),
    });

    const mergedAnswers = { ...LdAnswers, [LdCurrentQuestion.key]: answer.trim() };
    setAnswers(mergedAnswers);
    setLoading(true);

    const response = await fetch("/api/chat/stream", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ context:LdContext, answers: mergedAnswers }),
    });

    const json = await response.json();

    if (json.nextQuestion) {
      if (json.message) {
        fnAddMessage({
          role: "assistant",
          content: json.message,
        });
      }

      fnAddMessage({
        role: "assistant",
        content: json.nextQuestion.question,
      });

      setCurrentQuestion(json.nextQuestion);
      setLoading(false);
      return;
    }

    setCurrentQuestion(null);

    if (json.message) {
      fnAddMessage({
        role: "assistant",
        content: json.message,
      });
    }

    await runBenefit(mergedAnswers);
    setLoading(false);
  };

  if (!isChatOpen) return null;

  return (
    <aside className="fixed inset-x-0 bottom-0 z-[120] w-full border border-border bg-card text-card-foreground dark:bg-neutral-500 shadow-xl p-4">
      <div className="mx-auto max-w-4xl space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between border-border pb-3">
          <GreetingBanner session={LdSession} />

          <button
            onClick={() => {
              closeChat();
              fnResetSession();
            }}
            className="text-xs font-medium text-muted-foreground hover:text-foreground"
          >
            Close
          </button>
        </div>

        {/* Greeting Banner */}

        <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-2 py-2 text-sm text-slate-700">
          {/* <span className="h-2 w-2 rounded-full bg-green-500" /> */}
          {LGreeting || fallbackGreeting}
        </div>
        <div
          ref={LChatScrollRef}
          className="max-h-80 overflow-y-auto space-y-3 rounded-xl border bg-slate-50 p-3"
        >
          {LaMessages.map((message) => (
            <AIMessage key={message.id} message={message} />
          ))}

          <AIStreaming active={isLoading} />
        </div>

        {/* Question Block */}
        {LdCurrentQuestion && (
          <div className="space-y-3 rounded-xl border border-border bg-muted/40 p-4">
            {/* <p className="text-sm font-medium text-foreground">
              {currentQuestion.question}
            </p> */}

            <ChatInput
              inputType={LdCurrentQuestion.inputType}
              options={LdCurrentQuestion.options}
              onSubmit={submitDiscoveryAnswer}
            />

            {isLoading && (
              <p className="text-xs text-muted-foreground">Working…</p>
            )}
          </div>
        )}

        {/* Results / Followups */}
        {LaFollowups.length ? (
          <FollowUpQuestionRenderer questions={LaFollowups} />
        ) : (
          <>
            <ResultSummaryRenderer result={LdResult} />

            {LdResult && (
              <div className="flex gap-3 pt-3">
                <Link href="/en/contact">
                  <Button
                    variant="default"
                    onClick={() => {
                      closeChat();
                      fnResetSession();
                    }}
                  >
                    Book Consultation
                  </Button>
                </Link>

                <Button
                  variant="outline"
                  onClick={() => {
                    console.log("Secondary action clicked");
                  }}
                >
                  Download Full Report
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </aside>
  );
}
