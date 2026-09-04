import type { Metadata, Viewport } from 'next'
import { Cinzel, Open_Sans } from 'next/font/google'
import AppThemeProvider from '@/lib/theme-provider'
import './(client)/globals.css'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-cinzel',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.spiritfountainglobalchurch.com'),

  title: {
    default: 'Spirit Fountain Global Church | Pretoria',
    template: '%s | Spirit Fountain Global Church',
  },

  description:
    'Spirit Fountain Global Church is a Spirit-filled church in Pretoria, Gauteng, committed to helping people grow in faith, purpose and kingdom impact.',

  keywords: [
    'Spirit Fountain Global Church',
    'church in Pretoria',
    'church in Hatfield',
    'Pretoria church',
    'Gauteng church',
    'Christian church Pretoria',
    'Spirit-filled church Pretoria',
  ],

  openGraph: {
    title: 'Spirit Fountain Global Church | Pretoria',
    description:
      'A Spirit-filled church community in Pretoria, Gauteng.',
    url: 'https://www.spiritfountainglobalchurch.com',
    siteName: 'Spirit Fountain Global Church',
    locale: 'en_ZA',
    type: 'website',
  },

  alternates: {
    canonical: 'https://www.spiritfountainglobalchurch.com',
  },
}

export const viewport: Viewport = {
  themeColor: '#0F1117',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      data-scroll-behavior="smooth"
      lang="en"
      className={`${cinzel.variable} ${openSans.variable}`}
      style={{ backgroundColor: '#0F1117' }}
    >
      <body>
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  )
}