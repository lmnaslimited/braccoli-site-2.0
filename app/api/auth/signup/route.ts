import { signUp } from '@repo/ui/api/auth/sign-up';

export async function POST(request: Request) {
 return signUp(request)
}