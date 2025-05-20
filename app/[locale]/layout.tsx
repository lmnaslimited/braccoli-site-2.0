import type React from "react"
import { GeistSans } from 'geist/font/sans';
import "@repo/ui/globals.css"
import { ThemeProvider } from "@repo/ui/components/theme-provider"
import { clTransformerFactory, Tcontext, TfooterTarget, TglobalMetaTarget, TnavbarTarget } from "@repo/middleware";
import { fnGetCacheData } from "../api/getData";
import Footer from "@repo/ui/components/footer";
import Navbar from "@repo/ui/components/navbar";
import type { Metadata, Viewport } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string; }> }): Promise<Metadata> {

  const { locale } = await params;
  const context: Tcontext = { locale: locale }

  const globalMetaData: TglobalMetaTarget = await fnGetCacheData(
    context,
    clTransformerFactory.createTransformer("globalMeta")
  );

  const data = globalMetaData?.globalMeta;

  if (!data) return {};

  return {
    metadataBase: data.metadataBase ? new URL(data.metadataBase) : undefined,
    robots: {
      index: data.robotsIndex,
      follow: data.robotsFollow,
      nocache: data.robotsNocache,
      googleBot: {
        index: data.googleBotIndex,
        follow: data.googleBotFollow,
        'max-snippet': data.googleBotMaxSnippet,
        'max-image-preview': data.googleBotMaxImagePreview,
        'max-video-preview': data.googleBotMaxVideoPreview,
      },
    },
    authors: data.authorsName && data.authorsURL
      ? [{ name: data.authorsName, url: data.authorsURL }]
      : undefined,
    creator: data.creator,
    publisher: data.publisher,
    applicationName: data.applicationName,
    icons: {
      icon: data.icons?.map((icon: any) => ({
        url: icon.url,
        sizes: icon.sizes,
        type: icon.type,
      })),
      apple: data.apple?.map((icon: any) => ({
        url: icon.url,
        sizes: icon.sizes,
        type: icon.type,
      })),
      shortcut: data.shortcut,
    },
    appleWebApp: {
      capable: data.appleWebAppCapable,
      title: data.appleWebAppTitle,
      statusBarStyle: data.appleWebAppStatusBarStyle,
    },
    manifest: data.manifest,
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