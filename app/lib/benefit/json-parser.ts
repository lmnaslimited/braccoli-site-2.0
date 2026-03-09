import { N8NResultSchema, type N8NResult } from "../../schema/benefit.schema"

export function fnParseBenefitJson(iPayload: unknown): N8NResult {
  let LTarget = iPayload
  if (typeof iPayload === "string") {
    try {
      LTarget = JSON.parse(iPayload)
    } catch {
      LTarget = null
    }
  }

  const parsed = N8NResultSchema.safeParse(LTarget)
  if (parsed.success) {
    return parsed.data
  }

  if (typeof iPayload === "string") {
    const retried = N8NResultSchema.safeParse(JSON.parse(iPayload.trim()))
    if (retried.success) {
      return retried.data
    }
  }
  throw new Error("invalid_benefit_json")
}
