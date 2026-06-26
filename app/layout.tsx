import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/ui/SmoothScroll';

export const metadata: Metadata = {
  title: 'Shuchir Suri — Entrepreneur & Content Creator, Delhi',
  description:
    "Delhi-based entrepreneur and content creator building culture-first brands, producing experiences, and demystifying the F&B space. Founder of Food Talk India, Jade Forest, and Anthem.",
  keywords: [
    'Shuchir Suri',
    'Food Talk India',
    'Jade Forest',
    'Anthem',
    'Delhi Entrepreneur',
    'Delhi Creator',
    'Indian Food Community',
    'Premium Mixers India',
    'Craft Gin India',
  ],
  authors: [{ name: 'Shuchir Suri' }],
  openGraph: {
    type: 'website',
    title: 'Shuchir Suri — Entrepreneur & Content Creator',
    description:
      "Delhi-based entrepreneur and content creator — building culture-first brands, producing experiences, and demystifying the F&B space.",
    siteName: 'Shuchir Suri',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shuchir Suri — Entrepreneur & Content Creator',
    description:
      "Delhi-based entrepreneur and content creator — building culture-first brands, producing experiences, and demystifying the F&B space.",
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
