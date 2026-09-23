"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star, Check } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useCartStore from '@/store/cart';
import { formatPrice } from '@/lib/utils';

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
}

export default function ProductCard({ product }: { product: Product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const addItem = useCartStore(state => state.addItem);

  const discountPercent = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAdding(true);
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      imageUrl: product.image
    });
    setTimeout(() => setIsAdding(false), 1500);
  };

  return (
    <Link href={`/products/${product.slug}`} className="group block bg-white rounded-lg shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-300 relative border border-neutral-100">
      <div className="relative aspect-square overflow-hidden bg-neutral-100 p-4">
        <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" />
        {discountPercent > 0 && (
          <div className="absolute top-2 left-2 bg-error-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm z-10">
            {discountPercent}% OFF
          </div>
        )}
        <button 
          onClick={(e) => { e.preventDefault(); setIsWishlisted(!isWishlisted); }}
          className="absolute top-2 right-2 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm z-10 text-neutral-400 hover:text-error-500 transition-colors"
        >
          <motion.div whileTap={{ scale: 1.2 }}>
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-error-500 text-error-500' : ''}`} />
          </motion.div>
        </button>
      </div>
      
      <div className="p-4 bg-white">
        {product.brand && <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1 font-medium">{product.brand}</p>}
        <h3 className="font-display font-medium text-neutral-900 line-clamp-2 text-sm mb-2 leading-tight min-h-[40px]">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-1.5 mb-3">
          <div className="bg-success-500 text-white flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold gap-0.5 shadow-sm">
            {product.rating} <Star className="w-2.5 h-2.5 fill-current" />
          </div>
          <span className="text-xs text-neutral-400 font-medium">({product.reviewCount})</span>
        </div>
        
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-lg font-bold font-mono text-neutral-900">{formatPrice(product.price)}</span>
          {product.mrp > product.price && (
            <span className="text-xs text-neutral-400 line-through font-mono">{formatPrice(product.mrp)}</span>
          )}
        </div>
        
        <button 
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`w-full py-2 rounded-md text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm ${
            isAdding ? 'bg-success-500 text-white' : 'bg-primary-50 text-primary-600 hover:bg-primary-500 hover:text-white'
          }`}
        >
          <AnimatePresence mode="wait">
            {isAdding ? (
              <motion.div key="check" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="flex items-center gap-1">
                <Check className="w-4 h-4" /> Added
              </motion.div>
            ) : (
              <motion.div key="add" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
                Add to Cart
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </Link>
  );
}