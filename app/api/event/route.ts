import { getEventData } from "./fetchEvent"

export async function GET() {
  const LdData = await getEventData() // This uses the infinite cache
  return Response.json(LdData.data)
}
