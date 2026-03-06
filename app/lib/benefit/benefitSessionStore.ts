import type { TuserSession } from "@repo/middleware/types"

export function upsertBenefitHistory(
  session: TuserSession,
  benefitType: string,
  score?: number,
): TuserSession["benefitHistory"] {
  const history = session.benefitHistory ?? []
  const withoutCurrent = history.filter(
    (entry) => entry.benefitType !== benefitType,
  )
  return [
    ...withoutCurrent,
    {
      benefitType,
      lastCalculatedAt: new Date().toISOString(),
      lastScore: score,
    },
  ]
}
