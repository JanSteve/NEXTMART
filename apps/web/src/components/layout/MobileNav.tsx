'use client';

import { useState } from 'react';
import { X, Menu, ChevronRight, User, ShoppingBag, Heart, MapPin, LogIn } from 'lucide-react';
import Link from 'next/link';
import { NAV_CATEGORIES } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-lg p-2 text-neutral-700 hover:bg-neutral-100 lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/40"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed left-0 top-0 z-50 flex h-full w-[300px] max-w-[85vw] flex-col bg-white shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-neutral-100 bg-primary-500 px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Welcome!</p>
                    <Link
                      href="/auth/login"
                      onClick={() => setIsOpen(false)}
                      className="text-xs text-white/80 hover:text-white"
                    >
                      Login / Register →
                    </Link>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1.5 text-white/80 hover:bg-white/10 hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto">
                {/* Quick Links */}
                <div className="border-b border-neutral-100 py-2">
                  {[
                    { icon: ShoppingBag, label: 'My Orders', href: '/account/orders' },
                    { icon: Heart, label: 'Wishlist', href: '/account/wishlist' },
                    { icon: MapPin, label: 'My Addresses', href: '/account/addresses' },
                    { icon: User, label: 'My Account', href: '/account' },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-700 transition-colors hover:bg-neutral-50"
                    >
                      <link.icon className="h-4.5 w-4.5 text-neutral-400" />
                      <span>{link.label}</span>
                      <ChevronRight className="ml-auto h-4 w-4 text-neutral-300" />
                    </Link>
                  ))}
                </div>

                {/* Categories */}
                <div className="py-2">
                  <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Shop by Category
                  </p>
                  {NAV_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/category/${cat.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-700 transition-colors hover:bg-neutral-50"
                    >
                      <span className="text-lg">{cat.emoji}</span>
                      <span className={cat.isHighlighted ? 'font-medium text-amber-600' : ''}>
                        {cat.name}
                      </span>
                      <ChevronRight className="ml-auto h-4 w-4 text-neutral-300" />
                    </Link>
                  ))}
                </div>

                {/* Sell */}
                <div className="border-t border-neutral-100 py-2">
                  <Link
                    href="/sell"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-primary-600 transition-colors hover:bg-primary-50"
                  >
                    <LogIn className="h-4.5 w-4.5" />
                    <span>Become a Seller</span>
                  </Link>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-neutral-100 px-4 py-3">
                <p className="text-center text-xs text-neutral-400">
                  NexMart v1.0 · Made in India 🇮🇳
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
