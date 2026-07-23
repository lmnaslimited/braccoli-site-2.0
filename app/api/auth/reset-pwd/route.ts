import { resetPassword } from '@repo/ui/api/auth/reset-password';

export async function POST(request: Request) {
 return resetPassword(request)
}