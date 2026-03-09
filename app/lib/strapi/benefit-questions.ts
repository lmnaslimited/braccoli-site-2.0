import { TbenefitType } from "@repo/middleware/types"
import { fnGetCacheData } from "../strapi/get-data"
import { clTransformerFactory } from "@repo/middleware"
import {
  Tcontext,
  TbenefitQuestionsPageTarget,
  TbenefitQuestionItemTarget,
} from "@repo/middleware/types"

export async function fnGetBenefitQuestions(
  iBenefitType: TbenefitType,
  iLocale: string,
): Promise<TbenefitQuestionItemTarget[]> {
  const LdContext: Tcontext = {
    locale: iLocale,
    filters: {
      benefitType: {
        eq: iBenefitType as TbenefitType,
      },
    },
  }

  const LdData = (await fnGetCacheData(
    LdContext,
    clTransformerFactory.createTransformer("benefitQuestions"),
  )) as TbenefitQuestionsPageTarget

  const benefitEntry = LdData?.benefitQuestions?.[0]

  if (!benefitEntry?.questions?.length) {
    throw new Error(`No questions found for benefit type: ${iBenefitType}`)
  }

  return benefitEntry.questions
}
