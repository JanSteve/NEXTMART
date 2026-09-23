'use client';

import HeroBanner from '@/components/home/HeroBanner';
import CategoryGrid from '@/components/home/CategoryGrid';
import DealOfTheDay from '@/components/home/DealOfTheDay';
import ProductCard from '@/components/product/ProductCard';
import { MOCK_PRODUCTS, BRANDS } from '@/lib/constants';
import { ArrowRight, Zap, TrendingUp, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const topPicks = MOCK_PRODUCTS.slice(0, 8);
  const trending = MOCK_PRODUCTS.filter((p) => p.category === 'Electronics').slice(0, 4);
  const fashionPicks = MOCK_PRODUCTS.filter((p) => p.category === 'Fashion').slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Quick Categories */}
      <section className="bg-white py-6">
        <div className="mx-auto max-w-7xl px-4">
          <CategoryGrid />
        </div>
      </section>

      {/* Deal of the Day */}
      <section className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 py-8">
        <div className="mx-auto max-w-7xl px-4">
          <DealOfTheDay />
        </div>
      </section>

      {/* Top Picks for You */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary-500" />
              <h2 className="font-display text-xl font-bold text-neutral-900 sm:text-2xl">
                Top Picks for You
              </h2>
            </div>
            <Link
              href="/products"
              className="flex items-center gap-1 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
            >
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-4">
            {topPicks.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brands We Love */}
      <section className="border-y border-neutral-100 bg-neutral-50 py-10">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-6 text-center font-display text-xl font-bold text-neutral-900">
            Brands We Love
          </h2>
          <div className="scrollbar-hide flex items-center gap-8 overflow-x-auto px-4 pb-2">
            {BRANDS.map((brand) => (
              <Link
                key={brand.name}
                href={`/search?q=${brand.name}`}
                className="flex shrink-0 flex-col items-center gap-2 transition-all hover:scale-105"
              >
                <div className="flex h-16 w-24 items-center justify-center rounded-lg bg-white p-3 shadow-sm transition-shadow hover:shadow-md">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={80}
                    height={40}
                    className="max-h-8 w-auto object-contain grayscale transition-all hover:grayscale-0"
                  />
                </div>
                <span className="text-xs font-medium text-neutral-500">{brand.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending in Electronics */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary-500" />
              <h2 className="font-display text-xl font-bold text-neutral-900 sm:text-2xl">
                Trending in Electronics
              </h2>
            </div>
            <Link
              href="/category/electronics"
              className="flex items-center gap-1 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
            >
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {trending.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Fashion Picks */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary-500" />
              <h2 className="font-display text-xl font-bold text-neutral-900 sm:text-2xl">
                Fashion Picks
              </h2>
            </div>
            <Link
              href="/category/fashion"
              className="flex items-center gap-1 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
            >
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {fashionPicks.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* NexMart Plus CTA */}
      <section className="bg-neutral-900 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-4 py-1.5 text-sm font-semibold text-amber-400">
              ⭐ NexMart Plus
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
              Unlimited free delivery &amp; exclusive deals
            </h2>
            <p className="mt-3 text-neutral-400">
              Join NexMart Plus for ₹299/month. Get free delivery on all orders, early access to
              sales, and extra cashback on every purchase.
            </p>
            <button className="mt-6 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-3 text-sm font-bold text-neutral-900 shadow-lg transition-all hover:from-amber-400 hover:to-amber-500 hover:shadow-xl">
              Start Free Trial →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
