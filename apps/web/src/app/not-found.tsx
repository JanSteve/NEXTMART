'use client';

import Link from 'next/link';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-16">
      <div className="text-center">
        {/* 404 Visual */}
        <div className="relative mx-auto mb-8 w-fit">
          <span className="text-[120px] font-extrabold leading-none text-neutral-100 sm:text-[180px]">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl">🛒</span>
          </div>
        </div>

        {/* Message */}
        <h1 className="font-display text-2xl font-bold text-neutral-900 sm:text-3xl">
          Oops! Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-neutral-500">
          Looks like this page went on a shopping spree and got lost. Don&apos;t worry, there&apos;s
          plenty more to explore!
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/products"
            className="flex items-center gap-2 rounded-lg border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-50"
          >
            <Search className="h-4 w-4" />
            Browse Products
          </Link>
        </div>

        {/* Back link */}
        <button
          onClick={() => typeof window !== 'undefined' && window.history.back()}
          className="mt-6 inline-flex items-center gap-1 text-sm text-neutral-400 transition-colors hover:text-neutral-600"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Go back to previous page
        </button>
      </div>
    </div>
  );
}