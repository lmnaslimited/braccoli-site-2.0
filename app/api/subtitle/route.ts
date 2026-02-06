import { NextResponse } from "next/server"
import { Tsubtitle } from "@repo/middleware/types"

const STRAPI_URL = "http://localhost:1337"

const buildWebVTTContent = (subtitles: Tsubtitle[]) =>
  "WEBVTT\n\n" +
  subtitles
    .map(
      ({ startTime, endTime, text }) =>
        `${startTime} --> ${endTime}\n${text}\n`,
    )
    .join("\n")

export async function GET(req: Request) {
  try {
    const sourceId = new URL(req.url).searchParams.get("sourceId")

    if (!sourceId) return new NextResponse("Bad request", { status: 400 })

    const res = await fetch(
      `${STRAPI_URL}/api/subtitles?filters[sourceId][$eq]=${sourceId}&populate=*`,
    )

    const json = await res.json()

    if (!json.data?.length)
      return new NextResponse("No subtitles", { status: 404 })

    // console.log("json", json)

    const subtitles = json.data[0].subtitle

    const formatText = buildWebVTTContent(subtitles)

    return new NextResponse(formatText, {
      headers: { "Content-Type": "text/vtt" },
    })
  } catch (error) {
    return new NextResponse("Error", { status: 500 })
  }
}
