'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  User,
  ChevronRight,
  Flame,
  Zap,
  Sparkles,
  ShoppingBag,
  Gift,
  HelpCircle,
  Globe,
  LogOut,
  MapPin,
  Store,
  ChevronDown,
} from 'lucide-react';
import { AMAZON_DEPARTMENTS } from '@/lib/products-catalog';
import useAuthStore from '@/store/auth';
import useLanguageStore from '@/store/language';

interface MegaMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenuDrawer({ isOpen, onClose }: MegaMenuDrawerProps) {
  const { user, isAuthenticated, logout } = useAuthStore();
  const { language, setLanguage, location } = useLanguageStore();
  const [expandedDept, setExpandedDept] = useState<string | null>(null);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const toggleDept = (deptId: string) => {
    setExpandedDept(expandedDept === deptId ? null : deptId);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer container */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative z-10 flex h-full w-full max-w-sm flex-col bg-white shadow-2xl sm:max-w-md"
          >
            {/* User Profile Header (Amazon style) */}
            <div className="flex items-center justify-between bg-neutral-900 px-6 py-4 text-white">
              <Link
                href={isAuthenticated ? '/account' : '/auth/login'}
                onClick={onClose}
                className="flex items-center gap-3 group"
              >
                {isAuthenticated && user?.avatar ? (
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-primary-400">
                    <Image
                      src={user.avatar}
                      alt={user.name || 'User'}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-neutral-300 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <User className="h-5 w-5" />
                  </div>
                )}
                <div>
                  <p className="text-xs text-neutral-400">
                    {isAuthenticated ? 'Welcome Back' : 'Hello, Sign in'}
                  </p>
                  <p className="font-display text-sm font-bold text-white group-hover:text-primary-300 transition-colors">
                    {isAuthenticated ? user?.name || user?.email : 'Your Account & Orders'}
                  </p>
                </div>
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable menu content */}
            <div className="flex-1 overflow-y-auto divide-y divide-neutral-100">
              {/* Vadodara Local Location Banner */}
              <div className="bg-primary-50/70 px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-primary-900">
                  <MapPin className="h-4 w-4 text-primary-600 shrink-0" />
                  <span>Delivering to {location.city} {location.pincode}</span>
                </div>
                <span className="rounded bg-primary-600 px-2 py-0.5 text-[10px] font-extrabold text-white uppercase tracking-wider">
                  2-Hr Hub
                </span>
              </div>

              {/* 1. Trending & Best Deals */}
              <div className="p-4">
                <p className="mb-2 px-2 text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                  Trending &amp; Deals
                </p>
                <div className="space-y-1">
                  <Link
                    href="/category/deals"
                    onClick={onClose}
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-bold text-rose-600 hover:bg-rose-50 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Flame className="h-4 w-4" />
                      <span>Today&apos;s Lightning Deals</span>
                    </div>
                    <span className="rounded-md bg-rose-600 px-1.5 py-0.5 text-[10px] font-black text-white">
                      UP TO 70%
                    </span>
                  </Link>
                  <Link
                    href="/products"
                    onClick={onClose}
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Zap className="h-4 w-4 text-amber-500" />
                      <span>NexMart Bestsellers (1,000+ Items)</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-neutral-400" />
                  </Link>
                  <Link
                    href="/nexmart-plus"
                    onClick={onClose}
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="h-4 w-4 text-primary-600" />
                      <span>NexMart Plus Membership</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-neutral-400" />
                  </Link>
                </div>
              </div>

              {/* 2. Shop By Department (All 12 Amazon Departments) */}
              <div className="p-4">
                <p className="mb-2 px-2 text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                  Shop By Department (1,000+ Catalog)
                </p>
                <div className="space-y-1">
                  {AMAZON_DEPARTMENTS.map((dept) => {
                    const isExpanded = expandedDept === dept.id;
                    return (
                      <div key={dept.id} className="rounded-xl overflow-hidden">
                        <div className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-50 transition-colors">
                          <Link
                            href={`/category/${dept.slug}`}
                            onClick={onClose}
                            className="flex items-center gap-2.5 flex-1"
                          >
                            <span className="text-base">{dept.emoji}</span>
                            <span className="font-bold text-neutral-900">{dept.name}</span>
                          </Link>
                          <button
                            type="button"
                            onClick={() => toggleDept(dept.id)}
                            className="p-1 text-neutral-400 hover:text-neutral-700"
                            aria-label={`Toggle ${dept.name} subcategories`}
                          >
                            <ChevronDown
                              className={`h-4 w-4 transition-transform ${
                                isExpanded ? 'rotate-180 text-primary-600' : ''
                              }`}
                            />
                          </button>
                        </div>

                        {/* Subcategory Accordion */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="bg-neutral-50 px-4 py-2 border-y border-neutral-100"
                            >
                              <div className="grid grid-cols-1 gap-1.5 pl-6 text-xs">
                                {dept.subcategories.map((sub) => (
                                  <Link
                                    key={sub}
                                    href={`/category/${dept.slug}`}
                                    onClick={onClose}
                                    className="py-1 text-neutral-600 hover:text-primary-600 hover:font-bold transition-all"
                                  >
                                    • {sub}
                                  </Link>
                                ))}
                                <Link
                                  href={`/category/${dept.slug}`}
                                  onClick={onClose}
                                  className="py-1 font-bold text-primary-600 hover:underline"
                                >
                                  View all in {dept.name} →
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 3. Programs & Features */}
              <div className="p-4">
                <p className="mb-2 px-2 text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                  Programs &amp; Features
                </p>
                <div className="space-y-1">
                  <Link
                    href="/sell"
                    onClick={onClose}
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Store className="h-4 w-4 text-emerald-600" />
                      <span>Sell on NexMart Marketplace</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-neutral-400" />
                  </Link>
                  <Link
                    href="/gift-cards"
                    onClick={onClose}
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Gift className="h-4 w-4 text-purple-600" />
                      <span>Gift Cards &amp; Vouchers</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-neutral-400" />
                  </Link>
                  <Link
                    href="/cart"
                    onClick={onClose}
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <ShoppingBag className="h-4 w-4 text-neutral-600" />
                      <span>Your Cart &amp; Saved Items</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-neutral-400" />
                  </Link>
                </div>
              </div>

              {/* 4. Language & Account Settings */}
              <div className="p-4">
                <p className="mb-2 px-2 text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                  Settings &amp; Preferences
                </p>
                <div className="space-y-2 px-3 py-2">
                  <div className="flex items-center justify-between text-xs font-bold text-neutral-700">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-neutral-500" />
                      <span>Language (ભાષા)</span>
                    </div>
                    <div className="flex gap-1">
                      <button
                        onClick={() => setLanguage('en')}
                        className={`rounded px-2 py-0.5 text-xs font-bold ${
                          language === 'en'
                            ? 'bg-primary-600 text-white'
                            : 'bg-neutral-100 text-neutral-600'
                        }`}
                      >
                        EN
                      </button>
                      <button
                        onClick={() => setLanguage('gu')}
                        className={`rounded px-2 py-0.5 text-xs font-bold ${
                          language === 'gu'
                            ? 'bg-primary-600 text-white'
                            : 'bg-neutral-100 text-neutral-600'
                        }`}
                      >
                        ગુજરાતી
                      </button>
                    </div>
                  </div>

                  {isAuthenticated ? (
                    <button
                      type="button"
                      onClick={() => {
                        logout();
                        onClose();
                      }}
                      className="mt-3 flex w-full items-center gap-2 rounded-xl border border-rose-200 bg-rose-50/50 px-3 py-2.5 text-xs font-bold text-rose-600 hover:bg-rose-100 transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Sign Out</span>
                    </button>
                  ) : (
                    <Link
                      href="/auth/login"
                      onClick={onClose}
                      className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 px-3 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-primary-700 transition-colors"
                    >
                      <User className="h-4 w-4" />
                      <span>Sign In / Create Account</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
