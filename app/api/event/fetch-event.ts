import { unstable_cache } from "next/cache"
import { EventApi } from "@repo/ui/api/event/fetch-event"

export const getEventData = unstable_cache(
  async () => {
    const LdJobs = await EventApi()
    return LdJobs
  },
  ["eventData"],
  { revalidate: 2 }
)
