import { unstable_cache } from "next/cache"
import { fnEventApi } from "@repo/ui/api/event/fetch-event"

export const getEventData = unstable_cache(
  async () => {
    const LdJobs = await fnEventApi()
    return LdJobs
  },
  ["eventData"],
  { revalidate: 2 }
)
