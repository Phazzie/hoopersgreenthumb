import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Hooper's Green Thumb | Residential Landscaping in Kalamazoo, MI",
  description:
    "Residential landscaping in Kalamazoo, Michigan. Lawn care, garden design, trimming, mulching, and seasonal cleanup — done right, every time, by Thomas Hooper.",
  keywords: [
    'landscaping Kalamazoo',
    'lawn care Kalamazoo Michigan',
    'residential landscaping',
    'garden design Kalamazoo',
    "Hooper's Green Thumb",
    'lawn mowing Kalamazoo',
  ],
  openGraph: {
    title: "Hooper's Green Thumb",
    description: 'Residential landscaping in Kalamazoo, MI. Your neighbors are going to notice.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
