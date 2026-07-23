import { login } from '@repo/ui/api/auth/login';

export async function POST(request: Request) {
 return login(request)
}