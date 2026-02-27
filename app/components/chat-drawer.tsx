"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useCTAContext } from "@repo/ui/context/cta-context-provider";
import type { UserSession } from "../types/session";
import type {
  BenefitType,
  CTAContext,
  DiscoveryQuestion,
} from "../types/engine";
import ChatInput from "../components/chat-input";
import FollowUpQuestionRenderer from "../components/follow-up-question-renderer";
import ResultSummaryRenderer from "../components/result-summary-renderer";
import AIMessage from "../components/ai-message";
import AIStreaming from "../components/ai-streaming";
import { useAISessionStore } from "../store/ai-session-store";

const slugToBenefitType: Record<string, BenefitType> = {
  roi_calculator: "ROI_CALCULATOR",
  pipeline_audit: "PIPELINE_AUDIT",
  cpq_maturity: "CPQ_MATURITY_SCAN",
};

export default function ChatDrawer() {
  const { messages, addMessage } = useAISessionStore();
  const { isChatOpen, closeChat, benefitSlug } = useCTAContext();

  const chatScrollRef = useRef<HTMLDivElement | null>(null);

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
  const [context, setContext] = useState<CTAContext | null>(null);
  const [greeting, setGreeting] = useState<string>("");
  const [currentQuestion, setCurrentQuestion] =
    useState<DiscoveryQuestion | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  // =========================
  // INITIAL LOAD
  // =========================
  useEffect(() => {
    if (!isChatOpen || !benefitSlug) return;

    const run = async () => {
      const benefitType = slugToBenefitType[benefitSlug];
      if (!benefitType) return;

      await fetch("/api/session/bootstrap", { method: "POST" });

      const response = await fetch("/api/session/me");
      const json = (await response.json()) as { session: UserSession | null };
      setSession(json.session);

      const initialContext: CTAContext = {
        benefitType,
        industry: "Transformer Manufacturing",
        entryPage: "/",
        leadSource: "Website CTA",
        userIntent: `Run ${benefitType.replaceAll("_", " ")}`,
      };

      setContext(initialContext);

      const chatStartResponse = await fetch("/api/chat/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ context: initialContext }),
      });

      const chatStart = await chatStartResponse.json();

      setGreeting(chatStart.greeting);

      // ❗ Show FIRST question as chat bubble (POC behavior)
      if (chatStart.question) {
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
  }, [benefitSlug, isChatOpen]);

  // =========================
  // AUTO SCROLL (POC behavior)
  // =========================
  useEffect(() => {
    const el = chatScrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, loading]);

  const fallbackGreeting = useMemo(() => {
    if (session?.identity?.name)
      return `Welcome back, ${session.identity.name}`;
    return `Benefit Assistant`;
  }, [benefitSlug, session?.identity?.name]);

  // =========================
  // RUN BENEFIT
  // =========================
  const runBenefit = async (discoveryAnswers: Record<string, string>) => {
    if (!benefitSlug || !session?.sessionId) return;

    const response = await fetch("/api/benefit/run", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        benefitSlug,
        sessionId: session.sessionId,
        stage: followups.length ? "followup" : "standard_completed",
        answers: Object.entries(discoveryAnswers).map(
          ([questionId, value]) => ({ questionId, value }),
        ),
      }),
    });

    const json = await response.json();

    setFollowups(json.followupQuestions ?? []);
    setResult(json.result);

    // ❗ Show result summary inside chat
    if (json.result?.summary) {
      addMessage({
        role: "assistant",
        content: json.result.summary,
      });
    }
  };

  // =========================
  // USER ANSWER HANDLER
  // =========================
  const submitDiscoveryAnswer = async (answer: string) => {
    if (!currentQuestion || !context || !answer.trim()) return;

    // USER bubble
    addMessage({
      role: "user",
      content: answer.trim(),
    });

    const mergedAnswers = { ...answers, [currentQuestion.key]: answer.trim() };
    setAnswers(mergedAnswers);
    setLoading(true);

    const response = await fetch("/api/chat/stream", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ context, answers: mergedAnswers }),
    });

    const json = await response.json();

    if (json.nextQuestion) {
      // 1️⃣ Show help
      if (json.message) {
        addMessage({
          role: "assistant",
          content: json.message,
        });
      }
      // 2️ Then show the next question as a new bubble
      addMessage({
        role: "assistant",
        content: json.nextQuestion.question,
      });


      setCurrentQuestion(json.nextQuestion);
      setLoading(false);
      return;
    }

setCurrentQuestion(null);

// ⭐ Show final backend message (e.g., "Running analysis...")
if (json.message) {
  addMessage({
    role: "assistant",
    content: json.message,
  });
}

await runBenefit(mergedAnswers);
setLoading(false);}

  if (!isChatOpen) return null;

  // =========================
  // UI (POC-STYLE)
  // =========================
  return (
    <aside className="fixed inset-x-0 bottom-0 z-[120] w-full border border-border bg-card text-card-foreground dark:bg-neutral-500 shadow-xl p-4">
      <div className="mx-auto max-w-4xl space-y-3">
        {/* HEADER */}
        <div className="flex items-center justify-between border-b pb-3">
          <div className="text-lg font-semibold">
            {greeting || fallbackGreeting}
          </div>

          <button
            onClick={closeChat}
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            Close
          </button>
        </div>

        {/* CHAT HISTORY */}
        <div
          ref={chatScrollRef}
          className="max-h-80 overflow-y-auto space-y-3 rounded-xl border bg-slate-50 p-3"
        >
          {messages.map((message) => (
            <AIMessage key={message.id} message={message} />
          ))}

          <AIStreaming active={loading} />
        </div>

        {/* INPUT */}
        {currentQuestion && (
          <div className="rounded-xl border bg-muted/40 p-4">
            <ChatInput
              inputType={currentQuestion.inputType}
              options={currentQuestion.options}
              onSubmit={submitDiscoveryAnswer}
            />
          </div>
        )}

        {/* EMPTY STATE */}
        {/* {!currentQuestion && !result && !followups.length && (
          <p className="text-sm text-muted-foreground">
               Answer the guided questions to run this benefit.
          </p>
        )} */}

        {/* RESULTS */}
        {followups.length ? (
          <FollowUpQuestionRenderer questions={followups} />
        ) : (
          <ResultSummaryRenderer result={result} />
        )}
      </div>
    </aside>
  );
}
