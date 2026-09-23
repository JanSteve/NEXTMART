'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { History, Star, ShoppingCart, ArrowRight } from 'lucide-react';
import { ALL_PRODUCTS, type MockProduct } from '@/lib/products-catalog';
import { formatPrice } from '@/lib/utils';
import useCartStore from '@/store/cart';
import { toast } from '@/components/ui/Toast';

const RECENTLY_VIEWED_KEY = 'nexmart_recently_viewed';

export function trackRecentlyViewed(slug: string) {
  if (typeof window === 'undefined') return;
  try {
    const stored = JSON.parse(localStorage.getItem(RECENTLY_VIEWED_KEY) || '[]');
    const filtered = stored.filter((s: string) => s !== slug);
    const updated = [slug, ...filtered].slice(0, 10);
    localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(updated));
  } catch (e) {
    // Ignore storage error
  }
}

interface RecentlyViewedProps {
  currentSlug?: string;
  title?: string;
}

export function RecentlyViewed({ currentSlug, title = 'Recently Viewed & Recommended For You' }: RecentlyViewedProps) {
  const [recentProducts, setRecentProducts] = useState<MockProduct[]>([]);
  const { addItem } = useCartStore();

  useEffect(() => {
    try {
      const stored: string[] = JSON.parse(localStorage.getItem(RECENTLY_VIEWED_KEY) || '[]');
      const filteredSlugs = stored.filter((s) => s !== currentSlug);
      
      let products: MockProduct[] = [];
      if (filteredSlugs.length > 0) {
        products = filteredSlugs
          .map((slug) => ALL_PRODUCTS.find((p) => p.slug === slug))
          .filter(Boolean) as MockProduct[];
      }
      
      // If fewer than 4 recent items, fill with flagship recommendations
      if (products.length < 4) {
        const fallback = ALL_PRODUCTS.filter((p) => p.slug !== currentSlug && !products.some((rp) => rp.id === p.id)).slice(0, 6 - products.length);
        products = [...products, ...fallback];
      }

      setRecentProducts(products.slice(0, 6));
    } catch (e) {
      setRecentProducts(ALL_PRODUCTS.slice(0, 6));
    }
  }, [currentSlug]);

  if (recentProducts.length === 0) return null;

  return (
    <section className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
            <History className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-neutral-900">{title}</h3>
            <p className="text-xs text-neutral-500">Based on your browsing activity in Vadodara</p>
          </div>
        </div>
        <Link
          href="/products"
          className="flex items-center gap-1 text-xs font-bold text-primary-600 hover:text-primary-700 hover:underline"
        >
          Explore All <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-6">
        {recentProducts.map((p) => (
          <div
            key={p.id}
            className="group flex flex-col justify-between rounded-2xl border border-neutral-100 bg-neutral-50/50 p-3 transition-all hover:border-primary-200 hover:bg-white hover:shadow-md"
          >
            <div>
              <Link href={`/products/${p.slug}`} className="block relative aspect-square overflow-hidden rounded-xl bg-white">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <div className="mt-2.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary-600">
                  {p.brand}
                </span>
                <Link
                  href={`/products/${p.slug}`}
                  className="mt-0.5 block font-display text-xs font-bold text-neutral-800 line-clamp-2 hover:text-primary-600"
                  title={p.name}
                >
                  {p.name}
                </Link>
                <div className="mt-1 flex items-center gap-1 text-[11px] font-bold text-amber-500">
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                  <span>{p.rating}</span>
                  <span className="text-neutral-400 text-[10px]">({p.reviewCount})</span>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-neutral-100 pt-2">
              <span className="font-mono text-xs sm:text-sm font-black text-neutral-900">
                {formatPrice(p.price)}
              </span>
              <button
                type="button"
                onClick={() => {
                  addItem({
                    productId: p.id,
                    name: p.name,
                    slug: p.slug,
                    price: p.price,
                    mrp: p.mrp,
                    imageUrl: p.image,
                    quantity: 1,
                  });
                  toast({
                    type: 'success',
                    title: 'Added to Cart',
                    message: `${p.name} was added to your cart.`,
                  });
                }}
                className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary-50 text-primary-600 hover:bg-primary-600 hover:text-white transition-colors"
                title="Add to Cart"
              >
                <ShoppingCart className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
