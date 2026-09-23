'use client';

import { MOCK_PRODUCTS } from "@/lib/constants";
import ProductCard from "@/components/product/ProductCard";

export default function WishlistPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_PRODUCTS.slice(0, 3).map(product => (
          <ProductCard key={product.id} product={product as any} />
        ))}
      </div>
    </div>
  );
}