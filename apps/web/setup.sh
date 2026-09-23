#!/bin/bash

# Configuration files
cat << 'EOF' > package.json
{
  "name": "@nexmart/web",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.3",
    "react": "^18",
    "react-dom": "^18",
    "tailwindcss": "^3.4.1",
    "@tanstack/react-query": "^5.39.0",
    "zustand": "^4.5.2",
    "react-hook-form": "^7.51.5",
    "zod": "^3.23.8",
    "@hookform/resolvers": "^3.4.2",
    "framer-motion": "^11.2.10",
    "lucide-react": "^0.383.0",
    "axios": "^1.7.2",
    "embla-carousel-react": "^8.1.3",
    "date-fns": "^3.6.0",
    "next-themes": "^0.3.0"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "postcss": "^8",
    "eslint": "^8",
    "eslint-config-next": "14.2.3"
  }
}
EOF

cat << 'EOF' > tsconfig.json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
EOF

cat << 'EOF' > next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'cdn.nexmart.in',
      }
    ],
  },
  transpilePackages: ["@nexmart/shared-types"],
}

module.exports = nextConfig
EOF

cat << 'EOF' > tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef1ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#5B4FE9', // Primary
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#F59E0B', // Accent
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        success: {
          500: '#10B981',
        },
        error: {
          500: '#EF4444',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-plus-jakarta)'],
        mono: ['var(--font-jetbrains-mono)'],
      },
    },
  },
  plugins: [],
};
export default config;
EOF

cat << 'EOF' > postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

cat << 'EOF' > src/app/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: #ffffff;
    --foreground: #0f172a;
  }

  .dark {
    --background: #0f172a;
    --foreground: #f8fafc;
  }
}

body {
  color: var(--foreground);
  background: var(--background);
}
EOF

cat << 'EOF' > src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/providers/Providers";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "NexMart - Enterprise E-Commerce",
  description: "Enterprise e-commerce platform built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plusJakarta.variable} ${jetbrains.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Providers>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
EOF

cat << 'EOF' > src/app/page.tsx
import HeroBanner from "@/components/home/HeroBanner";
import CategoryGrid from "@/components/home/CategoryGrid";
import DealOfTheDay from "@/components/home/DealOfTheDay";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 pb-12">
      <HeroBanner />
      <div className="container mx-auto px-4 flex flex-col gap-12">
        <CategoryGrid />
        <DealOfTheDay />
      </div>
    </div>
  );
}
EOF

cat << 'EOF' > src/providers/Providers.tsx
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { useState } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light">
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
EOF

cat << 'EOF' > src/components/layout/Header.tsx
"use client";

import Link from "next/link";
import { Search, MapPin, User, ShoppingCart, Menu } from "lucide-react";
import useCartStore from "@/store/cart";

export default function Header() {
  const { items } = useCartStore();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button className="md:hidden p-2 -ml-2 text-gray-600">
            <Menu className="w-6 h-6" />
          </button>
          <Link href="/" className="flex items-center gap-1 font-heading text-2xl tracking-tight">
            <span className="font-bold text-primary-500">Nex</span>
            <span className="font-bold text-gray-900">Mart</span>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 max-w-2xl mx-8 relative">
          <input 
            type="text" 
            placeholder="Search for products, brands and more..." 
            className="w-full h-10 pl-10 pr-16 rounded-full border border-gray-300 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 bg-gray-50 text-sm"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-4 top-3" />
          <button className="absolute right-1 top-1 bottom-1 bg-primary-500 text-white px-4 rounded-full text-xs font-medium hover:bg-primary-600 transition-colors">
            Search
          </button>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-2 cursor-pointer hover:text-primary-500 transition-colors text-sm text-gray-700">
            <MapPin className="w-5 h-5" />
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">Deliver to</span>
              <span className="font-medium">100001</span>
            </div>
          </div>
          
          <Link href="/auth/login" className="hidden md:flex items-center gap-2 text-gray-700 hover:text-primary-500 transition-colors">
            <User className="w-5 h-5" />
            <span className="text-sm font-medium">Login</span>
          </Link>

          <Link href="/cart" className="flex items-center gap-2 text-gray-700 hover:text-primary-500 transition-colors relative">
            <ShoppingCart className="w-6 h-6" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
      
      {/* Category Nav */}
      <div className="bg-gray-50 border-t border-gray-200 hidden md:block">
        <div className="container mx-auto px-4 h-10 flex items-center gap-6 overflow-x-auto text-sm font-medium text-gray-600">
          <Link href="/category/electronics" className="hover:text-primary-500 whitespace-nowrap">Electronics</Link>
          <Link href="/category/fashion" className="hover:text-primary-500 whitespace-nowrap">Fashion</Link>
          <Link href="/category/home" className="hover:text-primary-500 whitespace-nowrap">Home & Kitchen</Link>
          <Link href="/category/beauty" className="hover:text-primary-500 whitespace-nowrap">Beauty</Link>
          <Link href="/category/sports" className="hover:text-primary-500 whitespace-nowrap">Sports</Link>
        </div>
      </div>
    </header>
  );
}
EOF

cat << 'EOF' > src/store/cart.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface CartState {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'id'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.productId === item.productId);
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.productId === item.productId
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            };
          }
          return { items: [...state.items, { ...item, id: Math.random().toString(36).substr(2, 9) }] };
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),
      updateQuantity: (id, quantity) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, quantity: Math.max(1, quantity) } : i
          ),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'nexmart-cart',
    }
  )
);

export default useCartStore;
EOF

cat << 'EOF' > src/components/home/HeroBanner.tsx
"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const banners = [
  { id: 1, image: 'https://picsum.photos/seed/banner1/1200/400', title: 'Summer Sale' },
  { id: 2, image: 'https://picsum.photos/seed/banner2/1200/400', title: 'New Arrivals' },
  { id: 3, image: 'https://picsum.photos/seed/banner3/1200/400', title: 'Electronics Fest' },
];

export default function HeroBanner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    
    // Auto-play
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full bg-gray-100 overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {banners.map((banner) => (
          <div key={banner.id} className="flex-[0_0_100%] min-w-0 relative aspect-[21/9] md:aspect-[3/1]">
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              className="object-cover"
              priority={banner.id === 1}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === selectedIndex ? 'bg-primary-500 w-6' : 'bg-white/50'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
EOF

cat << 'EOF' > src/components/home/CategoryGrid.tsx
import Link from 'next/link';

const categories = [
  { id: '1', name: 'Mobiles', icon: '📱', slug: 'mobiles' },
  { id: '2', name: 'Fashion', icon: '👕', slug: 'fashion' },
  { id: '3', name: 'Electronics', icon: '💻', slug: 'electronics' },
  { id: '4', name: 'Home', icon: '🛋️', slug: 'home' },
  { id: '5', name: 'Beauty', icon: '💄', slug: 'beauty' },
  { id: '6', name: 'Appliances', icon: '📺', slug: 'appliances' },
  { id: '7', name: 'Toys', icon: '🧸', slug: 'toys' },
  { id: '8', name: 'Sports', icon: '⚽', slug: 'sports' },
];

export default function CategoryGrid() {
  return (
    <section>
      <h2 className="text-xl font-heading font-bold mb-4">Explore Categories</h2>
      <div className="flex overflow-x-auto pb-4 gap-4 md:grid md:grid-cols-8 md:gap-4 md:overflow-visible no-scrollbar">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/category/${cat.slug}`}
            className="flex flex-col items-center gap-2 min-w-[80px]"
          >
            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-2xl shadow-sm hover:shadow-md transition-shadow hover:bg-primary-50">
              {cat.icon}
            </div>
            <span className="text-xs font-medium text-center text-gray-700">{cat.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
EOF

cat << 'EOF' > src/components/home/DealOfTheDay.tsx
"use client";

import { useEffect, useState } from 'react';
import ProductCard from '../product/ProductCard';

const mockProducts = [
  {
    id: 'p1',
    name: 'Wireless Noise Cancelling Headphones',
    price: 199.99,
    mrp: 299.99,
    rating: 4.5,
    reviewCount: 128,
    image: 'https://picsum.photos/seed/p1/400/300',
    slug: 'wireless-headphones'
  },
  {
    id: 'p2',
    name: 'Smart Watch Series 7',
    price: 399.99,
    mrp: 499.99,
    rating: 4.8,
    reviewCount: 452,
    image: 'https://picsum.photos/seed/p2/400/300',
    slug: 'smart-watch-7'
  },
  {
    id: 'p3',
    name: 'Ergonomic Office Chair',
    price: 149.99,
    mrp: 249.99,
    rating: 4.2,
    reviewCount: 89,
    image: 'https://picsum.photos/seed/p3/400/300',
    slug: 'ergonomic-chair'
  },
  {
    id: 'p4',
    name: '4K Action Camera',
    price: 279.99,
    mrp: 349.99,
    rating: 4.6,
    reviewCount: 215,
    image: 'https://picsum.photos/seed/p4/400/300',
    slug: '4k-action-camera'
  }
];

export default function DealOfTheDay() {
  const [timeLeft, setTimeLeft] = useState(3600 * 5); // 5 hours

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <section className="bg-primary-50 rounded-xl p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-heading font-bold text-gray-900">Deal of the Day</h2>
          <p className="text-gray-600 text-sm mt-1">Hurry up! Offer ends in:</p>
        </div>
        <div className="flex gap-2">
          <div className="bg-white px-3 py-2 rounded-md shadow-sm text-lg font-mono font-bold text-primary-600">
            {hours.toString().padStart(2, '0')}
          </div>
          <span className="text-2xl font-bold text-gray-400 self-center">:</span>
          <div className="bg-white px-3 py-2 rounded-md shadow-sm text-lg font-mono font-bold text-primary-600">
            {minutes.toString().padStart(2, '0')}
          </div>
          <span className="text-2xl font-bold text-gray-400 self-center">:</span>
          <div className="bg-white px-3 py-2 rounded-md shadow-sm text-lg font-mono font-bold text-primary-600">
            {seconds.toString().padStart(2, '0')}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mockProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
EOF

cat << 'EOF' > src/components/product/ProductCard.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star, Check } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useCartStore from '@/store/cart';

interface Product {
  id: string;
  name: string;
  price: number;
  mrp: number;
  rating: number;
  reviewCount: number;
  image: string;
  slug: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const addItem = useCartStore(state => state.addItem);

  const discountPercent = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAdding(true);
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      imageUrl: product.image
    });
    setTimeout(() => setIsAdding(false), 1500);
  };

  return (
    <Link href={`/products/${product.slug}`} className="group block bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {discountPercent > 0 && (
          <div className="absolute top-2 left-2 bg-error-500 text-white text-xs font-bold px-2 py-1 rounded">
            {discountPercent}% OFF
          </div>
        )}
        <button 
          onClick={(e) => { e.preventDefault(); setIsWishlisted(!isWishlisted); }}
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <motion.div whileTap={{ scale: 1.2 }}>
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-error-500 text-error-500' : 'text-gray-600'}`} />
          </motion.div>
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-gray-900 line-clamp-2 text-sm h-10 mb-2">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-1 mb-3">
          <div className="flex text-accent-500">
            <Star className="w-3.5 h-3.5 fill-current" />
          </div>
          <span className="text-xs font-medium text-gray-700">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviewCount})</span>
        </div>
        
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-lg font-bold font-mono text-primary-900">${product.price.toFixed(2)}</span>
          {product.mrp > product.price && (
            <span className="text-sm text-gray-400 line-through font-mono">${product.mrp.toFixed(2)}</span>
          )}
        </div>
        
        <button 
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`w-full py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2 ${
            isAdding ? 'bg-success-500 text-white' : 'bg-primary-50 text-primary-600 hover:bg-primary-500 hover:text-white'
          }`}
        >
          <AnimatePresence mode="wait">
            {isAdding ? (
              <motion.div
                key="check"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <Check className="w-4 h-4" /> Added
              </motion.div>
            ) : (
              <motion.div
                key="add"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                Add to Cart
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </Link>
  );
}
EOF

chmod +x setup.sh
./setup.sh
