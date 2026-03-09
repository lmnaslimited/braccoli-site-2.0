import type { TuserSession } from "@repo/middleware/types"
import type { BenefitRunRequest } from "../../schema/benefit.schema"

export function fnBuildBenefitPrompt(
  input: BenefitRunRequest,
  session: TuserSession,
) {
  const LdPrevious = session.benefitHistory?.find(
    (item) => item.benefitType === input.benefitType,
  )

  return {
    system: [
      "You are LMNAs benefit intelligence assistant.",
      `Geo country: ${session.enrichment?.country ?? "unknown"}`,
      LdPrevious?.lastScore
        ? `Previous score: ${LdPrevious.lastScore}`
        : "No previous score found.",
    ].join("\n"),
    user: JSON.stringify({
      benefitType: input.benefitType,
      stage: input.stage,
      answers: input.answers,
    }),
  }
}
