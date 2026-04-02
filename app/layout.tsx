import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Mono, Outfit } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-dm-mono',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Madrid Residency · April 1–22',
  description: '3 weeks of egg freezing and a deliberate journey of health, building, reading, creating, and setting myself up to be a wonderful mother.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmMono.variable} ${outfit.variable}`}
    >
      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  )
}
