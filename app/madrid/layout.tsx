import type { Metadata } from 'next'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'The Madrid Residency · April 1–22',
  description: '3 weeks of egg freezing and a deliberate journey of health, building, reading, creating, and setting myself up to be a wonderful mother.',
  robots: { index: false, follow: false },
}

export default function MadridLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  )
}
