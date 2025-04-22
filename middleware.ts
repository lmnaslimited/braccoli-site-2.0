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
    const { pathname } = request.nextUrl;
  
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