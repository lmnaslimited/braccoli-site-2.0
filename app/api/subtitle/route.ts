import { NextResponse } from "next/server"
import { Tsubtitle } from "@repo/middleware/types"

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
    const data = new URL(req.url).searchParams.get("data")
    console.log("Subtitle data received:", data)

    if (!data) throw new Error("Missing subtitle data")

    const subtitles = JSON.parse(data) as Tsubtitle[]
    console.log("Parsed subtitles:", subtitles)

    const webVttText = buildWebVTTContent(subtitles)
    console.log("Generated WebVTT:", webVttText)

    return new NextResponse(webVttText, {
      headers: {
        "Content-Type": "text/vtt",
        "Cache-Control": "no-store",
      },
    })
  } catch {
    return new NextResponse("Invalid subtitle data", { status: 400 })
  }
}
