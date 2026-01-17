import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { FloatingSocialButtons } from '@/components/FloatingSocialButtons'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'KZN Youth Choir - The Oldest Youth Choir in South Africa',
  description: 'Celebrating choral singing since 1967. Join South Africa\'s oldest youth choir and experience excellence in choral music.',
  manifest: '/manifest.json',
  themeColor: '#1E3A8A',
  metadataBase: new URL('https://kznyouthchoir.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-white text-neutral-900">
        {children}
        <FloatingSocialButtons />
      </body>
    </html>
  )
}

