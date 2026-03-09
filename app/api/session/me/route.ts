import { NextResponse } from "next/server"
import { fnGetSession } from "../../../lib/session/session"

export async function GET() {
  try {
    const idSession = await fnGetSession()
    if (!idSession) {
      return NextResponse.json({ ok: true, session: null })
    }

    return NextResponse.json({
      ok: true,
      session: {
        sessionId: idSession.sessionId,
        anonymousId: idSession.anonymousId,
        identity: idSession.identity,
        enrichment: idSession.enrichment,
        benefitHistory: idSession.benefitHistory,
      },
    })
  } catch {
    return NextResponse.json(
      { error: "Unable to read session", code: "SESSION_READ_FAILED" },
      { status: 500 },
    )
  }
}
