"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star, Check, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useCartStore from '@/store/cart';
import { formatPrice } from '@/lib/utils';
import { toast } from '@/components/ui/Toast';

interface Product {
  id: string;
  name: string;
  price: number;
  mrp: number;
  rating: number;
  reviewCount: number;
  image: string;
  slug: string;
  brand?: string;
  category?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const discountPercent =
    product.mrp > product.price
      ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
      : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addItem({
      productId: product.id,
      name: product.name,
      productName: product.name,
      price: product.price,
      mrp: product.mrp,
      quantity: 1,
      imageUrl: product.image,
      productImage: product.image,
      brand: product.brand,
      slug: product.slug,
    });
    toast({
      type: 'success',
      title: 'Added to Cart',
      message: `${product.name} is now in your cart.`,
    });
    setTimeout(() => setIsAdding(false), 1500);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    toast({
      type: 'info',
      title: !isWishlisted ? 'Saved to Wishlist' : 'Removed from Wishlist',
      message: product.name,
    });
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-white p-3 sm:p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-xl">
      <Link href={`/products/${product.slug}`} className="block">
        {/* Product Image Container */}
        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-neutral-100 mb-3">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Discount Badge */}
          {discountPercent > 0 && (
            <div className="absolute top-2 left-2 z-10 rounded-md bg-rose-600 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-white shadow">
              {discountPercent}% OFF
            </div>
          )}

          {/* Wishlist Button */}
          <button
            type="button"
            onClick={handleToggleWishlist}
            className="absolute top-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur-sm transition-all hover:bg-white hover:scale-110 active:scale-90"
            aria-label="Wishlist"
          >
            <Heart
              className={`h-4 w-4 transition-colors ${
                isWishlisted ? 'fill-rose-500 text-rose-500' : 'text-neutral-500 hover:text-rose-500'
              }`}
            />
          </button>
        </div>

        {/* Brand & Category Info */}
        <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-primary-600 mb-1">
          <span>{product.brand || 'NexMart'}</span>
          {product.category && <span className="text-neutral-400 font-medium normal-case text-[10px]">{product.category}</span>}
        </div>

        {/* Product Title */}
        <h3 className="font-display text-xs sm:text-sm font-bold text-neutral-900 line-clamp-2 min-h-[2.5rem] leading-snug group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>

        {/* Star Rating & Reviews */}
        <div className="mt-2 flex items-center gap-1.5">
          <div className="flex items-center gap-0.5 rounded-md bg-emerald-600 px-1.5 py-0.5 text-[10px] font-black text-white shadow-sm">
            <span>{product.rating}</span>
            <Star className="h-2.5 w-2.5 fill-current" />
          </div>
          <span className="text-[11px] font-semibold text-neutral-400">
            ({product.reviewCount?.toLocaleString('en-IN') || 0})
          </span>
        </div>

        {/* Pricing */}
        <div className="mt-3 flex items-baseline gap-2">
          <span className="font-mono text-base sm:text-lg font-black text-neutral-900">
            {formatPrice(product.price)}
          </span>
          {product.mrp > product.price && (
            <span className="font-mono text-xs text-neutral-400 line-through">
              {formatPrice(product.mrp)}
            </span>
          )}
        </div>
      </Link>

      {/* Add To Cart CTA */}
      <button
        type="button"
        onClick={handleAddToCart}
        disabled={isAdding}
        className={`mt-3.5 flex w-full items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-bold transition-all shadow-sm active:scale-95 ${
          isAdding
            ? 'bg-emerald-600 text-white'
            : 'bg-primary-50 text-primary-700 hover:bg-primary-600 hover:text-white'
        }`}
      >
        <AnimatePresence mode="wait">
          {isAdding ? (
            <motion.span
              key="added"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center gap-1"
            >
              <Check className="h-3.5 w-3.5" /> Added to Cart
            </motion.span>
          ) : (
            <motion.span
              key="add"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center gap-1.5"
            >
              <ShoppingBag className="h-3.5 w-3.5" /> Add to Cart
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}