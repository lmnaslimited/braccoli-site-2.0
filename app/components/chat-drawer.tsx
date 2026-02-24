"use client"

import { useEffect, useMemo, useState } from "react"
import { useCTAContext } from "../context/cta-context-provider"
import type { UserSession } from "../types/session"
import type { BenefitType, CTAContext, DiscoveryQuestion } from "../types/engine"
import ChatInput from "../components/chat-input"
import GreetingBanner from "../components/greeting-banner"
import FollowUpQuestionRenderer from "../components/follow-up-question-renderer"
import ResultSummaryRenderer from "../components/result-summary-renderer"

const slugToBenefitType: Record<string, BenefitType> = {
  "roi-calculator": "ROI_CALCULATOR",
  "pipeline-audit": "PIPELINE_AUDIT",
  "cpq-maturity": "CPQ_MATURITY_SCAN",
}

export default function ChatDrawer() {
  const { isChatOpen, closeChat, benefitSlug } = useCTAContext()

  const [session, setSession] = useState<UserSession | null>(null)
  const [loading, setLoading] = useState(false)
  const [followups, setFollowups] = useState<Array<{ id: string; prompt: string }>>([])
  const [result, setResult] = useState<{ summary: string; score?: number; recommendation?: string }>()
  const [context, setContext] = useState<CTAContext | null>(null)
  const [greeting, setGreeting] = useState<string>("")
  const [currentQuestion, setCurrentQuestion] = useState<DiscoveryQuestion | null>(null)
  const [answers, setAnswers] = useState<Record<string, string>>({})

  useEffect(() => {
    if (!isChatOpen || !benefitSlug) return

    const run = async () => {
      const benefitType = slugToBenefitType[benefitSlug]
      if (!benefitType) return

      await fetch("/api/session/bootstrap", { method: "POST" })

      const response = await fetch("/api/session/me")
      const json = (await response.json()) as { session: UserSession | null }
      setSession(json.session)

      const initialContext: CTAContext = {
        benefitType,
        industry: "Transformer Manufacturing",
        entryPage: "/",
        leadSource: "Website CTA",
        userIntent: `Run ${benefitType.replaceAll("_", " ")}`,
      }

      setContext(initialContext)

      const chatStartResponse = await fetch("/api/chat/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ context: initialContext }),
      })

      const chatStart = await chatStartResponse.json()

      setGreeting(chatStart.greeting)
      setCurrentQuestion(chatStart.question ?? null)
      setAnswers({})
      setFollowups([])
      setResult(undefined)
      setLoading(false)
    }

    void run()
  }, [benefitSlug, isChatOpen])

  const fallbackGreeting = useMemo(() => {
    if (session?.identity?.name) return `Welcome back, ${session.identity.name}`
    return `Let's run your ${benefitSlug ?? "benefit"} flow.`
  }, [benefitSlug, session?.identity?.name])

  const runBenefit = async (discoveryAnswers: Record<string, string>) => {
    if (!benefitSlug || !session?.sessionId) return

    const response = await fetch("/api/benefit/run", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        benefitSlug,
        sessionId: session.sessionId,
        stage: followups.length ? "followup" : "standard_completed",
        answers: Object.entries(discoveryAnswers).map(([questionId, value]) => ({
          questionId,
          value,
        })),
      }),
    })

    const json = await response.json()
    setFollowups(json.followupQuestions ?? [])
    setResult(json.result)
  }

  const submitDiscoveryAnswer = async (answer: string) => {
    if (!currentQuestion || !context || !answer.trim()) return

    const mergedAnswers = { ...answers, [currentQuestion.key]: answer.trim() }
    setAnswers(mergedAnswers)
    setLoading(true)

    const response = await fetch("/api/chat/stream", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ context, answers: mergedAnswers }),
    })

    const json = await response.json()

    if (json.nextQuestion) {
      setCurrentQuestion(json.nextQuestion)
      setLoading(false)
      return
    }

    setCurrentQuestion(null)
    await runBenefit(mergedAnswers)
    setLoading(false)
  }

  if (!isChatOpen) return null

  return (
    <aside className="fixed bottom-4 sm:bottom-6 left-1/2 z-[120] w-[94%] sm:w-[92%] md:w-[88%] lg:w-[80%] max-w-2xl -translate-x-1/2 max-h-[92vh] sm:max-h-[88vh] overflow-y-auto rounded-2xl border border-border bg-card text-card-foreground dark:bg-neutral-500 shadow-[0_20px_60px_rgba(0,0,0,0.35)] dark:border-white/20 dark:shadow-[0_30px_100px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.18),0_0_50px_rgba(255,255,255,0.08)] p-4 sm:p-5 animate-[drawerSlideUp_0.28s_ease-out]">
      <div className="space-y-4">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2 text-lg sm:text-xl font-semibold leading-none">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            {greeting || fallbackGreeting}
          </div>

          <button
            onClick={closeChat}
            className="text-xs font-medium text-muted-foreground hover:text-foreground"
          >
            Close
          </button>
        </div>

        {/* Greeting Banner */}
        <GreetingBanner session={session} />

        {/* Question Block */}
        {currentQuestion && (
          <div className="space-y-3 rounded-xl border border-border bg-muted/40 p-4">
            <p className="text-sm font-medium text-foreground">
              {currentQuestion.question}
            </p>

            <ChatInput
              inputType={currentQuestion.inputType}
              options={currentQuestion.options}
              onSubmit={submitDiscoveryAnswer}
            />

            {loading && (
              <p className="text-xs text-muted-foreground">Working…</p>
            )}
          </div>
        )}

        {/* Empty State */}
        {!currentQuestion && !result && !followups.length && (
          <p className="text-sm text-muted-foreground">
            Answer the guided questions to run this benefit.
          </p>
        )}

        {/* Results / Followups */}
        {followups.length ? (
          <FollowUpQuestionRenderer questions={followups} />
        ) : (
          <ResultSummaryRenderer result={result} />
        )}
      </div>
    </aside>
  )
}