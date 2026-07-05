// Inside your Next.js API route file (e.g., /app/api/auth/google/route.ts)
import { loginViaGoogle } from '@repo/ui/api/auth/google';

export async function GET(request:Request) {
  return loginViaGoogle(request)
}