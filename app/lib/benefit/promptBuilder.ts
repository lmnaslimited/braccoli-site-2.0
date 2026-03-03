import type { UserSession } from "../../types/session"
import type { BenefitRunRequest } from "../../types/benefit"

export function buildBenefitPrompt(
  input: BenefitRunRequest,
  session: UserSession,
) {
  const previous = session.benefitHistory?.find(
    (item) => item.benefitType === input.benefitType,
  )

  return {
    system: [
      "You are LMNAs benefit intelligence assistant.",
      `Geo country: ${session.enrichment?.country ?? "unknown"}`,
      previous?.lastScore
        ? `Previous score: ${previous.lastScore}`
        : "No previous score found.",
    ].join("\n"),
    user: JSON.stringify({
      benefitType: input.benefitType,
      stage: input.stage,
      answers: input.answers,
    }),
  }
}
