import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function GET(request: NextRequest) {
  const LFrappeUrl = process.env.NEXT_PUBLIC_FRAPPE_URL;
  const { origin } = new URL(request.url);
  const LRedirectUri = `${origin}/api/auth/callback`;

  // 1. Generate a secure, unpredictable state string
  const LState = crypto.randomBytes(16).toString('hex');

  const authParams = new URLSearchParams({
    response_type: 'code',
    client_id: process.env.NEXT_PUBLIC_FRAPPE_CLIENT_ID!,
    redirect_uri: process.env.NEXT_PUBLIC_APP_URL || LRedirectUri,
    scope: 'openid all',
    // prompt: 'none',   // Fail silently if user is logged out of Frappe
    state: LState,    // 🟢 Attach the state token to satisfy security line checks
  });

  const LResponse = NextResponse.redirect(
    `${LFrappeUrl}/api/method/frappe.integrations.oauth2.authorize?${authParams.toString()}`
  );

  // 2. Drop the short-lived security tracker cookie matching your callback verification rules
  LResponse.cookies.set('oauth_state', LState, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 5, // Valid for 5 minutes
    path: '/',
  });

  return LResponse;
}