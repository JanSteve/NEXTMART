'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, MapPin, User, Heart, ChevronDown } from 'lucide-react';
import { useCartStore } from '@/store/cart';
import useLanguageStore from '@/store/language';
import { SearchBar } from './SearchBar';
import { CategoryNav } from './CategoryNav';
import { MobileNav } from './MobileNav';
import { LanguageSwitcher } from './LanguageSwitcher';
import { LocationModal } from './LocationModal';

export default function Header() {
  const items = useCartStore((s) => s.items);
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const { t, location } = useLanguageStore();
  const [locationModalOpen, setLocationModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-header">
      {/* Top offer announcement bar */}
      <div className="bg-primary-600 px-4 py-1.5 text-center text-xs font-semibold text-white sm:text-sm">
        {t.offerBanner}
      </div>

      {/* Main navigation header */}
      <div className="border-b border-neutral-100">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 lg:gap-5">
          {/* Mobile menu drawer trigger */}
          <MobileNav />

          {/* Brand Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-0.5 font-display">
            <span className="text-2xl font-extrabold tracking-tight">
              <span className="text-gradient">Nex</span>
              <span className="text-neutral-900">Mart</span>
            </span>
          </Link>

          {/* Location Selector (Defaults to Vadodara) */}
          <button
            type="button"
            onClick={() => setLocationModalOpen(true)}
            className="hidden items-center gap-2 rounded-xl border border-neutral-200 px-3 py-1.5 text-left transition-all hover:border-primary-400 hover:bg-primary-50/50 lg:flex"
            aria-label="Change delivery location"
          >
            <MapPin className="h-4 w-4 text-primary-600 shrink-0" />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                {t.deliverTo}
              </span>
              <span className="flex items-center gap-1 text-xs font-bold text-neutral-800">
                {location.city} {location.pincode} <ChevronDown className="h-3 w-3 text-neutral-400" />
              </span>
            </div>
          </button>

          {/* Search bar */}
          <div className="hidden flex-1 md:block">
            <SearchBar />
          </div>

          {/* Right Header Utilities */}
          <div className="ml-auto flex items-center gap-1.5 sm:gap-2.5">
            {/* Language Switcher (English / Gujarati / Hindi) */}
            <LanguageSwitcher />

            {/* User Account / Login */}
            <Link
              href="/auth/login"
              className="hidden items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-bold text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-primary-600 sm:flex"
            >
              <User className="h-4 w-4 text-neutral-500" />
              <span className="hidden lg:inline">{t.login}</span>
            </Link>

            {/* Wishlist */}
            <Link
              href="/account/wishlist"
              className="hidden rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-primary-600 sm:block"
              aria-label={t.wishlist}
            >
              <Heart className="h-5 w-5" />
            </Link>

            {/* Become Seller */}
            <Link
              href="/sell"
              className="hidden rounded-lg px-2.5 py-1.5 text-xs font-bold text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-primary-600 xl:block"
            >
              {t.becomeSeller}
            </Link>

            {/* Cart Button */}
            <Link
              href="/cart"
              className="relative flex items-center gap-1.5 rounded-xl bg-neutral-900 px-3 py-2 text-xs font-bold text-white transition-all hover:bg-primary-600 hover:shadow-md"
              aria-label={`Shopping cart with ${itemCount} items`}
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden lg:inline">{t.cart}</span>
              {itemCount > 0 ? (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-500 text-[10px] font-extrabold text-neutral-950">
                  {itemCount > 99 ? '99+' : itemCount}
                </span>
              ) : (
                <span className="text-[10px] text-neutral-300">(0)</span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Search Input */}
        <div className="border-t border-neutral-100 px-4 py-2 md:hidden">
          <SearchBar />
        </div>
      </div>

      {/* Category Navigation Bar */}
      <CategoryNav />

      {/* Location Selection Modal */}
      <LocationModal
        isOpen={locationModalOpen}
        onClose={() => setLocationModalOpen(false)}
      />
    </header>
  );
}
