'use client';

import { useState } from 'react';
import { Tag, X, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CouponInputProps {
  onApply?: (code: string) => void;
  onRemove?: () => void;
}

export function CouponInput({ onApply, onRemove }: CouponInputProps) {
  const [code, setCode] = useState('');
  const [applied, setApplied] = useState<string | null>(null);
  const [error, setError] = useState('');

  const validCoupons = ['NEXMART10', 'FIRST50', 'SAVE20'];

  const handleApply = () => {
    if (!code.trim()) return;
    if (validCoupons.includes(code.toUpperCase())) {
      setApplied(code.toUpperCase());
      setError('');
      setCode('');
      onApply?.(code.toUpperCase());
    } else {
      setError('Invalid coupon code');
    }
  };

  const handleRemove = () => {
    setApplied(null);
    onRemove?.();
  };

  if (applied) {
    return (
      <div className="flex items-center justify-between rounded-md border border-success-200 bg-success-50 px-3 py-2.5">
        <div className="flex items-center gap-2 text-sm text-success-700">
          <Check className="h-4 w-4" />
          <span>
            Coupon <span className="font-mono font-bold">{applied}</span> applied!
          </span>
        </div>
        <button
          onClick={handleRemove}
          className="rounded-full p-0.5 text-success-600 transition-colors hover:bg-success-100"
          aria-label="Remove coupon"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Tag className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            value={code}
            onChange={(e) => { setCode(e.target.value.toUpperCase()); setError(''); }}
            placeholder="Enter coupon code"
            className={cn(
              'w-full rounded-md border py-2.5 pl-9 pr-3 text-sm font-mono uppercase outline-none transition-colors',
              error
                ? 'border-error-300 focus:border-error-500 focus:ring-1 focus:ring-error-500'
                : 'border-neutral-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500',
            )}
            onKeyDown={(e) => e.key === 'Enter' && handleApply()}
          />
        </div>
        <button
          onClick={handleApply}
          disabled={!code.trim()}
          className="shrink-0 rounded-md border border-primary-500 px-4 py-2.5 text-sm font-semibold text-primary-600 transition-colors hover:bg-primary-50 disabled:cursor-not-allowed disabled:border-neutral-200 disabled:text-neutral-400"
        >
          Apply
        </button>
      </div>
      {error && <p className="mt-1.5 text-xs text-error-500">{error}</p>}
      <p className="mt-2 text-xs text-neutral-400">
        Try: <span className="font-mono">NEXMART10</span>, <span className="font-mono">FIRST50</span>
      </p>
    </div>
  );
}
