'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, MapPin, User, Heart, ChevronDown, Package, LogOut, ShieldCheck } from 'lucide-react';
import { useCartStore } from '@/store/cart';
import useAuthStore from '@/store/auth';
import useLanguageStore from '@/store/language';
import { SearchBar } from './SearchBar';
import { CategoryNav } from './CategoryNav';
import { MobileNav } from './MobileNav';
import { LanguageSwitcher } from './LanguageSwitcher';
import { LocationModal } from './LocationModal';

export default function Header() {
  const items = useCartStore((s) => s.items);
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const { user, isAuthenticated, logout } = useAuthStore();
  const { t, location } = useLanguageStore();
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-header">
      {/* Top offer announcement bar */}
      <div className="bg-primary-600 px-4 py-1.5 text-center text-xs font-semibold text-white sm:text-sm flex items-center justify-center gap-2">
        <span>{t.offerBanner}</span>
        <span className="hidden md:inline rounded bg-white/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
          Vadodara Express Active
        </span>
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

            {/* User Account / Profile Dropdown */}
            {isAuthenticated && user ? (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-2.5 py-1.5 text-xs font-bold text-neutral-800 hover:border-primary-400 hover:bg-white transition-all shadow-sm"
                >
                  {user.avatar ? (
                    <div className="relative h-6 w-6 overflow-hidden rounded-full border border-primary-500">
                      <Image src={user.avatar} alt={user.name || 'User'} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-600 text-white text-[10px]">
                      {(user.firstName || user.name || 'U')[0]}
                    </div>
                  )}
                  <span className="hidden max-w-[90px] truncate sm:inline">
                    {user.firstName || user.name?.split(' ')[0] || 'Account'}
                  </span>
                  <ChevronDown className="h-3 w-3 text-neutral-400" />
                </button>

                {/* Account Dropdown Menu */}
                {userDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setUserDropdownOpen(false)}
                    />
                    <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-2xl border border-neutral-100 bg-white p-2 shadow-xl animate-fade-in">
                      <div className="border-b border-neutral-100 px-3 py-2">
                        <p className="text-xs font-bold text-neutral-900">{user.name || 'Google User'}</p>
                        <p className="text-[11px] text-neutral-500 truncate">{user.email}</p>
                      </div>
                      <div className="py-1">
                        <Link
                          href="/account"
                          onClick={() => setUserDropdownOpen(false)}
                          className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold text-neutral-700 hover:bg-neutral-50 hover:text-primary-600"
                        >
                          <User className="h-4 w-4 text-neutral-400" />
                          <span>Your Profile</span>
                        </Link>
                        <Link
                          href="/account/orders"
                          onClick={() => setUserDropdownOpen(false)}
                          className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold text-neutral-700 hover:bg-neutral-50 hover:text-primary-600"
                        >
                          <Package className="h-4 w-4 text-neutral-400" />
                          <span>Your Orders &amp; Invoices</span>
                        </Link>
                        <Link
                          href="/account/wishlist"
                          onClick={() => setUserDropdownOpen(false)}
                          className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold text-neutral-700 hover:bg-neutral-50 hover:text-primary-600"
                        >
                          <Heart className="h-4 w-4 text-neutral-400" />
                          <span>Wishlist</span>
                        </Link>
                      </div>
                      <div className="border-t border-neutral-100 pt-1">
                        <button
                          type="button"
                          onClick={() => {
                            logout();
                            setUserDropdownOpen(false);
                          }}
                          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold text-rose-600 hover:bg-rose-50"
                        >
                          <LogOut className="h-4 w-4" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <Link
                href="/auth/login"
                className="flex items-center gap-1.5 rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-bold text-neutral-800 transition-colors hover:border-primary-500 hover:bg-primary-50 hover:text-primary-600"
              >
                <User className="h-4 w-4 text-primary-600" />
                <span>{t.login}</span>
              </Link>
            )}

            {/* Wishlist */}
            <Link
              href="/account/wishlist"
              className="hidden rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-primary-600 sm:block"
              aria-label={t.wishlist}
            >
              <Heart className="h-5 w-5" />
            </Link>

            {/* Cart Button */}
            <Link
              href="/cart"
              className="relative flex items-center gap-1.5 rounded-xl bg-neutral-900 px-3.5 py-2 text-xs font-bold text-white transition-all hover:bg-primary-600 hover:shadow-md"
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
