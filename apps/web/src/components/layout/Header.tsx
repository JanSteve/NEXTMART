'use client';

import Link from 'next/link';
import { ShoppingCart, MapPin, User, Heart, ChevronDown } from 'lucide-react';
import { useCartStore } from '@/store/cart';
import { SearchBar } from './SearchBar';
import { CategoryNav } from './CategoryNav';
import { MobileNav } from './MobileNav';

export default function Header() {
  const items = useCartStore((s) => s.items);
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-header">
      {/* Top bar — offer strip */}
      <div className="bg-primary-500 px-4 py-1.5 text-center text-xs font-medium text-white sm:text-sm">
        🎉 Grand Launch Sale — <span className="font-bold">Extra 10% off</span> on your first order! Use code{' '}
        <span className="rounded bg-white/20 px-1.5 py-0.5 font-mono font-bold">NEXMART10</span>
      </div>

      {/* Main header */}
      <div className="border-b border-neutral-100">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 lg:gap-6">
          {/* Mobile menu */}
          <MobileNav />

          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-0.5 font-display">
            <span className="text-2xl font-extrabold tracking-tight">
              <span className="text-gradient">Nex</span>
              <span className="text-neutral-900">Mart</span>
            </span>
          </Link>

          {/* Location — desktop only */}
          <button className="hidden items-center gap-1.5 rounded-lg border border-neutral-200 px-3 py-1.5 text-left transition-colors hover:border-primary-300 hover:bg-primary-50 lg:flex">
            <MapPin className="h-4 w-4 text-primary-500" />
            <div className="flex flex-col">
              <span className="text-[10px] leading-none text-neutral-500">Deliver to</span>
              <span className="flex items-center gap-0.5 text-xs font-semibold text-neutral-800">
                Chennai 600001 <ChevronDown className="h-3 w-3" />
              </span>
            </div>
          </button>

          {/* Search */}
          <div className="hidden flex-1 md:block">
            <SearchBar />
          </div>

          {/* Right actions */}
          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            {/* Login */}
            <Link
              href="/auth/login"
              className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-primary-600 sm:flex"
            >
              <User className="h-5 w-5" />
              <span className="hidden lg:inline">Login</span>
            </Link>

            {/* Wishlist */}
            <Link
              href="/account/wishlist"
              className="hidden rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-primary-600 sm:block"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" />
            </Link>

            {/* Become Seller */}
            <Link
              href="/sell"
              className="hidden rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-primary-600 xl:block"
            >
              Become a Seller
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative flex items-center gap-1.5 rounded-lg px-3 py-2 text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-primary-600"
              aria-label={`Shopping cart with ${itemCount} items`}
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent-500 text-[10px] font-bold text-white shadow-sm">
                  {itemCount > 99 ? '99+' : itemCount}
                </span>
              )}
              <span className="hidden text-sm font-medium lg:inline">Cart</span>
            </Link>
          </div>
        </div>

        {/* Mobile search */}
        <div className="border-t border-neutral-100 px-4 py-2 md:hidden">
          <SearchBar />
        </div>
      </div>

      {/* Category nav */}
      <CategoryNav />
    </header>
  );
}
