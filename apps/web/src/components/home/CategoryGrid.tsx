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
            Explore All 12 Departments
          </h2>
          <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
            1,000+ authentic handpicked items across electronics, fashion, groceries, and home essentials
          </p>
        </div>
        <Link
          href="/products"
          className="text-xs font-bold text-primary-600 hover:text-primary-700 underline underline-offset-4"
        >
          View All Products →
        </Link>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3 sm:gap-4">
        {NAV_CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="group flex flex-col items-center gap-2 p-2.5 rounded-2xl bg-white border border-neutral-100 hover:border-primary-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative aspect-square w-full max-w-[76px] overflow-hidden rounded-2xl bg-neutral-100 shadow-sm transition-transform duration-300 group-hover:scale-105">
              {cat.image ? (
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="76px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-2xl">
                  {cat.emoji}
                </div>
              )}
              {cat.isHighlighted && (
                <span className="absolute right-1 top-1 rounded bg-rose-500 px-1 py-0.2 text-[8px] font-black uppercase text-white shadow">
                  HOT
                </span>
              )}
            </div>

            <span className="text-center font-display text-xs font-bold text-neutral-800 transition-colors group-hover:text-primary-600 truncate w-full">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
