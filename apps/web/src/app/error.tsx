'use client';

import { RefreshCw, Home, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-16">
      <div className="text-center">
        {/* Error icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-error-50">
          <AlertTriangle className="h-10 w-10 text-error-500" />
        </div>

        {/* Message */}
        <h1 className="font-display text-2xl font-bold text-neutral-900 sm:text-3xl">
          Something went wrong
        </h1>
        <p className="mx-auto mt-3 max-w-md text-neutral-500">
          We ran into an unexpected issue on our end. Our team has been notified and we&apos;re
          working to fix it. Please try again.
        </p>

        {error.digest && (
          <p className="mt-2 font-mono text-xs text-neutral-400">
            Error ID: {error.digest}
          </p>
        )}

        {/* Actions */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={reset}
            className="flex items-center gap-2 rounded-lg bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </button>
          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-50"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        {/* Support */}
        <p className="mt-8 text-sm text-neutral-400">
          Still having issues?{' '}
          <a href="mailto:support@nexmart.in" className="font-medium text-primary-600 hover:underline">
            Contact Support
          </a>
        </p>
      </div>
    </div>
  );
}