import { getSocialData } from "@app/api/social/social-handle";

export async function GET() {
  const LdData = await getSocialData(); // This uses the infinite cache
  return Response.json({ data: LdData });
}
