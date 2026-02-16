import { NextResponse } from "next/server"
import { Tsubtitle } from "@repo/middleware/types"

const fnBuildWebVTTContent = (iaSubtitles: Tsubtitle[]) =>
  "WEBVTT\n\n" +
  iaSubtitles
    .map(
      ({ startTime, endTime, text }) =>
        `${startTime} --> ${endTime}\n${text}\n`,
    )
    .join("\n")

export async function GET(req: Request) {
  try {
    const LSourceId = new URL(req.url).searchParams.get("sourceId")

    if (!LSourceId) return new NextResponse("Bad request", { status: 400 })

    const LdResponse = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/subtitles?filters[sourceId][$eq]=${LSourceId}&populate=*`,
    )

    if (!LdResponse.ok) return new NextResponse("Strapi error", { status: 502 })

    const LdJsonData = await LdResponse.json()

    const LaSubtitles = LdJsonData.data[0].subtitle ?? []

    if (!LaSubtitles.length)
      return new NextResponse("No subtitle content", { status: 404 })

    const LFormatText = fnBuildWebVTTContent(LaSubtitles)
    return new NextResponse(LFormatText, {
      headers: {
        "Content-Type": "text/vtt",
        "Cache-Control": "no-cache",
      },
    })
  } catch (error) {
    return new NextResponse("Server error", { status: 500 })
  }
}
