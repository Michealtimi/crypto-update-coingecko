import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Navbar from '@/components/navbar'
import Footer from '@/components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Krypto App',
  description: 'A cryptocurrency market analysis app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  )
}