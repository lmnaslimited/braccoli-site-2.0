import type { UserSession } from "../../types/session"

export function upsertBenefitHistory(
  session: UserSession,
  benefitType: string,
  score?: number,
): UserSession["benefitHistory"] {
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
