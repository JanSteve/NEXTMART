'use client';

import HeroBanner from '@/components/home/HeroBanner';
import CategoryGrid from '@/components/home/CategoryGrid';
import DealOfTheDay from '@/components/home/DealOfTheDay';
import ProductCard from '@/components/product/ProductCard';
import { MOCK_PRODUCTS, BRANDS } from '@/lib/constants';
import { ArrowRight, Zap, TrendingUp, Sparkles, ShieldCheck, Truck, RotateCcw, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import useLanguageStore from '@/store/language';

export default function Home() {
  const { t } = useLanguageStore();
  const topPicks = MOCK_PRODUCTS.slice(0, 8);
  const trending = MOCK_PRODUCTS.filter((p) => p.category === 'Electronics').slice(0, 4);
  const fashionPicks = MOCK_PRODUCTS.filter((p) => p.category === 'Fashion').slice(0, 4);

  return (
    <div className="flex flex-col gap-8 pb-16">
      {/* 1. Hero Banner */}
      <HeroBanner />

      {/* 2. Value Proposition Strip */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-white p-4 sm:p-5 rounded-2xl border border-neutral-200/70 shadow-sm">
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 font-bold">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-neutral-900">Fast Vadodara Delivery</p>
              <p className="text-[11px] text-neutral-500">Free delivery on orders ₹999+</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-neutral-900">100% Genuine Products</p>
              <p className="text-[11px] text-neutral-500">Authorized brand partners</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 font-bold">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-neutral-900">7-Day Easy Returns</p>
              <p className="text-[11px] text-neutral-500">Hassle-free doorstep pickup</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 font-bold">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-neutral-900">Best Price Guarantee</p>
              <p className="text-[11px] text-neutral-500">Verified retail pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Categories */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <CategoryGrid />
      </section>

      {/* 4. Deal of the Day */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <DealOfTheDay />
      </section>

      {/* 5. Top Picks For You */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-100 text-primary-600 font-bold">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-black text-neutral-900">
                {t.topPicks}
              </h2>
              <p className="text-xs text-neutral-500">Recommended based on popular Vadodara purchases</p>
            </div>
          </div>
          <Link
            href="/products"
            className="flex items-center gap-1 text-xs sm:text-sm font-bold text-primary-600 hover:text-primary-700"
          >
            <span>{t.viewAll}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-4">
          {topPicks.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 6. Trending Electronics */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 font-bold">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-black text-neutral-900">
                {t.trendingElectronics}
              </h2>
              <p className="text-xs text-neutral-500">Smartphones, laptops &amp; wearable tech</p>
            </div>
          </div>
          <Link
            href="/category/electronics"
            className="flex items-center gap-1 text-xs sm:text-sm font-bold text-primary-600 hover:text-primary-700"
          >
            <span>{t.viewAll}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          {trending.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 7. Fashion & Apparel Spotlight */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-rose-100 bg-gradient-to-br from-rose-50/50 via-white to-pink-50/40 p-6 sm:p-8 shadow-sm">
          <div className="mb-6 flex items-center justify-between pb-4 border-b border-rose-100">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-100 text-rose-600 font-bold">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-black text-neutral-900">
                  {t.fashionPicks}
                </h2>
                <p className="text-xs text-neutral-500">Maxi dresses, Anarkali kurtas, footwear &amp; denim</p>
              </div>
            </div>
            <Link
              href="/category/fashion"
              className="flex items-center gap-1 text-xs sm:text-sm font-bold text-rose-600 hover:text-rose-700"
            >
              <span>{t.viewAll}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
            {fashionPicks.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Verified Brand Showcase */}
      <section className="border-y border-neutral-200/80 bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center font-display text-xl font-bold text-neutral-900">
            {t.brandsWeLove}
          </h2>
          <div className="scrollbar-hide flex items-center justify-start sm:justify-center gap-4 sm:gap-6 overflow-x-auto pb-2">
            {BRANDS.map((brand) => (
              <Link
                key={brand.name}
                href={`/search?q=${brand.name}`}
                className="group flex shrink-0 flex-col items-center gap-2"
              >
                <div className="flex h-16 w-28 items-center justify-center rounded-2xl bg-neutral-50 border border-neutral-100 p-3 shadow-sm transition-all group-hover:scale-105 group-hover:border-primary-300 group-hover:bg-white group-hover:shadow-md">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={80}
                    height={40}
                    className="max-h-7 w-auto object-contain transition-all"
                  />
                </div>
                <span className="text-[11px] font-bold text-neutral-600 group-hover:text-primary-600">{brand.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. NexMart Plus Membership Banner */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-indigo-950 py-10 px-6 sm:px-12 text-center text-white shadow-2xl border border-neutral-800">
          <div className="mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 px-3.5 py-1 text-xs font-bold text-amber-300 border border-amber-400/30">
              ⭐ NexMart Plus Member Club
            </span>
            <h2 className="mt-4 font-display text-2xl sm:text-4xl font-black tracking-tight text-white">
              {t.plusTitle}
            </h2>
            <p className="mt-3 text-sm text-neutral-300 max-w-xl mx-auto leading-relaxed">
              {t.plusDesc}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/products"
                className="rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-8 py-3.5 text-sm font-black text-neutral-950 shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                {t.plusButton}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
