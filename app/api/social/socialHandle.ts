import { unstable_cache } from 'next/cache';
import {youTubeApi} from "@repo/ui/api/youTubeApi"
import { LinkedInApi } from "@repo/ui/api/linkedInApi";
import { TwitterApi } from "@repo/ui/api/twitterApi";

export const getSocialData = unstable_cache(
  async () => {
    const [
      LdYouTubeResult, 
      LdLinkedInResult, 
      LdTweeterResult
    ] = await Promise.allSettled([
      LinkedInApi(),
      youTubeApi(),
      TwitterApi(),
    ]);

    return [
      ...(LdYouTubeResult.status === 'fulfilled' ? LdYouTubeResult.value.data : []),
      ...(LdLinkedInResult.status === 'fulfilled' ? LdLinkedInResult.value.data : []),
      ...(LdTweeterResult.status === 'fulfilled' ? LdTweeterResult.value.data : []),
    ];
  },
  ['socialData'],
  { revalidate: 120 }
);