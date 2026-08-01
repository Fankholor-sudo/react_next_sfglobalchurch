import type { Metadata, Viewport } from 'next'
import { Cinzel, Open_Sans } from 'next/font/google'
import AppThemeProvider from '@/lib/theme-provider'
import './globals.css'

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
  title: 'Spirit Fountain Global Church',
  description:
    'Spirit Fountain Global Church — Created to Dominate, Formed to Take Over. Join us for powerful worship, life-changing sermons, and vibrant community.',
  keywords: ['church', 'Spirit Fountain Global Church', 'worship', 'sermons', 'faith', 'community'],
  openGraph: {
    title: 'Spirit Fountain Global Church',
    description: 'Created to Dominate, Formed to Take Over.',
    type: 'website',
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
      style={{ backgroundColor: '#0F1117' }}>
      <body>
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  )
}
