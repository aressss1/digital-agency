import type { Metadata } from 'next'
import './globals.css'
import { Montserrat  } from "next/font/google"
 

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

 

export const metadata: Metadata = {
  title: 'Branding Agency',
  description: 'Best Digital Branding Agency in UK',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} fontcs `}>
        {children}
      </body>
    </html>
  )
}
