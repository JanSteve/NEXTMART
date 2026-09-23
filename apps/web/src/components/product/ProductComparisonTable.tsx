'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, Check, ShieldCheck, Truck, ShoppingCart } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import type { MockProduct } from '@/lib/products-catalog';
import useCartStore from '@/store/cart';
import { toast } from '@/components/ui/Toast';

interface ProductComparisonTableProps {
  currentProduct: MockProduct;
  similarProducts: MockProduct[];
}

export function ProductComparisonTable({
  currentProduct,
  similarProducts,
}: ProductComparisonTableProps) {
  const addItem = useCartStore((s) => s.addItem);
  const allItems = [currentProduct, ...similarProducts.slice(0, 3)];

  const handleAdd = (item: MockProduct) => {
    addItem({
      productId: item.id,
      productName: item.name,
      productImage: item.image,
      brand: item.brand,
      price: item.price,
      mrp: item.mrp,
      slug: item.slug,
      quantity: 1,
      stockQty: 50,
      isAvailable: true,
    });
    toast({
      type: 'success',
      title: 'Added to Cart',
      message: `${item.name} is now in your cart.`,
    });
  };

  return (
    <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-card md:p-8">
      <div className="mb-6">
        <h2 className="font-display text-xl font-bold text-neutral-900 md:text-2xl">
          Compare with Similar Items
        </h2>
        <p className="mt-1 text-xs text-neutral-500">
          Side-by-side specification and pricing comparison
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[650px] border-collapse text-left text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-neutral-200">
              <th className="w-1/4 pb-4 font-bold text-neutral-400">Product</th>
              {allItems.map((item, idx) => (
                <th key={item.id} className="w-1/4 pb-4 px-3 align-top">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-2 h-28 w-28 overflow-hidden rounded-xl bg-neutral-100 border border-neutral-200">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                      {idx === 0 && (
                        <span className="absolute bottom-1 left-1 right-1 rounded bg-primary-600 px-1 py-0.5 text-[9px] font-black uppercase text-white">
                          Current Item
                        </span>
                      )}
                    </div>
                    <Link
                      href={`/products/${item.slug}`}
                      className="font-display text-xs font-bold text-neutral-900 line-clamp-2 hover:text-primary-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 text-neutral-700">
            {/* Customer Rating */}
            <tr>
              <td className="py-3 font-bold text-neutral-500">Customer Rating</td>
              {allItems.map((item) => (
                <td key={item.id} className="py-3 px-3 text-center">
                  <div className="inline-flex items-center gap-1 rounded bg-amber-50 px-2 py-1 text-xs font-bold text-amber-700 border border-amber-200/60">
                    <span>{item.rating}</span>
                    <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                    <span className="text-[10px] text-neutral-400">
                      ({item.reviewCount})
                    </span>
                  </div>
                </td>
              ))}
            </tr>

            {/* Price */}
            <tr>
              <td className="py-3 font-bold text-neutral-500">Price</td>
              {allItems.map((item) => (
                <td key={item.id} className="py-3 px-3 text-center">
                  <p className="font-mono text-base font-black text-neutral-900">
                    {formatPrice(item.price)}
                  </p>
                  {item.mrp > item.price && (
                    <p className="font-mono text-xs text-neutral-400 line-through">
                      {formatPrice(item.mrp)}
                    </p>
                  )}
                </td>
              ))}
            </tr>

            {/* Brand */}
            <tr>
              <td className="py-3 font-bold text-neutral-500">Brand</td>
              {allItems.map((item) => (
                <td key={item.id} className="py-3 px-3 text-center font-bold text-neutral-800">
                  {item.brand}
                </td>
              ))}
            </tr>

            {/* Vadodara Fast Delivery */}
            <tr>
              <td className="py-3 font-bold text-neutral-500">Vadodara Delivery</td>
              {allItems.map((item) => (
                <td key={item.id} className="py-3 px-3 text-center text-xs text-emerald-700 font-semibold">
                  <div className="flex items-center justify-center gap-1">
                    <Truck className="h-3.5 w-3.5 text-emerald-600" />
                    <span>{item.fastDeliveryTime || '2 Business Days'}</span>
                  </div>
                </td>
              ))}
            </tr>

            {/* Warranty & Guarantee */}
            <tr>
              <td className="py-3 font-bold text-neutral-500">Warranty</td>
              {allItems.map((item) => (
                <td key={item.id} className="py-3 px-3 text-center text-xs text-neutral-600">
                  <div className="flex items-center justify-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-primary-500" />
                    <span>{item.specs?.['Warranty'] || '1 Year Brand Warranty'}</span>
                  </div>
                </td>
              ))}
            </tr>

            {/* Add to Cart Action */}
            <tr>
              <td className="py-4 font-bold text-neutral-500">Action</td>
              {allItems.map((item) => (
                <td key={item.id} className="py-4 px-3 text-center">
                  <button
                    type="button"
                    onClick={() => handleAdd(item)}
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-primary-50 px-3 py-2 text-xs font-bold text-primary-700 hover:bg-primary-600 hover:text-white transition-all shadow-sm active:scale-95"
                  >
                    <ShoppingCart className="h-3.5 w-3.5" />
                    <span>Add to Cart</span>
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
