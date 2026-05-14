import { NextResponse } from "next/server"
import { getBenefitQuestions } from "../../../lib/benefit-questions-repository"
import { TbenefitContext } from "@repo/middleware/types"

export async function POST(request: Request) {
  const { context, answers, messages } = (await request.json()) as {
    context: TbenefitContext
    answers: Record<string, string>
    messages: {label: string, value: string}
  }
  const { searchParams } = new URL(request.url)
  const LLocale = searchParams.get("locale") ?? "en"
  // Fetch question flow based on benefit type and locale
  const LaFlow = await getBenefitQuestions(context.benefitType, LLocale)
  // Count how many questions have already been answered
  const LAnsweredCount = Object.keys(answers).length
  // Get the next question based on answered count
  const LNextQuestion = LaFlow[LAnsweredCount]
  
  if (!LNextQuestion) {
    return NextResponse.json({
      message: messages.label,
      nextQuestion: null,
    })
  }

  return NextResponse.json({
    message: messages.value,
    nextQuestion:LNextQuestion,
  })
}
