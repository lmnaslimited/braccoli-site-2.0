import { unstable_cache } from "next/cache"
import { fnJobApi } from "@repo/ui/api/job/fetch-job"

export const getJobData = unstable_cache(
  async () => {
    const LdJobs = await fnJobApi()
    return LdJobs
  },
  ["jobData"],
  { revalidate: 120 }
)
