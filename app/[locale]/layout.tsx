import type React from "react"
import type { Metadata, Viewport } from 'next'
import "@repo/ui/globals.css"
import { GeistSans } from 'geist/font/sans'
import { fnGetCacheData } from '../utils/strapi/get-data'
import ChatInit from "../components/chat-int"
import ClientLayout from "..//components/client-layout"
import NewsletterIdentifyListener from "../components/newsletter-identify-listener"
import Footer from "@repo/ui/components/footer"
import Navbar from "@repo/ui/components/navbar"
import { ThemeProvider } from "@repo/ui/components/theme-provider"
import { clTransformerFactory } from "@repo/middleware"
import { Tcontext, TfooterTarget, TglobalMetaTarget, TnavbarTarget, TseoIcons } from "@repo/middleware/types"
import AppRecaptchaProvider from "@repo/ui/components/recaptcha-provider"
import { fnGetStatus } from "../utils/strapi/get-status"
import Banner from "@repo/ui/components/banner"

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5.0,
  userScalable: true,
}

async function fnGetGlobalData(locale: string) {
  const context: Tcontext = { locale }

  const globalMetaData: TglobalMetaTarget = await fnGetCacheData(
    context,
    clTransformerFactory.createTransformer("globalMeta")
  )

  return globalMetaData?.globalMeta
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const data = await fnGetGlobalData(locale)

  if (!data) return {}

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
      icon: data.icons?.map((icon: TseoIcons) => ({
        url: icon.url,
        sizes: icon.sizes,
        type: icon.type,
      })),
      apple: data.apple?.map((icon: TseoIcons) => ({
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
  }
}

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  params: Promise<{
    locale: string
  }>
  children: React.ReactNode
}>) {
  const { locale } = await params
  const LStatus = await fnGetStatus()
  const LdContext: Tcontext = { locale: locale, status: LStatus }

  const LdFooterData: TfooterTarget = await fnGetCacheData(
    LdContext,
    clTransformerFactory.createTransformer("footer")
  )

  const LdNavbarData: TnavbarTarget = await fnGetCacheData(
    LdContext,
    clTransformerFactory.createTransformer("navbar")
  )

  // Get the Banner details from strapi
  const LdBannerSettings = await fnGetCacheData(
    LdContext, 
    clTransformerFactory.createTransformer("bannerSetting")
  )
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <AppRecaptchaProvider>
          {/* navbar and banner will stickto the top */}
        <div className="sticky top-0 z-50">
          <Banner idBanner={LdBannerSettings}/>
          <Navbar idNavbar={LdNavbarData} />
        </div>
          <main className="">
            <ClientLayout>
              {children}
            </ClientLayout>
          </main>
          <Footer idFooter={LdFooterData} />
          </AppRecaptchaProvider>
        </ThemeProvider>
        <NewsletterIdentifyListener />
        <ChatInit />
      </body>
    </html>
  )
}
