import type React from "react"
import type { Metadata } from "next"
import { Noto_Serif_Bengali } from "next/font/google"
import "./globals.css"

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  display: "swap",
  variable: "--font-bengali",
})

export const metadata: Metadata = {
  title: "তুর্য সাহিত্যাঙ্গন - শীঘ্রই আসছে | Turya Sarkar",
  description: "Bengali Literature Collection by Turya Sarkar - Coming Soon on August 25th, 2025",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bn" className={notoSerifBengali.variable}>
      <body className="font-bengali antialiased">{children}</body>
    </html>
  )
}
