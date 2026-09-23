'use client';

import { useState } from 'react';
import { Plus, ShoppingCart, Check, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from '@/lib/utils';
import type { MockProduct } from '@/lib/products-catalog';
import useCartStore from '@/store/cart';
import { toast } from '@/components/ui/Toast';
import { Button } from '@/components/ui/Button';

interface FrequentlyBoughtProps {
  mainProduct: MockProduct;
  similarProducts: MockProduct[];
}

export function FrequentlyBought({ mainProduct, similarProducts }: FrequentlyBoughtProps) {
  const bundleItems = [mainProduct, ...similarProducts.slice(0, 2)];
  const [selectedIds, setSelectedIds] = useState<string[]>(bundleItems.map((p) => p.id));
  const [added, setAdded] = useState(false);
  const { addItem } = useCartStore();

  const toggleItem = (id: string) => {
    // Keep at least main product or allow toggle
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const activeProducts = bundleItems.filter((p) => selectedIds.includes(p.id));
  const subtotal = activeProducts.reduce((sum, p) => sum + p.price, 0);
  const totalMrp = activeProducts.reduce((sum, p) => sum + (p.mrp || p.price + 500), 0);
  // 5% additional bundle discount if buying 2 or more items
  const bundleDiscount = activeProducts.length >= 2 ? Math.round(subtotal * 0.05) : 0;
  const finalPrice = Math.max(0, subtotal - bundleDiscount);
  const totalSavings = totalMrp - finalPrice;

  const handleAddBundle = () => {
    activeProducts.forEach((p) => {
      addItem({
        productId: p.id,
        name: p.name,
        slug: p.slug,
        price: p.price,
        mrp: p.mrp,
        imageUrl: p.image,
        quantity: 1,
      });
    });

    setAdded(true);
    toast({
      type: 'success',
      title: 'Bundle Added to Cart!',
      message: `${activeProducts.length} items added with ${formatPrice(bundleDiscount)} bundle savings!`,
    });
    setTimeout(() => setAdded(false), 2000);
  };

  if (bundleItems.length < 2) return null;

  return (
    <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-card md:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-neutral-100 pb-4">
        <div>
          <h3 className="font-display text-lg font-bold text-neutral-900">
            Frequently Bought Together
          </h3>
          <p className="text-xs text-neutral-500">
            Customers frequently buy these complementary items together with express Vadodara shipping
          </p>
        </div>
        {bundleDiscount > 0 && (
          <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
            <Sparkles className="h-3.5 w-3.5" />
            Extra 5% Bundle Discount Applied!
          </span>
        )}
      </div>

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
        {/* Product Cards Row */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 flex-1">
          {bundleItems.map((product, index) => {
            const isSelected = selectedIds.includes(product.id);
            const isMain = product.id === mainProduct.id;
            return (
              <div key={product.id} className="flex items-center gap-3">
                <div
                  className={`group relative flex flex-col justify-between rounded-2xl border-2 p-3.5 transition-all w-36 sm:w-44 ${
                    isSelected
                      ? 'border-primary-500 bg-primary-50/20 shadow-sm'
                      : 'border-neutral-200 bg-neutral-50 opacity-60'
                  }`}
                >
                  <label className="mb-2 flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleItem(product.id)}
                      className="h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-600">
                      {isMain ? 'This item' : `Item ${index + 1}`}
                    </span>
                  </label>

                  <Link
                    href={`/products/${product.slug}`}
                    className="relative aspect-square w-full overflow-hidden rounded-xl bg-white border border-neutral-100"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </Link>

                  <div className="mt-2">
                    <p className="text-[11px] font-bold text-neutral-800 line-clamp-2" title={product.name}>
                      {product.name}
                    </p>
                    <p className="mt-1 font-mono text-xs font-black text-neutral-900">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                </div>

                {index < bundleItems.length - 1 && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-500">
                    <Plus className="h-4 w-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Total & Action Box */}
        <div className="w-full shrink-0 rounded-2xl border border-neutral-200 bg-neutral-50/80 p-5 lg:w-72">
          <p className="text-xs font-semibold text-neutral-500">
            Total Price for ({activeProducts.length}) items:
          </p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-mono text-2xl font-black text-neutral-900">
              {formatPrice(finalPrice)}
            </span>
            {totalMrp > finalPrice && (
              <span className="font-mono text-xs text-neutral-400 line-through">
                {formatPrice(totalMrp)}
              </span>
            )}
          </div>

          {totalSavings > 0 && (
            <p className="mt-1 text-xs font-bold text-emerald-600">
              You Save: {formatPrice(totalSavings)} ({Math.round((totalSavings / totalMrp) * 100)}% off)
            </p>
          )}

          <div className="mt-4">
            <Button
              size="md"
              onClick={handleAddBundle}
              disabled={activeProducts.length === 0}
              className="w-full gap-2 font-bold shadow-md shadow-primary-500/20"
            >
              {added ? (
                <>
                  <Check className="h-4 w-4" /> Added {activeProducts.length} Items!
                </>
              ) : (
                <>
                  <ShoppingCart className="h-4 w-4" /> Add ({activeProducts.length}) to Cart
                </>
              )}
            </Button>
          </div>

          <p className="mt-3 text-center text-[10px] text-neutral-400">
            ✓ Free Shipping • 2-Day Delivery to Vadodara
          </p>
        </div>
      </div>
    </div>
  );
}
