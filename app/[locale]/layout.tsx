import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from 'geist/font/sans';
import "@repo/ui/globals.css"
import { ThemeProvider } from "@repo/ui/components/theme-provider"
import { clTransformerFactory, Tcontext, TfooterTarget } from "@repo/middleware";
import { fnGetCacheData } from "../api/getData";
import Footer from "@repo/ui/components/footer";
import Navbar from "@repo/ui/components/navbar";

export const metadata: Metadata = {
  title: "LMNAs Cloud Solutions - AI-Powered ERP Solutions",
  description: "Enterprise-grade cloud solutions with AI integration for modern businesses",
}

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

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="">{children}</main>
          <Footer idFooter={footerData} />
        </ThemeProvider>
      </body>
    </html>
  );
}