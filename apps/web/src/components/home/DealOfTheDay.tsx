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

  const dealProducts = MOCK_PRODUCTS.filter((p) => p.price < p.mrp * 0.7).slice(0, 4);

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 shadow-md">
            <Flame className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-neutral-900 sm:text-2xl">
              Deal of the Day
            </h2>
            <div className="flex items-center gap-1.5 text-xs text-neutral-500">
              <Clock className="h-3.5 w-3.5" />
              <span>Ends in</span>
              <CountdownTimer targetDate={endOfDay} />
            </div>
          </div>
        </div>
        <Link
          href="/products?sort=discount"
          className="flex items-center gap-1 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
        >
          View All Deals <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Products grid */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {dealProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
