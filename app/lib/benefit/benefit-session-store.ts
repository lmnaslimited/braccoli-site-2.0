import type { TuserSession } from "@repo/middleware/types"

export function fnUpsertBenefitHistory(
  session: TuserSession,
  benefitType: string,
  score?: number,
): TuserSession["benefitHistory"] {
  const LaHistory = session.benefitHistory ?? []
  const LaWithoutCurrent = LaHistory.filter(
    (entry) => entry.benefitType !== benefitType,
  )
  return [
    ...LaWithoutCurrent,
    {
      benefitType,
      lastCalculatedAt: new Date().toISOString(),
      lastScore: score,
    },
  ]
}
