'use client';

import { useCartStore } from '@/store/cart';
import { useCallback } from 'react';

export function useCart() {
  const {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getItemCount,
    getSubtotal,
    getTotal,
  } = useCartStore();

  const itemCount = getItemCount();
  const subtotal = getSubtotal();
  const total = getTotal();
  const deliveryCharge = subtotal > 999 ? 0 : 49;
  const discount = 0;

  const handleAddToCart = useCallback(
    (product: {
      productId: string;
      productVariantId: string;
      productName: string;
      productImage: string;
      brand: string;
      slug: string;
      size?: string;
      color?: string;
      price: number;
      mrp: number;
      stockQty: number;
    }) => {
      addItem({
        id: `${product.productId}-${product.productVariantId}`,
        productId: product.productId,
        productVariantId: product.productVariantId,
        productName: product.productName,
        productImage: product.productImage,
        brand: product.brand,
        slug: product.slug,
        size: product.size,
        color: product.color,
        price: product.price,
        mrp: product.mrp,
        quantity: 1,
        stockQty: product.stockQty,
        isAvailable: true,
      });
    },
    [addItem],
  );

  return {
    items,
    itemCount,
    subtotal,
    total,
    deliveryCharge,
    discount,
    addItem: handleAddToCart,
    removeItem,
    updateQuantity,
    clearCart,
    isEmpty: items.length === 0,
  };
}
