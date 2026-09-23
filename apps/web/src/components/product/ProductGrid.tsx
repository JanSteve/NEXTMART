'use client';

import ProductCard from './ProductCard';
import { cn } from '@/lib/utils';
import type { MockProduct } from '@/lib/constants';

interface ProductGridProps {
  products?: MockProduct[];
  children?: React.ReactNode;
  columns?: 2 | 3 | 4 | 5;
  className?: string;
}

export function ProductGrid({ products, children, columns = 4, className }: ProductGridProps) {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 sm:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
    5: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5',
  };

  return (
    <div className={cn('grid gap-3 md:gap-4', gridCols[columns], className)}>
      {children
        ? children
        : products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </div>
  );
}

export default ProductGrid;