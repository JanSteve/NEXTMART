'use client';

import { Clock, Flame, ArrowRight } from 'lucide-react';
import { CountdownTimer } from '@/components/ui/CountdownTimer';
import ProductCard from '@/components/product/ProductCard';
import { MOCK_PRODUCTS } from '@/lib/constants';
import Link from 'next/link';

export default function DealOfTheDay() {
  // End of day timer
  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  const dealProducts = MOCK_PRODUCTS.filter((p) => p.price < p.mrp * 0.75).slice(0, 4);

  return (
    <div className="rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-amber-500/10 p-6 sm:p-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6 pb-4 border-b border-amber-200/60">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg text-white">
            <Flame className="h-6 w-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-display text-xl sm:text-2xl font-black text-neutral-900">
                Flash Deals of the Day
              </h2>
              <span className="hidden sm:inline-block rounded-full bg-rose-600 px-2.5 py-0.5 text-[10px] font-black uppercase text-white shadow">
                Up to 70% OFF
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-neutral-600 mt-1">
              <Clock className="h-3.5 w-3.5 text-amber-600" />
              <span>Offers refresh in:</span>
              <CountdownTimer targetDate={endOfDay} />
            </div>
          </div>
        </div>

        <Link
          href="/products?sort=discount"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 hover:text-amber-900 bg-amber-200/60 hover:bg-amber-200 px-4 py-2 rounded-xl transition shadow-sm"
        >
          <span>All Flash Deals</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
        {dealProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
