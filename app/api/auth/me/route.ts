import { verifyAuthenticity } from '@repo/ui/api/auth/verify-authenticity';
import { NextRequest } from 'next/server';


export async function GET(request: NextRequest) {
   return verifyAuthenticity(request)
  }