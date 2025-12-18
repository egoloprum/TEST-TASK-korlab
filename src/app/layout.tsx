import type { Metadata } from 'next'
import './globals.css'

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
      <body className="antialiased p-5 md:p-7 lg:p-9">{children}</body>
    </html>
  )
}
