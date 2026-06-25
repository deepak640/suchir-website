import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/ui/SmoothScroll';

export const metadata: Metadata = {
  title: 'Shuchir Suri — Entrepreneur, Food Talk India & Jade Forest',
  description:
    "Delhi-based entrepreneur Shuchir Suri co-founded Food Talk India, launched Jade Forest premium mixers, and created India's largest gin festival — the Gin Explorers Club.",
  keywords: [
    'Shuchir Suri',
    'Food Talk India',
    'Jade Forest',
    'Gin Explorers Club',
    'Delhi Entrepreneur',
    'Indian Food Community',
    'Premium Mixers India',
    'Craft Gin India',
  ],
  authors: [{ name: 'Shuchir Suri' }],
  openGraph: {
    type: 'website',
    title: 'Shuchir Suri — Entrepreneur & Community Builder',
    description:
      "Delhi-based entrepreneur behind Food Talk India, Jade Forest, and India's largest gin festival.",
    siteName: 'Shuchir Suri',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shuchir Suri — Entrepreneur & Community Builder',
    description:
      "Delhi-based entrepreneur behind Food Talk India, Jade Forest, and India's largest gin festival.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-[#0E0E0E] text-[#F5F5F5] antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
