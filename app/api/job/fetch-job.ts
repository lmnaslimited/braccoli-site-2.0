import { JobApi } from "@repo/ui/api/job/fetch-job";
import { unstable_cache } from "next/cache";

export const getJobData = unstable_cache(
  async () => {
    const LdJobs = await JobApi();
    return LdJobs;
  },
  ["jobData"],
  { revalidate: 120 }
);
