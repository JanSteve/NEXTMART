'use client';

import { formatPrice, calcDiscount } from '@/lib/utils';

interface PriceDisplayProps {
  price: number;
  mrp: number;
  size?: 'sm' | 'md' | 'lg';
}

const sizeStyles = {
  sm: { price: 'text-base', mrp: 'text-xs', discount: 'text-[11px] px-1.5 py-0.5' },
  md: { price: 'text-xl', mrp: 'text-sm', discount: 'text-xs px-2 py-0.5' },
  lg: { price: 'text-3xl', mrp: 'text-base', discount: 'text-sm px-2.5 py-1' },
};

export function PriceDisplay({ price, mrp, size = 'md' }: PriceDisplayProps) {
  const discount = calcDiscount(price, mrp);
  const styles = sizeStyles[size];

  return (
    <div className="flex flex-wrap items-baseline gap-2">
      <span className={`font-mono font-bold text-neutral-900 ${styles.price}`}>
        {formatPrice(price)}
      </span>
      {discount > 0 && (
        <>
          <span className={`price-strike text-neutral-400 ${styles.mrp}`}>
            {formatPrice(mrp)}
          </span>
          <span className={`rounded-md bg-success-50 font-semibold text-success-700 ${styles.discount}`}>
            {discount}% off
          </span>
        </>
      )}
    </div>
  );
}
