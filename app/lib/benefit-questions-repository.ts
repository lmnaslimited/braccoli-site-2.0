import { BenefitType, DiscoveryQuestion } from "../types/engine"

type StrapiQuestion = {
  id?: number
  questionId?: string
  key?: string
  question?: string
  inputType?: DiscoveryQuestion["inputType"]
  options?: string[] | string | null
  order?: number
}

type StrapiBenefitEntry = {
  id?: number
  documentId?: string
  benefitType?: BenefitType
  questions?: StrapiQuestion[]
}

type StrapiResponse = {
  data?: StrapiBenefitEntry[]
}

const STRAPI_URL = process.env.STRAPI_BASE_URL

function normalizeOptions(
  options: StrapiQuestion["options"],
): string[] | undefined {
  if (!options) return undefined

  if (Array.isArray(options)) {
    return options.filter((v): v is string => typeof v === "string")
  }

  return options
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean)
}

function toDiscoveryQuestion(q: StrapiQuestion): DiscoveryQuestion {
  if (!q.key || !q.question || !q.inputType) {
    throw new Error("Invalid question structure received from Strapi")
  }

  return {
    questionid: String(q.questionId ?? q.id ?? q.key),
    key: q.key,
    question: q.question,
    inputType: q.inputType,
    options: normalizeOptions(q.options),
  }
}

async function fetchFromStrapi(
  benefitType: BenefitType,
): Promise<DiscoveryQuestion[]> {
  const endpoint = new URL("/api/benefit-questions", STRAPI_URL)

  endpoint.searchParams.set("benefitType", benefitType)
  endpoint.searchParams.set("populate", "questions")

  const response = await fetch(endpoint.toString(), {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error(`Strapi fetch failed: ${response.status}`)
  }

  const payload = (await response.json()) as StrapiResponse

  const benefitEntry = payload.data?.[0]

  if (!benefitEntry?.questions?.length) {
    throw new Error(`No questions found for benefit type: ${benefitType}`)
  }

  return benefitEntry.questions.map(toDiscoveryQuestion)
}

export async function getBenefitQuestions(
  benefitType: BenefitType,
): Promise<DiscoveryQuestion[]> {
  console.log(`Fetching ${benefitType} questions from Strapi...`)

  return fetchFromStrapi(benefitType)
}
