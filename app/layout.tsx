import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from 'geist/font/sans';
import "@repo/ui/globals.css"
import { ThemeProvider } from "@repo/ui/components/theme-provider"
import Navbar from "@repo/ui/components/navbar";
import Footer from "@repo/ui/components/footer";
import { Tfooter, Tnavbar, Ttrend } from "@repo/ui/type";
import { getData } from "./api/getData";

// export const metadata: Metadata = {
//   title: "LMNAs Cloud Solutions - AI-Powered ERP Solutions",
//   description: "Enterprise-grade cloud solutions with AI integration for modern businesses",
// }

// export const TrendData = await getData<Ttrend>("trend");
// console.log(TrendData)

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const NavData = await getData<Tnavbar>("navbar")
  const FooterData = await getData<Tfooter>("footer")
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className} `}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {/* <Navbar idNavbar={NavData} /> */}
          <main className="">{children}</main>
          {/* <Footer idFooter={FooterData} /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}

