import { NextResponse } from "next/server"
import { BenefitRunRequestSchema } from "../../../schema/benefit.schema"
import { getSession, saveSession } from "../../../lib/session/session"
import { buildBenefitPrompt } from "../../../lib/benefit/promptBuilder"
import { runBenefitWorkflow } from "../../../lib/n8n/client"
import { parseBenefitJson } from "../../../lib/benefit/jsonParser"
import { upsertBenefitHistory } from "../../../lib/benefit/benefitSessionStore"
import { track } from "../../../lib/rudder/chat-track"

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json()
    const input = BenefitRunRequestSchema.parse(body)
    const session = await getSession()

    if (!session || session.sessionId !== input.sessionId) {
      return NextResponse.json(
        { error: "Invalid session", code: "SESSION_INVALID" },
        { status: 401 },
      )
    }

    const prompts = buildBenefitPrompt(input, session)
    const workflowResponse = await runBenefitWorkflow({
      session,
      input,
      prompts,
    })
    const parsed = parseBenefitJson(workflowResponse)

    if (parsed.followup_required) {
      await track({
        anonymousId: session.anonymousId,
        userId: session.identity?.email,
        event: "benefit_followup_triggered",
        properties: { benefitType: input.benefitType },
      })

      return NextResponse.json({
        ok: true,
        followupRequired: true,
        followupQuestions: parsed.followupQuestions ?? [],
      })
    }

    session.benefitHistory = upsertBenefitHistory(
      session,
      input.benefitType,
      parsed.result?.score,
    )
    await saveSession(session)

    await track({
      anonymousId: session.anonymousId,
      userId: session.identity?.email,
      event: "benefit_completed",
      properties: {
        benefitType: input.benefitType,
        score: parsed.result?.score,
      },
    })

    return NextResponse.json({
      ok: true,
      followupRequired: false,
      result: parsed.result,
    })
  } catch {
    return NextResponse.json(
      { error: "Benefit run failed", code: "BENEFIT_RUN_FAILED" },
      { status: 500 },
    )
  }
}
