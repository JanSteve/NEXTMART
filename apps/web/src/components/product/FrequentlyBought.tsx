'use client';

import { Plus, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from '@/lib/utils';
import type { MockProduct } from '@/lib/constants';

interface FrequentlyBoughtProps {
  products: MockProduct[];
}

export function FrequentlyBought({ products }: FrequentlyBoughtProps) {
  if (products.length === 0) return null;

  const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
  const totalMrp = products.reduce((sum, p) => sum + p.mrp, 0);

  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-5">
      <h3 className="font-display text-base font-semibold text-neutral-900">
        Frequently Bought Together
      </h3>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        {products.map((product, index) => (
          <div key={product.id} className="flex items-center gap-3">
            <Link
              href={`/products/${product.slug}`}
              className="flex flex-col items-center gap-2 rounded-lg border border-neutral-100 p-3 transition-colors hover:border-primary-200 hover:bg-primary-50/30"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={80}
                height={80}
                className="rounded-md object-cover"
              />
              <p className="max-w-[100px] text-center text-xs text-neutral-600 line-clamp-2">
                {product.name}
              </p>
              <span className="font-mono text-sm font-bold text-neutral-900">
                {formatPrice(product.price)}
              </span>
            </Link>
            {index < products.length - 1 && (
              <Plus className="h-5 w-5 shrink-0 text-neutral-400" />
            )}
          </div>
        ))}
      </div>

      {/* Total + add all */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-100 pt-4">
        <div>
          <p className="text-sm text-neutral-500">Total Price</p>
          <p className="flex items-baseline gap-2">
            <span className="font-mono text-lg font-bold text-neutral-900">
              {formatPrice(totalPrice)}
            </span>
            {totalMrp > totalPrice && (
              <span className="price-strike text-sm text-neutral-400">
                {formatPrice(totalMrp)}
              </span>
            )}
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600">
          <ShoppingCart className="h-4 w-4" />
          Add All to Cart
        </button>
      </div>
    </div>
  );
}
