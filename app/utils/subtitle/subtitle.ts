import { Tsubtitle } from "@repo/middleware/types"

export function createSubtitleUrl(subtitles: Tsubtitle[]): string {
  let vtt = "WEBVTT\n\n"

  subtitles.forEach(({ startTime, endTime, text }) => {
    vtt += `${startTime} --> ${endTime}\n${text}\n\n`
  })

  return URL.createObjectURL(new Blob([vtt], { type: "text/vtt" }))
}
