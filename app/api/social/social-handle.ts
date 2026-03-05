import { unstable_cache } from "next/cache"
import { fnYoutubeApi } from "@repo/ui/api/social/youtube"
// import { LinkedInApi } from "@repo/ui/api/social/linkedin"
import { fnTwitterApi } from "@repo/ui/api/social/twitter"

export const getSocialData = unstable_cache(
  async () => {
    const [LdYouTubeResult, LdTweeterResult] = await Promise.allSettled([
      fnYoutubeApi(),
      fnTwitterApi(),
    ]) //LdLinkedInResult, LinkedInApi(), this api is commented due token unauthorized error

    return [
      ...(LdYouTubeResult.status === "fulfilled"
        ? LdYouTubeResult.value.data
        : []),
      // ...(LdLinkedInResult.status === "fulfilled"
      //   ? LdLinkedInResult.value.data
      //   : []),
      ...(LdTweeterResult.status === "fulfilled"
        ? LdTweeterResult.value.data
        : []),
    ]
  },
  ["socialData"],
  { revalidate: 3600 },
)
