import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dr. Milan Mangeshkar - Biostatistics Consulting',
  description: 'Expert biostatistics consulting services by Dr. Milan Mangeshkar. Specializing in clinical trials, data analysis, and regulatory submissions with over 20 years of experience.',
  keywords: 'biostatistics, clinical trials, statistical analysis, FDA submissions, medical research, data analysis, clinical research, pharmaceutical statistics',
  authors: [{ name: 'Dr. Milan Mangeshkar' }],
  openGraph: {
    title: 'Dr. Milan Mangeshkar - Biostatistics Consulting',
    description: 'Expert biostatistics consulting services with over 20 years of experience in clinical trials and regulatory submissions.',
    url: 'https://tanimajoshi.github.io/biostat-consulting',
    siteName: 'Dr. Milan Mangeshkar Biostatistics Consulting',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="google8db920664378805a" />
        <link rel="canonical" href="https://tanimajoshi.github.io/biostat-consulting" />
      </head>
      <body>{children}</body>
    </html>
  )
} 