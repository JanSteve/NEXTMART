'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, Clock, TrendingUp, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useDebounce } from '@/hooks/useDebounce';
import { MOCK_PRODUCTS } from '@/lib/constants';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const debouncedQuery = useDebounce(query, 300);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const recentSearches = ['iPhone 15', 'Nike shoes', 'laptop bag', 'headphones'];
  const trendingSearches = ['Samsung S24', 'Air Jordan', 'PS5', 'MacBook Air'];

  const suggestions = debouncedQuery.length >= 2
    ? MOCK_PRODUCTS
        .filter((p) =>
          p.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
          p.brand.toLowerCase().includes(debouncedQuery.toLowerCase()),
        )
        .slice(0, 6)
    : [];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (searchQuery?: string) => {
    const q = searchQuery || query;
    if (q.trim()) {
      router.push(`/search?q=${encodeURIComponent(q.trim())}`);
      setIsOpen(false);
      setQuery('');
    }
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-[560px]">
      <div className="flex items-center rounded-full border border-neutral-300 bg-white transition-all focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-500/20">
        <Search className="ml-4 h-4 w-4 shrink-0 text-neutral-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="Search for products, brands, and more..."
          className="w-full bg-transparent px-3 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none"
          aria-label="Search products"
        />
        {query && (
          <button
            onClick={() => { setQuery(''); inputRef.current?.focus(); }}
            className="mr-1 rounded-full p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
        <button
          onClick={() => handleSearch()}
          className="mr-1 rounded-full bg-primary-500 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600"
          aria-label="Search"
        >
          Search
        </button>
      </div>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1 rounded-xl border border-neutral-200 bg-white shadow-lg">
          {suggestions.length > 0 ? (
            <div className="p-2">
              <p className="px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-neutral-400">
                Products
              </p>
              {suggestions.map((product) => (
                <button
                  key={product.id}
                  onClick={() => {
                    router.push(`/products/${product.slug}`);
                    setIsOpen(false);
                    setQuery('');
                  }}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors hover:bg-neutral-50"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-10 w-10 rounded-md object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-neutral-900">{product.name}</p>
                    <p className="text-xs text-neutral-500">{product.brand} · {product.category}</p>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-2">
              {recentSearches.length > 0 && (
                <>
                  <p className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-neutral-400">
                    <Clock className="h-3 w-3" /> Recent
                  </p>
                  {recentSearches.map((term) => (
                    <button
                      key={term}
                      onClick={() => handleSearch(term)}
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-neutral-700 transition-colors hover:bg-neutral-50"
                    >
                      <Clock className="h-3.5 w-3.5 text-neutral-400" />
                      {term}
                    </button>
                  ))}
                </>
              )}
              <div className="my-1 border-t border-neutral-100" />
              <p className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-neutral-400">
                <TrendingUp className="h-3 w-3" /> Trending
              </p>
              {trendingSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => handleSearch(term)}
                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-neutral-700 transition-colors hover:bg-neutral-50"
                >
                  <TrendingUp className="h-3.5 w-3.5 text-amber-500" />
                  {term}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
