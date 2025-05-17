import type React from "react"
import { GeistSans } from 'geist/font/sans';
import "@repo/ui/globals.css"
import { ThemeProvider } from "@repo/ui/components/theme-provider"
import { clTransformerFactory, Tcontext, TfooterTarget, TnavbarTarget } from "@repo/middleware";
import { fnGetCacheData } from "../api/getData";
import Footer from "@repo/ui/components/footer";
import Navbar from "@repo/ui/components/navbar";
import { Metadata, Viewport } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://beta.lmnas.com'),
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      }
    },
    authors: [
      {
        name: 'LMNAs Team',
        url: 'https://beta.lmnas.com/about'
      }
    ],
    creator: 'LMNAs',
    publisher: 'LMNAs',
    applicationName: 'LMNAs Cloud ERP',
    icons: {
      icon: [
        { url: '/icon.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      ],
      apple: [
        { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
      ],
      shortcut: '/favicon.ico',
    },
    appleWebApp: {
      capable: true,
      title: 'LMNAs Cloud ERP',
      statusBarStyle: 'default',
    },
    manifest: '/manifest.webmanifest',
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5.0,
  userScalable: true,
};

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  params: Promise<{
    locale: string;
  }>;
  children: React.ReactNode;
}>) {
  const { locale } = await params;
  const context: Tcontext = { locale: locale };
  const footerData: TfooterTarget = await fnGetCacheData(
    context,
    clTransformerFactory.createTransformer("footer")
  );

  const navbarData: TnavbarTarget = await fnGetCacheData(
    context,
    clTransformerFactory.createTransformer("navbar")
  );

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar idNavbar={navbarData} />
          <main className="">{children}</main>
          <Footer idFooter={footerData} />
        </ThemeProvider>
      </body>
    </html>
  );
}