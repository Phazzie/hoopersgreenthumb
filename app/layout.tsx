import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', display: 'swap' })
const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' })

export const metadata: Metadata = {
  title: "Hooper's Green Thumb | Residential Landscaping in Kalamazoo, MI",
  description: "Residential landscaping in Kalamazoo, Michigan. Lawn care, garden design, trimming, mulching, and seasonal cleanup — done right, every time, by Thomas Hooper.",
  keywords: ['landscaping Kalamazoo', 'lawn care Kalamazoo Michigan', 'residential landscaping', "Hooper's Green Thumb", 'lawn mowing Kalamazoo'],
  openGraph: {
    title: "Hooper's Green Thumb — Kalamazoo Landscaping",
    description: 'Residential landscaping in Kalamazoo, MI. Your neighbors are going to notice.',
    type: 'website',
    url: 'https://hoopersgreenthumb.com',
    images: [{ url: '/images/og-image.jpg', width: 945, height: 630, alt: "Hooper's Green Thumb" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hooper's Green Thumb",
    description: 'Residential landscaping in Kalamazoo, MI.',
    images: ['/images/og-image.jpg'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: "Hooper's Green Thumb",
  description: 'Residential landscaping services in Kalamazoo, Michigan.',
  url: 'https://hoopersgreenthumb.com',
  email: 'thomas@hoopersgreenthumb.com',
  founder: { '@type': 'Person', name: 'Thomas Hooper' },
  address: { '@type': 'PostalAddress', addressLocality: 'Kalamazoo', addressRegion: 'MI', addressCountry: 'US' },
  areaServed: ['Kalamazoo', 'Portage', 'Comstock', 'Oshtemo', 'Texas Township', 'Milwood', 'Vine', 'Oakwood', 'Richland', 'Kalamazoo Township'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Landscaping Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lawn Mowing & Edging' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Landscaping Design & Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Garden Bed Planting & Maintenance' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mulching & Soil Work' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tree & Shrub Trimming' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Seasonal Cleanup' } },
    ],
  },
  priceRange: '$$',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
