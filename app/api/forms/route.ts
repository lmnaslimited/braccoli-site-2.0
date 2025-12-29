import { NextResponse } from "next/server"
import { fnGetCacheData } from "../getData"
import { clTransformerFactory } from "@repo/middleware"
import { Tcontext, TformsPageTarget } from "@repo/middleware/types"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const locale = searchParams.get("locale") || "en"

  // Prepare the context object that will be passed to the transformer
  const context: Tcontext = {
    locale: locale,
  }

  try {
    // Use the cache data function to fetch form data using a "forms" transformer
    // This likely maps raw backend data into a structured `TformsPageTarget` format
    const pageData: TformsPageTarget = await fnGetCacheData(
      context,
      clTransformerFactory.createTransformer("forms")
    )

    // Return the fetched and transformed data as JSON response
    return NextResponse.json(pageData)
  } catch (error) {
    console.error("API error:", error)
    // Return an error response with status 500 (Internal Server Error)
    return NextResponse.json(
      { error: "Failed to fetch form config" },
      { status: 500 }
    )
  }
}
