import type React from "react"
import "@/app/globals.css"

import { Inter } from "next/font/google"

import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "PEI Mussel Tear - Prince Edward Island's Ultra-Endurance Cycling Race",
  description:
    "A self-supported 430km gravel cycling event that spans the beautiful province of Prince Edward Island from one end to the other.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>{children}</body>
    </html>
  )
}



import './globals.css'