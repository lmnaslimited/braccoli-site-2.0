import { loginViaGoogle } from '@repo/ui/api/auth/google';

export async function GET(request:Request) {
  return loginViaGoogle(request)
}