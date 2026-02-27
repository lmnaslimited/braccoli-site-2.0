import { TbenefitType } from "@repo/middleware/types"
import { fnGetCacheData } from "../lib/strapi/get-data"
import { clTransformerFactory } from "@repo/middleware"
import {
  Tcontext,
  TbenefitQuestionsPageTarget,
  TbenefitQuestionItemTarget,
} from "@repo/middleware/types"

export async function getBenefitQuestions(
  benefitType: TbenefitType,
  locale: string,
): Promise<TbenefitQuestionItemTarget[]> {
  const context: Tcontext = {
    locale,
    filters: {
      benefitType: {
        eq: benefitType as TbenefitType,
      },
    },
  }

  const data = (await fnGetCacheData(
    context,
    clTransformerFactory.createTransformer("benefitQuestions"),
  )) as TbenefitQuestionsPageTarget

  const benefitEntry = data?.benefitQuestions?.[0]

  if (!benefitEntry?.questions?.length) {
    throw new Error(`No questions found for benefit type: ${benefitType}`)
  }

  return benefitEntry.questions
}
