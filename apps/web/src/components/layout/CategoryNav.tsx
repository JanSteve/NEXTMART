'use client';

import { NAV_CATEGORIES } from '@/lib/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function CategoryNav() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-neutral-100 bg-neutral-50" aria-label="Product categories">
      <div className="mx-auto max-w-7xl">
        <div className="scrollbar-hide flex items-center gap-1 overflow-x-auto px-4 py-1.5">
          {NAV_CATEGORIES.map((cat) => {
            const isActive = pathname === `/category/${cat.slug}`;
            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className={cn(
                  'flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary-500 text-white'
                    : cat.isHighlighted
                      ? 'text-amber-600 hover:bg-amber-50'
                      : 'text-neutral-700 hover:bg-neutral-100',
                )}
              >
                <span className="text-base">{cat.emoji}</span>
                <span>{cat.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
