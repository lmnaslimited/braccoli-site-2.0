import { NextResponse } from "next/server"
import { getBenefitQuestions } from "../../../lib/benefit-questions-repository"
import { CTAContext } from "../../../types/engine"

export async function POST(request: Request) {
  const { context } = (await request.json()) as { context: CTAContext }
  // console.log("Received context for chat start:", context)
  const questions = await getBenefitQuestions(context.benefitType)
  console.log(
    "Fetched questions for benefit type:",
    context.benefitType,
    questions,
  )
  const firstQuestion = questions[0]

  return NextResponse.json({
    greeting: `Great choice. I will run a ${context.benefitType.replaceAll("_", " ")} with you and keep this under 2 clicks from insight to action.`,
    question: firstQuestion,
  })
}
