'use client';

import { useState } from 'react';
import { MOCK_PRODUCTS, CATEGORIES } from '@/lib/constants';
import ProductCard from '@/components/product/ProductCard';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = CATEGORIES.find(
    (c) =>
      c.slug.toLowerCase() === params.slug.toLowerCase() ||
      c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === params.slug.toLowerCase()
  );
  if (!category) return notFound();

  const [sortBy, setSortBy] = useState('relevance');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  // Filter category products
  const categoryProducts = MOCK_PRODUCTS.filter((p) => {
    const matchCategory =
      p.category.toLowerCase() === category.name.toLowerCase() ||
      p.category.toLowerCase().replace(/[^a-z0-9]+/g, '-') === category.slug.toLowerCase();
    if (!matchCategory) return false;
    if (selectedSubcategory && p.subcategory !== selectedSubcategory) return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === 'price_asc') return a.price - b.price;
    if (sortBy === 'price_desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  const subcategories = Array.from(
    new Set(
      MOCK_PRODUCTS.filter(
        (p) =>
          p.category.toLowerCase() === category.name.toLowerCase() ||
          p.category.toLowerCase().replace(/[^a-z0-9]+/g, '-') === category.slug.toLowerCase()
      ).map((p) => p.subcategory)
    )
  );

  const displayProducts =
    categoryProducts.length > 0
      ? categoryProducts
      : MOCK_PRODUCTS.slice(0, 6);

  return (
    <div className="min-h-screen bg-neutral-50 pb-16">
      {/* Category Hero Banner */}
      <div className="relative overflow-hidden bg-neutral-900 py-12 text-white sm:py-16">
        {category.image && (
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover opacity-25"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-900/80 to-transparent" />

        <div className="container relative z-10 mx-auto px-4 max-w-7xl">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Categories', href: '/products' },
              { label: category.name, href: '#' },
            ]}
          />
          <div className="mt-4 flex items-center gap-3">
            <span className="text-4xl">{category.emoji || category.icon}</span>
            <div>
              <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                {category.name} Collection
              </h1>
              <p className="mt-1 text-sm text-neutral-300">
                Discover {displayProducts.length} premium, authentic items from authorized stores
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-8">
        {/* Subcategories & Sort Bar */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-neutral-200 pb-4">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedSubcategory(null)}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                selectedSubcategory === null
                  ? 'bg-primary-500 text-white shadow-sm'
                  : 'border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              All {category.name}
            </button>
            {subcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubcategory(sub)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                  selectedSubcategory === sub
                    ? 'bg-primary-500 text-white shadow-sm'
                    : 'border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-neutral-500">Sort by:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none rounded-lg border border-neutral-200 bg-white py-1.5 pl-3 pr-8 text-xs font-bold text-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="relevance">Featured &amp; Popular</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="rating">Top Customer Ratings</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-neutral-400" />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-5 lg:grid-cols-4 xl:grid-cols-4">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}