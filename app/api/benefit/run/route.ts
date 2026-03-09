import { NextResponse } from "next/server"
import { BenefitRunRequestSchema } from "../../../schema/benefit.schema"
import { fnGetSession, fnSaveSession } from "../../../lib/session/session"
import { fnBuildBenefitPrompt } from "../../../lib/benefit/prompt-builder"
import { fnRunBenefitWorkflow } from "../../../lib/n8n/client"
import { fnParseBenefitJson } from "../../../lib/benefit/json-parser"
import { fnUpsertBenefitHistory } from "../../../lib/benefit/benefit-session-store"
import { fnTrack } from "../../../lib/rudder/chat-track"

export async function POST(request: Request) {
  try {
    const LBody: unknown = await request.json()
    const idInput = BenefitRunRequestSchema.parse(LBody)
    const idSession = await fnGetSession()

    if (!idSession || idSession.sessionId !== idInput.sessionId) {
      return NextResponse.json(
        { error: "Invalid session", code: "SESSION_INVALID" },
        { status: 401 },
      )
    }

    const LdPrompts = fnBuildBenefitPrompt(idInput, idSession)
    const LdWorkflowResponse = await fnRunBenefitWorkflow({
      idSession,
      input: idInput,
      LdPrompts,
    })
    const LdParsed = fnParseBenefitJson(LdWorkflowResponse)

    if (LdParsed.followup_required) {
      await fnTrack({
        anonymousId: idSession.anonymousId,
        userId: idSession.identity?.email,
        event: "benefit_followup_triggered",
        properties: { benefitType: idInput.benefitType },
      })

      return NextResponse.json({
        ok: true,
        followupRequired: true,
        followupQuestions: LdParsed.followupQuestions ?? [],
      })
    }

    idSession.benefitHistory = fnUpsertBenefitHistory(
      idSession,
      idInput.benefitType,
      LdParsed.result?.score,
    )
    await fnSaveSession(idSession)

    await fnTrack({
      anonymousId: idSession.anonymousId,
      userId: idSession.identity?.email,
      event: "benefit_completed",
      properties: {
        benefitType: idInput.benefitType,
        score: LdParsed.result?.score,
      },
    })

    return NextResponse.json({
      ok: true,
      followupRequired: false,
      result: LdParsed.result,
    })
  } catch {
    return NextResponse.json(
      { error: "Benefit run failed", code: "BENEFIT_RUN_FAILED" },
      { status: 500 },
    )
  }
}
