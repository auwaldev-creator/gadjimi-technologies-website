import React from "react"
import type { Metadata } from 'next'
import { Space_Grotesk, Orbitron } from 'next/font/google'

import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gadjimi Technologies SARL | Next-Gen Fintech & IT Solutions',
  description: 'Licensed Fintech, IT Solutions, KYC & Identity Verification, Blockchain Technology - Officially Licensed by the Niger Republic Government',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body className={`${spaceGrotesk.variable} ${orbitron.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
