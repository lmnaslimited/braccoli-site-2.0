import { getJobData } from "./fetch-job"

export async function GET() {
  const LdData = await getJobData() // This uses the infinite cache
  return Response.json({ data: LdData })
}
