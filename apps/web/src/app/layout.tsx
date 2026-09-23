import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Providers from '@/providers/Providers';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/Toast';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'NexMart — Shop Smarter. Live Better.',
    template: '%s | NexMart',
  },
  description:
    "India's smartest marketplace. Discover millions of products from trusted sellers with fast delivery, easy returns, and secure payments.",
  keywords: ['ecommerce', 'online shopping', 'NexMart', 'India', 'marketplace'],
  authors: [{ name: 'InfinityForge / R. Jan Steve Daniel' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'NexMart',
    title: 'NexMart — Shop Smarter. Live Better.',
    description: "India's smartest marketplace.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${plusJakarta.variable} ${jetbrains.variable} flex min-h-screen flex-col bg-neutral-50 font-sans antialiased`}
      >
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
