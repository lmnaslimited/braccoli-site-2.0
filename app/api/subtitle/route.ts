import { NextResponse } from "next/server"
import { Tcontext, Tsubtitle, TsubtitleTarget } from "@repo/middleware/types"
import { clTransformerFactory } from "@repo/middleware"
import { fnGetCacheData } from "../../utils/strapi/get-data"

//convert subtitle data to webvtt forma
//WebVTT is the standard subtitle format used in HTML5 video
const fnBuildWebVTTContent = (iaSubtitles: Tsubtitle[]) =>
  "WEBVTT\n\n" +
  iaSubtitles
    .map(
      ({ startTime, endTime, text }) =>
        `${startTime} --> ${endTime}\n${text}\n`,
    )
    .join("\n")

    //fetch subtitle data from strapi
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    const LSourceId = searchParams.get("sourceId")
    const LLocale = searchParams.get("locale") || "en"

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

    // Extract subtitle array from response
    const LaSubtitles = LdResponse.subtitles?.[0]?.subtitle ?? []

    if (!LaSubtitles.length)
      return new NextResponse("No subtitle content", { status: 404 })

    const LFormatText = fnBuildWebVTTContent(LaSubtitles)

    //return the subtitle content in webvtt format
    return new NextResponse(LFormatText, {
      headers: {
        "Content-Type": "text/vtt",
      },
    })
  } catch (error) {
    return new NextResponse(`Server error: ${error}`, { status: 500 })
  }
}
