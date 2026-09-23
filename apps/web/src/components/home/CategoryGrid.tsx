'use client';

import Link from 'next/link';
import Image from 'next/image';
import { NAV_CATEGORIES } from '@/lib/constants';

export default function CategoryGrid() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="font-display text-xl font-bold text-neutral-900 sm:text-2xl">
            Explore Categories
          </h2>
          <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
            Curated collections from top verified brands
          </p>
        </div>
        <Link
          href="/products"
          className="text-xs font-bold uppercase tracking-wider text-primary-600 hover:text-primary-700"
        >
          View All Products →
        </Link>
      </div>

      <div className="scrollbar-hide -mx-1 flex gap-4 overflow-x-auto px-1 pb-3 sm:grid sm:grid-cols-4 sm:gap-4 md:grid-cols-5 lg:grid-cols-9">
        {NAV_CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="group flex w-24 shrink-0 flex-col items-center gap-2.5 sm:w-auto"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-100 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-card">
              {cat.image ? (
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-3xl">
                  {cat.emoji}
                </div>
              )}
              {cat.isHighlighted && (
                <span className="absolute right-1 top-1 rounded bg-amber-500 px-1.5 py-0.5 text-[9px] font-extrabold uppercase text-white shadow">
                  HOT
                </span>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>

            <span className="text-center font-display text-xs font-semibold text-neutral-800 transition-colors group-hover:text-primary-600">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
