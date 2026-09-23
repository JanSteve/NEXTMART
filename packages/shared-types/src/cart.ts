import { z } from 'zod';

// ── Cart Types ─────────────────────────────────────────────────────────

export interface Cart {
  id: string;
  userId?: string;
  sessionId?: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  deliveryCharge: number;
  total: number;
  coupon?: AppliedCoupon;
  itemCount: number;
  updatedAt: string;
}

export interface CartItem {
  id: string;
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
  quantity: number;
  stockQty: number;
  isAvailable: boolean;
}

export interface AppliedCoupon {
  code: string;
  type: 'PERCENTAGE' | 'FIXED' | 'FREE_DELIVERY';
  value: number;
  discount: number;
}

export interface SavedItem {
  id: string;
  userId: string;
  productId: string;
  productVariantId: string;
  product: {
    name: string;
    image: string;
    price: number;
    mrp: number;
    inStock: boolean;
  };
  savedAt: string;
}

// ── Zod Schemas ───────────────────────────────────────────────────────

export const addToCartSchema = z.object({
  productId: z.string().uuid(),
  productVariantId: z.string().uuid(),
  quantity: z.number().int().min(1).max(10).default(1),
});

export const updateCartItemSchema = z.object({
  quantity: z.number().int().min(1).max(10),
});

export const applyCouponSchema = z.object({
  code: z.string().min(3).max(20).toUpperCase(),
});

export type AddToCartInput = z.infer<typeof addToCartSchema>;
export type UpdateCartItemInput = z.infer<typeof updateCartItemSchema>;
export type ApplyCouponInput = z.infer<typeof applyCouponSchema>;
