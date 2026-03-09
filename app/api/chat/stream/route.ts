import { NextResponse } from "next/server"
import { fnGetBenefitQuestions } from "../../../lib/strapi/benefit-questions"
import { TbenefitContext } from "@repo/middleware/types"

export async function POST(iRequest: Request) {
  const { context, answers } = (await iRequest.json()) as {
    context: TbenefitContext
    answers: Record<string, string>
  }
  const { searchParams } = new URL(iRequest.url)
  const locale = searchParams.get("locale") ?? "en"

  const LaFlow = await fnGetBenefitQuestions(context.benefitType, locale)
  const LAnsweredCount = Object.keys(answers).length
  const LdNextQuestion = LaFlow[LAnsweredCount]

  if (!LdNextQuestion) {
    return NextResponse.json({
      message: "Perfect. I have enough data. Running analysis now.",
      nextQuestion: null,
    })
  }

  return NextResponse.json({
    message: "Thanks. One more input so I can personalize this output.",
    nextQuestion: LdNextQuestion,
  })
}
