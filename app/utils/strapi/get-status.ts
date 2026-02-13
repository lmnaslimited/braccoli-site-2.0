import { draftMode } from "next/headers"

export async function fnGetStatus() {
  const { isEnabled } = await draftMode()
  return isEnabled ? "DRAFT" : "PUBLISHED"
}