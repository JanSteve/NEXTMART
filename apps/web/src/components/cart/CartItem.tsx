'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, X, Bookmark } from 'lucide-react';
import { formatPrice, calcDiscount } from '@/lib/utils';
import type { CartItem as CartItemType } from '@/store/cart';

interface CartItemProps {
  item: CartItemType;
  onUpdateQty: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
}

export function CartItem({ item, onUpdateQty, onRemove }: CartItemProps) {
  const displayName = item.productName || item.name || 'Product';
  const displayImage = item.productImage || item.imageUrl || 'https://picsum.photos/400/400';
  const displayMRP = item.mrp || item.price;
  const maxStock = item.stockQty ?? 99;
  const discount = calcDiscount(item.price, displayMRP);

  return (
    <div className="flex gap-4 border-b border-neutral-100 py-4 last:border-0">
      {/* Image */}
      <Link href={`/products/${item.slug || item.productId}`} className="shrink-0">
        <div className="h-20 w-20 overflow-hidden rounded-md border border-neutral-100 sm:h-24 sm:w-24">
          <Image
            src={displayImage}
            alt={displayName}
            width={96}
            height={96}
            className="h-full w-full object-cover"
          />
        </div>
      </Link>

      {/* Info */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            {item.brand && (
              <p className="text-xs font-medium uppercase text-neutral-400">{item.brand}</p>
            )}
            <Link
              href={`/products/${item.slug || item.productId}`}
              className="mt-0.5 text-sm font-medium text-neutral-800 line-clamp-2 hover:text-primary-600"
            >
              {displayName}
            </Link>
            {(item.size || item.color) && (
              <p className="mt-1 text-xs text-neutral-500">
                {item.size && <span>Size: {item.size}</span>}
                {item.size && item.color && <span> · </span>}
                {item.color && <span>Color: {item.color}</span>}
              </p>
            )}
          </div>
          {/* Remove */}
          <button
            onClick={() => onRemove(item.id)}
            className="shrink-0 rounded-full p-1 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
            aria-label="Remove item"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Price + Qty */}
        <div className="mt-auto flex items-end justify-between pt-2">
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-base font-bold text-neutral-900">
              {formatPrice(item.price * item.quantity)}
            </span>
            {discount > 0 && (
              <span className="price-strike text-xs text-neutral-400">
                {formatPrice(displayMRP * item.quantity)}
              </span>
            )}
          </div>

          {/* Quantity controls */}
          <div className="flex items-center gap-0">
            <button
              onClick={() => onUpdateQty(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
              className="flex h-8 w-8 items-center justify-center rounded-l-md border border-neutral-200 text-neutral-600 transition-colors hover:bg-neutral-50 disabled:cursor-not-allowed disabled:text-neutral-300"
              aria-label="Decrease quantity"
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span className="flex h-8 w-10 items-center justify-center border-y border-neutral-200 text-sm font-semibold text-neutral-800">
              {item.quantity}
            </span>
            <button
              onClick={() => onUpdateQty(item.id, item.quantity + 1)}
              disabled={item.quantity >= maxStock}
              className="flex h-8 w-8 items-center justify-center rounded-r-md border border-neutral-200 text-neutral-600 transition-colors hover:bg-neutral-50 disabled:cursor-not-allowed disabled:text-neutral-300"
              aria-label="Increase quantity"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Save for later */}
        <button className="mt-2 flex items-center gap-1 text-xs font-medium text-primary-600 transition-colors hover:text-primary-700">
          <Bookmark className="h-3 w-3" /> Save for Later
        </button>
      </div>
    </div>
  );
}

export default CartItem;
