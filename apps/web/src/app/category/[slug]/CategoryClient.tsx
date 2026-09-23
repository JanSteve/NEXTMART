'use client';

import { useState } from 'react';
import { ALL_PRODUCTS, AMAZON_DEPARTMENTS } from '@/lib/products-catalog';
import { CATEGORIES } from '@/lib/constants';
import ProductCard from '@/components/product/ProductCard';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ChevronDown, PackageOpen } from 'lucide-react';

export default function CategoryClient({ slug }: { slug: string }) {
  const cleanSlug = slug.toLowerCase();

  // Find department from AMAZON_DEPARTMENTS or CATEGORIES
  const dept = AMAZON_DEPARTMENTS.find(
    (d) => d.slug.toLowerCase() === cleanSlug || d.id.toLowerCase() === cleanSlug
  );
  const cat = CATEGORIES.find(
    (c) => c.slug.toLowerCase() === cleanSlug || c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === cleanSlug
  );

  if (!dept && !cat && cleanSlug !== 'deals') {
    return notFound();
  }

  const categoryName = dept?.name || cat?.name || (cleanSlug === 'deals' ? 'Deals & Savings' : slug);
  const categoryEmoji = dept?.emoji || cat?.emoji || (cleanSlug === 'deals' ? '⚡' : '🛍️');
  const categoryImage = dept?.bannerImage || cat?.image;

  const [sortBy, setSortBy] = useState('relevance');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  // Filter category products from ALL_PRODUCTS (1,000+ catalog)
  const allCategoryProducts = ALL_PRODUCTS.filter((p) => {
    if (cleanSlug === 'deals') {
      return p.price < p.mrp * 0.8 || p.badges.some((b) => b.type === 'sale' || b.type === 'bestseller');
    }

    const matchesDeptId =
      p.department?.toLowerCase() === cleanSlug ||
      (dept && p.department?.toLowerCase() === dept.id.toLowerCase());
    const matchesDeptName = dept && p.category.toLowerCase() === dept.name.toLowerCase();
    const matchesCatName = cat && p.category.toLowerCase() === cat.name.toLowerCase();
    const matchesSlug = p.category.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(cleanSlug);

    return matchesDeptId || matchesDeptName || matchesCatName || matchesSlug;
  });

  // Extract unique subcategories from the matched products
  const subcategories = Array.from(
    new Set(allCategoryProducts.map((p) => p.subcategory).filter(Boolean))
  );

  // Apply subcategory and sort filters
  const filteredProducts = allCategoryProducts
    .filter((p) => {
      if (selectedSubcategory && p.subcategory !== selectedSubcategory) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price_asc') return a.price - b.price;
      if (sortBy === 'price_desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'discount') return (b.mrp - b.price) / b.mrp - (a.mrp - a.price) / a.mrp;
      return 0;
    });

  return (
    <div className="min-h-screen bg-neutral-50 pb-16">
      {/* Category Hero Banner */}
      <div className="relative overflow-hidden bg-neutral-900 py-12 text-white sm:py-16">
        {categoryImage && (
          <Image
            src={categoryImage}
            alt={categoryName}
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
              { label: 'Departments', href: '/products' },
              { label: categoryName, href: '#' },
            ]}
          />
          <div className="mt-4 flex items-center gap-3">
            <span className="text-4xl">{categoryEmoji}</span>
            <div>
              <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                {categoryName}
              </h1>
              <p className="mt-1 text-sm text-neutral-300">
                Discover {allCategoryProducts.length} authentic, verified products with express dispatch in Vadodara
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
              All {categoryName.split(' ')[0]} ({allCategoryProducts.length})
            </button>
            {subcategories.map((sub) => {
              const subCount = allCategoryProducts.filter((p) => p.subcategory === sub).length;
              return (
                <button
                  key={sub}
                  onClick={() => setSelectedSubcategory(sub)}
                  className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                    selectedSubcategory === sub
                      ? 'bg-primary-500 text-white shadow-sm'
                      : 'border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  {sub} ({subCount})
                </button>
              );
            })}
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
                <option value="discount">Biggest Savings (% Off)</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-neutral-400" />
            </div>
          </div>
        </div>

        {/* Product Grid or Empty State */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-5 lg:grid-cols-4 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-neutral-200 bg-white p-12 text-center">
            <PackageOpen className="mx-auto h-12 w-12 text-neutral-400" />
            <h3 className="mt-3 font-display text-lg font-bold text-neutral-800">
              No products found in this subcategory
            </h3>
            <p className="mt-1 text-sm text-neutral-500">
              Try selecting &quot;All {categoryName.split(' ')[0]}&quot; to view all items.
            </p>
            <button
              onClick={() => setSelectedSubcategory(null)}
              className="mt-4 rounded-xl bg-primary-500 px-5 py-2 text-xs font-bold text-white hover:bg-primary-600"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
