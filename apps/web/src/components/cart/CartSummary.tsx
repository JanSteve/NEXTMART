'use client';

import { ShieldCheck, Truck, Tag } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';

interface CartSummaryProps {
  subtotal: number;
  discount: number;
  deliveryCharge: number;
  itemCount: number;
}

export function CartSummary({ subtotal, discount, deliveryCharge, itemCount }: CartSummaryProps) {
  const total = subtotal - discount + deliveryCharge;
  const savings = discount + (deliveryCharge === 0 ? 49 : 0);

  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-5">
      <h3 className="font-display text-base font-semibold text-neutral-900">Order Summary</h3>

      <div className="mt-4 space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-neutral-600">Subtotal ({itemCount} items)</span>
          <span className="font-medium text-neutral-800">{formatPrice(subtotal)}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-success-600">
            <span>Discount</span>
            <span className="font-medium">-{formatPrice(discount)}</span>
          </div>
        )}
        <div className="flex justify-between">
          <span className="text-neutral-600">Delivery</span>
          {deliveryCharge === 0 ? (
            <span className="font-medium text-success-600">FREE</span>
          ) : (
            <span className="font-medium text-neutral-800">{formatPrice(deliveryCharge)}</span>
          )}
        </div>
        <div className="border-t border-neutral-200 pt-3">
          <div className="flex justify-between">
            <span className="text-base font-semibold text-neutral-900">Total</span>
            <span className="font-mono text-lg font-bold text-neutral-900">{formatPrice(total)}</span>
          </div>
        </div>
      </div>

      {savings > 0 && (
        <div className="mt-3 flex items-center gap-2 rounded-md bg-success-50 px-3 py-2 text-sm font-medium text-success-700">
          <Tag className="h-4 w-4" />
          You&apos;re saving {formatPrice(savings)} on this order!
        </div>
      )}

      <Link
        href="/checkout"
        className="mt-4 flex w-full items-center justify-center rounded-lg bg-primary-500 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-600"
      >
        Proceed to Checkout
      </Link>

      {/* Trust markers */}
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs text-neutral-500">
          <ShieldCheck className="h-3.5 w-3.5 text-success-500" />
          Safe and Secure Payments
        </div>
        <div className="flex items-center gap-2 text-xs text-neutral-500">
          <Truck className="h-3.5 w-3.5 text-primary-500" />
          Free delivery on orders over ₹999
        </div>
      </div>
    </div>
  );
}
