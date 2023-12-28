import type { Metadata } from 'next'
import './globals.css'
import { Montserrat as FontSans } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Logoipsum',
  description: 'Best Digital Branding Agency in UK',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} fontSans `}>
        {children}
      </body>
    </html>
  )
}
