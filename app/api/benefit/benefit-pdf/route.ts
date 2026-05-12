import { NextResponse } from "next/server"
import { fnGetCacheData } from "../../../utils/strapi/get-data"
import { clTransformerFactory } from "@repo/middleware"
import { TbenefitPdfContentTarget, Tcontext } from "@repo/middleware/types"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const LLocale = searchParams.get("locale") || "en"

  // Prepare the context object that will be passed to the transformer
  const LdContext: Tcontext = {
    locale: LLocale,
  }

  try {
    // Use the cache data function to fetch form data using a "benefitPdfContents" transformer
    // This likely maps raw backend data into a structured `TbenefitPdfContentTarget` format
    const LdPageData:TbenefitPdfContentTarget = await fnGetCacheData(LdContext, clTransformerFactory.createTransformer("benefitPdfContents"))
    // Return the fetched and transformed data as JSON response
    return NextResponse.json(LdPageData.benefitPdfContents)
  } catch (idError) {
    console.error("API error:", idError)
    // Return an error response with status 500 (Internal Server Error)
    return NextResponse.json(
      { error: "Failed to fetch Benefit Creator Chat Setup" },
      { status: 500 },
    )
  }
}
