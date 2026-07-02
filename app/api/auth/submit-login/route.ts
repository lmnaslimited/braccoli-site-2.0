import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // WARNING: Remove process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; in production!
  
  try {
    const { email, password } = await request.json();
    const LFrappeUrl = process.env.NEXT_PUBLIC_FRAPPE_URL;

    const LLoginParams = new URLSearchParams({
      usr: email,
      pwd: password
    });

    const LFrappeResponse = await fetch(`${LFrappeUrl}/api/method/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      body: LLoginParams.toString(),
    });

    if (!LFrappeResponse.ok) {
      return NextResponse.json({ error: 'Invalid email or password credentials' }, { status: 401 });
    }

    const LResponse = NextResponse.json({ success: true });

    // // FIX: Correctly extract multiple set-cookie headers as an array
    // const LRawCookiesArray = LFrappeResponse.headers.getSetCookie();

    // if (LRawCookiesArray && LRawCookiesArray.length > 0) {
    //   // Clear any default Next.js headers to prevent conflicts
    //   LResponse.headers.delete('set-cookie'); 
      
    //   // Append each individual cookie string cleanly to the response
    //   LRawCookiesArray.forEach(cookieString => {
    //     LResponse.headers.append('set-cookie', cookieString);
    //   });
    // }

    return LResponse;
  } catch (err) {
    console.error('Proxy login exception:', err);
    return NextResponse.json({ error: 'Internal system fault during login' }, { status: 500 });
  }
}
