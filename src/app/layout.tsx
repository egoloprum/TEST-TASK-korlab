import type { Metadata } from 'next'
import './globals.css'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'

export const metadata: Metadata = {
  title: 'Korlab Test Task',
  description: ''
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased p-5 md:p-7 lg:p-9">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
