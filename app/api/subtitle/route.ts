import { NextResponse } from "next/server"
import { Tcontext, Tsubtitle, TsubtitleTarget } from "@repo/middleware/types"
import { clTransformerFactory } from "@repo/middleware"
import { fnGetCacheData } from "../../utils/strapi/get-data"

//convert subtitle data to webvtt format
//WebVTT is the standard subtitle format used in HTML5 video
const fnBuildWebVTTContent = (iaSubtitles: Tsubtitle[]) =>
  "WEBVTT\n\n" +
  iaSubtitles
    .map(
      ({ startTime, endTime, text }) =>
        `${startTime} --> ${endTime}\n${text}\n`,
    )
    .join("\n")

    /// API route handler to fetch and return subtitles
export async function GET(request: Request) {
  try {
    // Extract query params from request URL
    //request.url is the full URL of the incoming request from the client, 
    // including query parameters
    const { searchParams } = new URL(request.url) 
    const LSourceId = searchParams.get("sourceId") // subtitle source identifier
    const LLocale = searchParams.get("locale") || "en" // default locale = English

    if (!LSourceId && !LLocale)
      return new NextResponse("Bad request", { status: 400 })

    /// Build context object for Strapi query
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
    //Extract the subtitle content from the response
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
