import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StarsCanvas from '@/components/main/StarBackground'
import './globals.css'
import Navbar from '@/components/main/Navbar'
import Background from '@/components/main/Background'
import Navbars from '@/components/main/navbarss'
import Nabs from '@/components/main/nabs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abhishek\'s Portfolio',
  description: 'Portfolio Website - Abhishek Kumar Anmol',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden'}>
        <Background/>
        <Nabs />
        {children}
      </body>
    </html>
  )
}
