import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NIKA OSINT | Advanced Intelligence Gathering',
  description: 'Professional OSINT toolkit for security researchers and investigators',
  keywords: ['osint', 'intelligence', 'security', 'reconnaissance', 'cybersecurity'],
  authors: [{ name: 'kiwi & 777' }],
  openGraph: {
    title: 'NIKA OSINT',
    description: 'Advanced Intelligence Gathering Platform',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient">
          {children}
        </div>
      </body>
    </html>
  )
}
