import { getSocialData } from "./social-handle"

export async function GET() {
  const LdData = await getSocialData() // This uses the infinite cache
  return Response.json({ data: LdData })
}
