import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/component/Header';
import Footer from '@/component/Footer';

const inter = Inter({ subsets: ['latin'] });

// ✅ Metadata only (no viewport properties)
export const metadata: Metadata = {
  title: {
    default: 'BookStore - Your Online Book Destination',
    template: '%s | BookStore'
  },
  description: 'Discover amazing books at best prices. Shop from our collection of bestsellers, fiction, non-fiction, and more.',
  keywords: ['books', 'online bookstore', 'buy books', 'bestsellers'],
  authors: [{ name: 'BookStore Team' }],
  openGraph: {
    title: 'BookStore - Your Online Book Destination',
    description: 'Discover amazing books at best prices',
    type: 'website',
  },
};

// ✅ Separate viewport export
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}