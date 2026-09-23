'use client';

import Link from 'next/link';
import { NAV_CATEGORIES } from '@/lib/constants';

export default function CategoryGrid() {
  return (
    <div>
      <h2 className="mb-5 font-display text-lg font-bold text-neutral-900 sm:text-xl">
        Shop by Category
      </h2>
      <div className="scrollbar-hide -mx-1 flex gap-3 overflow-x-auto px-1 pb-2 sm:grid sm:grid-cols-5 sm:gap-4 lg:grid-cols-9">
        {NAV_CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="group flex shrink-0 flex-col items-center gap-2"
          >
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl transition-all group-hover:scale-110 group-hover:shadow-md sm:h-20 sm:w-20 ${
                cat.isHighlighted
                  ? 'bg-gradient-to-br from-amber-100 to-amber-200 shadow-sm'
                  : 'bg-neutral-100 group-hover:bg-primary-50'
              }`}
            >
              {cat.emoji}
            </div>
            <span
              className={`text-center text-xs font-medium sm:text-sm ${
                cat.isHighlighted ? 'font-bold text-amber-600' : 'text-neutral-700'
              }`}
            >
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
