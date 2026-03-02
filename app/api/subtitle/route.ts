import { NextResponse } from "next/server"
import { Tcontext, Tsubtitle, TsubtitleTarget } from "@repo/middleware/types"
import { clTransformerFactory } from "@repo/middleware"
import { fnGetCacheData } from "../../utils/strapi/get-data"

const fnBuildWebVTTContent = (iaSubtitles: Tsubtitle[]) =>
  "WEBVTT\n\n" +
  iaSubtitles
    .map(
      ({ startTime, endTime, text }) =>
        `${startTime} --> ${endTime}\n${text}\n`,
    )
    .join("\n")

export async function GET(request: Request) {
  try {
    console.log("Received request for subtitles", request)

    const { searchParams } = new URL(request.url)

    const LSourceId = searchParams.get("sourceId")
    const LLocale = searchParams.get("locale") || "en"

    console.log("Extracted parameters:", { LSourceId, LLocale })

    if (!LSourceId && !LLocale)
      return new NextResponse("Bad request", { status: 400 })

    const context: Tcontext = {
      locale: LLocale,
      filters: {
        sourceId: { eq: LSourceId },
      },
    }

    const LdResponse: TsubtitleTarget = await fnGetCacheData(
      context,
      clTransformerFactory.createTransformer("subtitles"),
    )

    const LaSubtitles = LdResponse.subtitles?.[0]?.subtitle ?? []

    if (!LaSubtitles.length)
      return new NextResponse("No subtitle content", { status: 404 })

    const LFormatText = fnBuildWebVTTContent(LaSubtitles)

    return new NextResponse(LFormatText, {
      headers: {
        "Content-Type": "text/vtt",
      },
    })
  } catch (error) {
    return new NextResponse(`Server error: ${error}`, { status: 500 })
  }
}
