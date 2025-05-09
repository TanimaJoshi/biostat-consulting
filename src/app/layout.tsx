import React from 'react'
import type { Metadata } from 'next'
import SchemaMarkup from './schema'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dr. Milan Mangeshkar - Biostatistics Consulting',
  description: 'Expert biostatistics consulting services by Dr. Milan Mangeshkar. Specializing in clinical trials, data analysis, and regulatory submissions with over 20 years of experience.',
  keywords: 'biostatistics consulting, clinical trials analysis, statistical consulting, FDA submissions, medical research statistics, pharmaceutical statistics, biostatistician, clinical research analysis, statistical analysis services, medical data analysis, clinical trial design, statistical programming, SAS programming, R programming, regulatory submissions, statistical methodology, adaptive trial design, sample size calculation, statistical power analysis',
  authors: [{ name: 'Dr. Milan Mangeshkar' }],
  creator: 'Dr. Milan Mangeshkar',
  publisher: 'Dr. Milan Mangeshkar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Dr. Milan Mangeshkar - Biostatistics Consulting',
    description: 'Expert biostatistics consulting services with over 20 years of experience in clinical trials and regulatory submissions.',
    url: 'https://tanimajoshi.github.io/biostat-consulting',
    siteName: 'Dr. Milan Mangeshkar Biostatistics Consulting',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://tanimajoshi.github.io/biostat-consulting/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Milan Mangeshkar - Biostatistics Consultant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Milan Mangeshkar - Biostatistics Consulting',
    description: 'Expert biostatistics consulting services with over 20 years of experience in clinical trials and regulatory submissions.',
    images: ['https://tanimajoshi.github.io/biostat-consulting/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google8db920664378805a',
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
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://tanimajoshi.github.io/biostat-consulting" />
        <meta name="theme-color" content="#ffffff" />
        <SchemaMarkup />
      </head>
      <body className="bg-white">{children}</body>
    </html>
  )
} 