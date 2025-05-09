import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dr. Milan Mangeshkar - Biostatistics Consulting',
  description: 'Expert biostatistics consulting services for clinical trials, data analysis, and FDA submissions. Over 20 years of experience in statistical analysis and research.',
  keywords: 'biostatistics consulting, clinical trials, statistical analysis, FDA submissions, data analysis, medical research',
  authors: [{ name: 'Dr. Milan Mangeshkar' }],
  openGraph: {
    title: 'Dr. Milan Mangeshkar - Biostatistics Consulting',
    description: 'Expert biostatistics consulting services for clinical trials, data analysis, and FDA submissions.',
    url: 'https://tanimajoshi.github.io/biostat-consulting/',
    siteName: 'Dr. Milan Mangeshkar - Biostatistics Consulting',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="google8db920664378805a" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
} 