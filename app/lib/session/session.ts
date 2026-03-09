import { cookies } from "next/headers"
import { createHmac } from "node:crypto"
import type { TuserSession } from "@repo/middleware/types"

const LCookieName = "lmnas_session"
const LDefaultSecret = "dev-session-secret-change-me"

function fnGetSecret() {
  return process.env.SESSION_SECRET ?? LDefaultSecret
}

function fnSign(value: string) {
  return createHmac("sha256", fnGetSecret()).update(value).digest("hex")
}

function fnEncodeSession(iData: TuserSession) {
  const payload = Buffer.from(JSON.stringify(iData)).toString("base64url")
  const signature = fnSign(payload)
  return `${payload}.${signature}`
}

function fnDecodeSession(iRaw: string): TuserSession | null {
  const [payload, signature] = iRaw.split(".")
  if (!payload || !signature || fnSign(payload) !== signature) {
    return null
  }

  try {
    return JSON.parse(
      Buffer.from(payload, "base64url").toString("utf8"),
    ) as TuserSession
  } catch {
    return null
  }
}

export async function fnGetSession(): Promise<TuserSession | null> {
  const cookieStore = await cookies()

  const raw = cookieStore.get(LCookieName)?.value

  if (!raw) {
    return null
  }
  return fnDecodeSession(raw)
}

export async function fnSaveSession(iSession: TuserSession): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.set(LCookieName, fnEncodeSession(iSession), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  })
}
