import { NextResponse } from "next/server"
import { getBenefitQuestions } from "../../../lib/benefit-questions-repository"
import { TbenefitContext } from "@repo/middleware/types"

export async function POST(request: Request) {
  const { context, message } = (await request.json()) as { context: TbenefitContext , message:string}

  const { searchParams } = new URL(request.url)
  const LLocale = searchParams.get("locale") ?? "en"
  // Fetch benefit questions based on benefit type and locale
  const LaQuestions = await getBenefitQuestions(context.benefitType, LLocale)
   // Get the first question from the questions array
  const LFirstQuestion = LaQuestions[0]

  return NextResponse.json({
    greeting: `${message} ${context.benefitType.replaceAll("_", " ")}.`,
    question: LFirstQuestion,
  })
}
// Get actionable insights in just a few guided steps with our ROI Calculator