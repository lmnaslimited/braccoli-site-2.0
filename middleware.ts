import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'de'];
const defaultLocale = 'en';

function getLocale(request: NextRequest): string {
  const acceptLang = request.headers.get('accept-language');
  const preferredLang = acceptLang?.split(',')[0]?.split('-')[0];

  if (preferredLang && locales.includes(preferredLang)) {
    return preferredLang;
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
    // const { pathname } = request.nextUrl;
    const url = request.nextUrl.clone();
    const { pathname } = url;

      // Catch absolute asset and engine paths
//   const isFrappeAsset = 
//   pathname.startsWith('/assets/') ||
//   pathname.startsWith('/files/') ||
//   pathname.startsWith('/api/') ||
//   pathname === '/website_script.js';

// // Catch Frappe Socket.io real-time notifications
// const isFrappeSocket = pathname.startsWith('/socket.io');

// // Catch localized subpath allocations
// const siteMatch = pathname.match(/^\/(en|de)\/site(.*)/);

// // Catch unmapped root escapes triggered by forms/redirects
// const isFrappeEscapeRoute = 
//   pathname === '/login' || pathname.startsWith('/login/') ||
//   pathname === '/desk' || pathname.startsWith('/desk/') ||
//   pathname === '/app' || pathname.startsWith('/app/');

// if (isFrappeAsset || isFrappeSocket || siteMatch || isFrappeEscapeRoute) {
//   let remainingPath = pathname;

//     // FIX: Properly reference the remaining path capture index
//     if (siteMatch && siteMatch[2]) {
//       remainingPath = siteMatch[2]; // Captures exactly what comes AFTER /site/
//     }

//   // FIX FOR API 404: Pass target query parameters (?name=...) cleanly down to Frappe
//   const backendPort = isFrappeSocket ? "http://localhost:9000" : "http://dev.localhost:8000";
//   const targetUrl = new URL(remainingPath + url.search, backendPort);

//   const requestHeaders = new Headers(request.headers);
//   requestHeaders.set("Host", "dev.localhost:8000");
//   requestHeaders.set("X-Frappe-Site-Name", "dev.localhost");
//   requestHeaders.set("Origin", "http://dev.localhost:8000");
//   requestHeaders.set("Referer", "http://dev.localhost:8000" + remainingPath);

//   // Support WebSocket updates
//   if (isFrappeSocket) {
//     requestHeaders.set("Upgrade", "websocket");
//     requestHeaders.set("Connection", "Upgrade");
//   }

//   const response = NextResponse.rewrite(targetUrl, {
//     request: {
//       headers: requestHeaders,
//     },
//   });
  
//   // Smooth out locations redirects inside response frames
//   const locationHeader = response.headers.get('location');
//   if (locationHeader && locationHeader.includes('dev.localhost:8000')) {
//     const relativeRedirect = locationHeader.replace('http://dev.localhost:8000', 'http://localhost:3000');
//     response.headers.set('location', relativeRedirect);
//   }

//   // Map cookies over to parent domain
//   const setCookieHeader = response.headers.get('set-cookie');
//   if (setCookieHeader) {
//     let modifiedCookie = setCookieHeader.replace(/Domain=dev\.localhost/gi, 'Domain=localhost');
//     modifiedCookie = modifiedCookie.replace(/Secure/gi, '');
//     modifiedCookie = modifiedCookie.replace(/SameSite=None/gi, 'SameSite=Lax');
//     response.headers.set('set-cookie', modifiedCookie);
//   }

//   return response;
// }

    // Ignore API routes and static files
    if (
      pathname.startsWith('/api') ||
      pathname.startsWith('/_next') ||
      pathname.match(/\.(.*)$/)
    ) {
      return;
    }
  
    const hasLocale = locales.some(
      (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );
  
    if (hasLocale) return;
  
    const locale = getLocale(request);
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(newUrl);
  }

