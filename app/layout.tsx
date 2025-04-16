import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from 'geist/font/sans';
import "@repo/ui/globals.css"
import { ThemeProvider } from "@repo/ui/components/theme-provider"
import Navbar from "@repo/ui/components/navbar";
import Footer from "@repo/ui/components/footer";
import { Tfooter, Tnavbar } from "@repo/ui/type";
import { fnGetData } from "./api/getData";

export const metadata: Metadata = {
  title: "LMNAs Cloud Solutions - AI-Powered ERP Solutions",
  description: "Enterprise-grade cloud solutions with AI integration for modern businesses",
}

const LdNavbarData = await fnGetData<Tnavbar>("navbar", "en")
const LdFooterData = await fnGetData<Tfooter>("footer", "en")

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className} `}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar idNavbar={LdNavbarData} />
          <main className="">{children}</main>
          <Footer idFooter={LdFooterData} />
        </ThemeProvider>
      </body>
    </html>
  )
}
