import { NextResponse } from "next/server"
import { getBenefitQuestions } from "../../../lib/benefit-questions-repository"
import { TbenefitContext } from "@repo/middleware/types"

export async function POST(request: Request) {
  const { context } = (await request.json()) as { context: TbenefitContext }

  const { searchParams } = new URL(request.url)
  const locale = searchParams.get("locale") ?? "en"

  const questions = await getBenefitQuestions(context.benefitType, locale)

  const firstQuestion = questions[0]

  return NextResponse.json({
    greeting: `Great! Get actionable insights in just a few guided steps with our ${context.benefitType.replaceAll("_", " ")}.`,
    question: firstQuestion,
  })
}
// Get actionable insights in just a few guided steps with our ROI Calculator