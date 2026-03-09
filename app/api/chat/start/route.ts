import { NextResponse } from "next/server"
import { fnGetBenefitQuestions } from "../../../lib/strapi/benefit-questions"
import { TbenefitContext } from "@repo/middleware/types"

export async function POST(iRequest: Request) {
  const { context:idContext } = (await iRequest.json()) as { context: TbenefitContext }

  const { searchParams } = new URL(iRequest.url)
  const iLocale = searchParams.get("locale") ?? "en"

  const LaQuestions = await fnGetBenefitQuestions(idContext.benefitType, iLocale)

  const LdFirstQuestion = LaQuestions[0]

  return NextResponse.json({
    greeting: `Get actionable insights in just a few guided steps with our ${idContext.benefitType.replaceAll("_", " ")}.`,
    question: LdFirstQuestion,
  })
}