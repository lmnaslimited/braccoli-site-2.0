
import { googleCallback } from '@repo/ui/api/auth/google-callback';
import { NextRequest } from 'next/server';

export async function GET(request:NextRequest) {
  return googleCallback(request)
}