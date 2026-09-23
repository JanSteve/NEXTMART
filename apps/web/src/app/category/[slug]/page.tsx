'use client';

import { MOCK_PRODUCTS, CATEGORIES } from '@/lib/constants';
import ProductCard from '@/components/product/ProductCard';
import { notFound } from 'next/navigation';

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = CATEGORIES.find((c) => c.slug === params.slug);
  if (!category) return notFound();

  const results = MOCK_PRODUCTS.filter(
    (p) =>
      p.category.toLowerCase() === category.name.toLowerCase() ||
      p.category.toLowerCase() === category.slug.toLowerCase(),
  );

  const displayProducts = results.length > 0 ? results : MOCK_PRODUCTS.slice(0, 8);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 rounded-xl bg-primary-50 p-8 text-center">
        <div className="mb-4 text-4xl">{category.icon || category.emoji}</div>
        <h1 className="mb-2 font-display text-3xl font-bold">{category.name}</h1>
        <p className="text-neutral-600">{displayProducts.length} products available</p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}