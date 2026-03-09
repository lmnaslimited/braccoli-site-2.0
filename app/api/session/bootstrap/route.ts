import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { cacheGet, cacheSet } from "../../../lib/redis/client"
import { fnTrack } from "../../../lib/rudder/chat-track"
import { fnGetSession, fnSaveSession } from "../../../lib/session/session"
import {TuserSession} from "@repo/middleware/types"

const LWhoisSchema = z.object({
  ip: z.string().optional(),
  city: z.string().optional(),
  region: z.string().optional(),
  country: z.string().optional(),
  connection: z.object({ org: z.string().optional() }).optional(),
})

async function fnFetchWhois(ip: string) {
  const LKey = process.env.WHOIS_IP_API_KEY
  if (!LKey || !ip) {
    return undefined
  }

  const LdRes = await fetch(`https://ipwho.is/${ip}?apiKey=${LKey}`)
  if (!LdRes.ok) return undefined
  const LdJson: unknown = await LdRes.json()
  const LdParsed = LWhoisSchema.safeParse(LdJson)
  if (!LdParsed.success) return undefined

  return {
    ip,
    city: LdParsed.data.city,
    region: LdParsed.data.region,
    country: LdParsed.data.country,
    org: LdParsed.data.connection?.org,
    enrichedAt: new Date().toISOString(),
  }
}

export async function POST(iRequest: NextRequest) {
  try {
    const LCurrentIp =
      iRequest.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? ""

    const idExisting = (await fnGetSession()) ?? {
      sessionId: crypto.randomUUID(),
      anonymousId: crypto.randomUUID(),
    }

    if (idExisting.enrichment?.ip !== LCurrentIp) {
      const emailKey = idExisting.identity?.email
        ? `geo:email:${idExisting.identity.email}`
        : null
      const ipKey = LCurrentIp ? `geo:ip:${LCurrentIp}` : null
      const cached =
        (emailKey ? await cacheGet(emailKey) : null) ??
        (ipKey ? await cacheGet(ipKey) : null)

      if (cached) {
        idExisting.enrichment = JSON.parse(cached)
      } else if (LCurrentIp) {
        const whois = await fnFetchWhois(LCurrentIp)
        if (whois) {
          idExisting.enrichment = whois
          if (ipKey)
            await cacheSet(ipKey, JSON.stringify(whois), 60 * 60 * 24 * 30)
          if (emailKey)
            await cacheSet(emailKey, JSON.stringify(whois), 60 * 60 * 24 * 30)
        }
      }
    }

    await fnSaveSession(idExisting as TuserSession)
    await fnTrack({
      anonymousId: idExisting.anonymousId,
      event: "benefit_session_started",
      properties: { sessionId: idExisting.sessionId },
    })

    return NextResponse.json({ ok: true, session: idExisting })
  } catch {
    return NextResponse.json(
      {
        error: "Unable to bootstrap session",
        code: "SESSION_BOOTSTRAP_FAILED",
      },
      { status: 500 },
    )
  }
}
