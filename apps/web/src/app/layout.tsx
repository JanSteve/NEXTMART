import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/providers/Providers';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/Toast';

export const metadata: Metadata = {
  title: {
    default: 'NexMart — Shop Smarter. Live Better.',
    template: '%s | NexMart',
  },
  description:
    "India's smartest marketplace. Discover millions of products from trusted sellers with fast delivery to Vadodara & nationwide, easy returns, and secure payments.",
  keywords: ['ecommerce', 'online shopping', 'NexMart', 'Vadodara', 'India', 'marketplace'],
  authors: [{ name: 'NexMart Commerce' }],
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
      <body className="flex min-h-screen flex-col bg-neutral-50 font-sans antialiased">
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
