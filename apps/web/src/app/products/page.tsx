'use client';

import { useState } from 'react';
import { MOCK_PRODUCTS } from '@/lib/constants';
import ProductCard from '@/components/product/ProductCard';
import FilterSidebar, { type FilterState } from '@/components/product/FilterSidebar';
import ProductGrid from '@/components/product/ProductGrid';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Filter, ChevronDown, X } from 'lucide-react';

export default function ProductsPage() {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    brands: [],
    priceRange: [0, 200000],
    colors: [],
    ratings: [],
  });
  const [sortBy, setSortBy] = useState('relevance');

  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
      return false;
    }
    if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
      return false;
    }
    if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
      return false;
    }
    if (filters.ratings.length > 0) {
      const minRating = Math.min(...filters.ratings);
      if (product.rating < minRating) return false;
    }
    return true;
  }).sort((a, b) => {
    if (sortBy === 'price_asc') return a.price - b.price;
    if (sortBy === 'price_desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'newest') return (b.reviewCount || 0) - (a.reviewCount || 0);
    return 0;
  });

  const clearFilters = () => {
    setFilters({
      categories: [],
      brands: [],
      priceRange: [0, 200000],
      colors: [],
      ratings: [],
    });
  };

  return (
    <div className="min-h-screen bg-neutral-50 pb-12">
      <div className="relative z-10 border-b border-neutral-200 bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'All Products', href: '/products' },
            ]}
          />
          <h1 className="mt-2 font-display text-3xl font-bold text-neutral-900">All Products</h1>
        </div>
      </div>

      <div className="container mx-auto flex flex-col gap-8 px-4 py-8 md:flex-row">
        {/* Desktop Sidebar */}
        <aside className="hidden w-[280px] shrink-0 md:block">
          <div className="sticky top-24 overflow-hidden rounded-lg border border-neutral-100 bg-white shadow-card">
            <div className="flex items-center justify-between border-b border-neutral-100 bg-neutral-50 p-4">
              <h2 className="flex items-center gap-2 font-display font-bold text-neutral-800">
                <Filter className="h-4 w-4" /> Filters
              </h2>
              <button
                onClick={clearFilters}
                className="text-xs font-semibold text-primary-600 hover:text-primary-700"
              >
                CLEAR ALL
              </button>
            </div>
            <FilterSidebar
              filters={filters}
              onFiltersChange={setFilters}
              onClear={clearFilters}
              productCount={filteredProducts.length}
            />
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Sort Bar */}
          <div className="mb-6 flex flex-col items-center justify-between gap-4 rounded-lg border border-neutral-100 bg-white p-3 shadow-card sm:flex-row">
            <span className="text-sm font-medium text-neutral-600">
              Showing <strong className="text-neutral-900">{filteredProducts.length}</strong> products
            </span>
            <div className="flex w-full items-center gap-2 sm:w-auto">
              <div className="relative flex-1 sm:flex-none">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full appearance-none rounded-md border border-neutral-200 bg-neutral-50 py-2 pl-4 pr-10 text-sm font-medium text-neutral-700 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="relevance">Sort by: Relevance</option>
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
              </div>
            </div>
          </div>

          {/* Active Filter Chips */}
          {(filters.categories.length > 0 || filters.brands.length > 0) && (
            <div className="mb-6 flex flex-wrap gap-2">
              {filters.categories.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-full bg-neutral-200 px-3 py-1 text-xs font-semibold text-neutral-800 shadow-sm"
                >
                  {c}{' '}
                  <button
                    onClick={() =>
                      setFilters({
                        ...filters,
                        categories: filters.categories.filter((x) => x !== c),
                      })
                    }
                    className="rounded-full p-0.5 transition-colors hover:bg-neutral-300"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
              {filters.brands.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 rounded-full bg-neutral-200 px-3 py-1 text-xs font-semibold text-neutral-800 shadow-sm"
                >
                  {b}{' '}
                  <button
                    onClick={() =>
                      setFilters({ ...filters, brands: filters.brands.filter((x) => x !== b) })
                    }
                    className="rounded-full p-0.5 transition-colors hover:bg-neutral-300"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          )}

          <ProductGrid>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductGrid>
        </div>
      </div>
    </div>
  );
}