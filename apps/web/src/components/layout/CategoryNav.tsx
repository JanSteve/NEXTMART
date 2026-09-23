'use client';

import { useState } from 'react';
import { NAV_CATEGORIES } from '@/lib/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { MegaMenuDrawer } from './MegaMenuDrawer';

export function CategoryNav() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <nav className="border-b border-neutral-100 bg-neutral-900 text-white" aria-label="Product categories">
        <div className="mx-auto max-w-7xl">
          <div className="scrollbar-hide flex items-center gap-1 overflow-x-auto px-4 py-1.5">
            {/* Amazon-style "All Departments" Hamburger Button */}
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="flex shrink-0 items-center gap-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-sm"
              aria-label="All Departments"
            >
              <Menu className="h-4 w-4 text-primary-400" />
              <span>All Departments</span>
            </button>

            {/* Category Links */}
            {NAV_CATEGORIES.map((cat) => {
              const isActive = pathname === `/category/${cat.slug}`;
              return (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className={cn(
                    'flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary-500 text-white font-bold'
                      : cat.isHighlighted
                        ? 'text-amber-400 hover:bg-neutral-800'
                        : 'text-neutral-300 hover:bg-neutral-800 hover:text-white',
                  )}
                >
                  <span className="text-sm sm:text-base">{cat.emoji}</span>
                  <span>{cat.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Slide-out Mega Menu Drawer */}
      <MegaMenuDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
