import { Geist, Geist_Mono } from "next/font/google";
import "@repo/ui/globals.css";

import type React from "react" // Added import for React

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LMNAs Cloud Solutions",
  description: "Professional cloud solutions for your business",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
        </div>
      {/* </body> */}
      </body>
    </html>
  );
}


