import { getJobData } from "@app/api/job/job-fetch";
export async function GET() {
  const LdData = await getJobData(); // This uses the infinite cache
  return Response.json({ data: LdData });
}
