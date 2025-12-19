import type { Metadata } from 'next'
import './globals.css'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import { ContactsSection } from '@/widgets/Contacts'

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
        <ContactsSection />
        <Footer />
      </body>
    </html>
  )
}
