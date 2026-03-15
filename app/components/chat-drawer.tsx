"use client";

import { useEffect, useMemo, useState, useRef } from "react";

import type {
  TbenefitContext,
  TbenefitType,
} from "@repo/middleware/types";

import type { DiscoveryQuestion } from "../types/engine";
import type { UserSession } from "../types/session";

import ChatInput from "../components/chat-input";
import GreetingBanner from "../components/greeting-banner";
import FollowUpQuestionRenderer from "../components/follow-up-question-renderer";
import ResultSummaryRenderer from "../components/result-summary-renderer";
import AIMessage from "../components/ai-message";
import AIStreaming from "../components/ai-streaming";

import { useAISessionStore } from "../store/ai-session-store";

import { Button } from "@repo/ui/components/ui/button";
import Link from "next/link";

type Props = {
  benefitType: TbenefitType;
};

export default function ChatDrawer({ benefitType }: Props) {

  const chatScrollRef = useRef<HTMLDivElement | null>(null);

  const { messages, addMessage, resetSession } = useAISessionStore();

  const [session, setSession] = useState<UserSession | null>(null);
  const [loading, setLoading] = useState(false);

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

  /*
  ----------------------------
  Auto scroll chat
  ----------------------------
  */

  useEffect(() => {

    const el = chatScrollRef.current;

    if (!el) return;

    el.scrollTop = el.scrollHeight;

  }, [messages, loading]);

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

    if (!benefitType) return;

    const run = async () => {

      await fetch("/api/session/bootstrap", { method: "POST" });

      const response = await fetch("/api/session/me");

      const json = (await response.json()) as {
        session: UserSession | null;
      };

      setSession(json.session);

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
      setLoading(false);
    };

    void run();

  }, [benefitType, addMessage]);

  /*
  ----------------------------
  Greeting fallback
  ----------------------------
  */

  const fallbackGreeting = useMemo(() => {

    if (session?.identity?.name)
      return `Welcome back, ${session.identity.name}`;

    return `Let's run your ${benefitType ?? "benefit"} flow.`;

  }, [benefitType, session?.identity?.name]);

  /*
  ----------------------------
  Benefit Runner
  ----------------------------
  */

  const runBenefit = async (discoveryAnswers: Record<string, string>) => {

    if (!benefitType || !session?.sessionId) return;

    const response = await fetch("/api/benefit/run", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        benefitType,
        sessionId: session.sessionId,
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
    setLoading(true);

    const response = await fetch("/api/chat/stream", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        context,
        answers: mergedAnswers,
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

      setLoading(false);

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

    setLoading(false);

  };

  return (

    <aside className="relative w-full border border-border bg-card text-card-foreground dark:bg-neutral-500 p-4">

      <div className="mx-auto max-w-4xl space-y-3">

        {/* Header */}

        <div className="flex items-center justify-between border-border pb-3">

          <GreetingBanner session={session} />

          <button
            onClick={() => resetSession()}
            className="text-xs font-medium text-muted-foreground hover:text-foreground"
          >
            Close
          </button>

        </div>

        {/* Greeting */}

        <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-2 py-2 text-sm text-slate-700">

          {greeting || fallbackGreeting}

        </div>

        {/* Messages */}

        <div
          ref={chatScrollRef}
          className="max-h-80 overflow-y-auto space-y-3 rounded-xl border bg-slate-50 p-3"
        >

          {messages.map((message) => (
            <AIMessage key={message.id} message={message} />
          ))}

          <AIStreaming active={loading} />

        </div>

        {/* Question */}

        {currentQuestion && (

          <div className="space-y-3 rounded-xl border border-border bg-muted/40 p-4">

            <ChatInput
              inputType={currentQuestion.inputType}
              options={currentQuestion.options}
              onSubmit={submitDiscoveryAnswer}
            />

            {loading && (
              <p className="text-xs text-muted-foreground">
                Working…
              </p>
            )}

          </div>

        )}

        {/* Results */}

        {followups.length ? (

          <FollowUpQuestionRenderer questions={followups} />

        ) : (

          <>
            <ResultSummaryRenderer result={result} />

            {result && (

              <div className="flex gap-3 pt-3">

                <Link href="/en/contact">
                  <Button variant="default">
                    Book Consultation
                  </Button>
                </Link>

                <Button variant="outline">
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