import { z } from 'zod';
import type { ProductStatus } from './enums';

// ── Product Types ──────────────────────────────────────────────────────

export interface Product {
  id: string;
  vendorId: string;
  categoryId: string;
  name: string;
  slug: string;
  brand: string;
  sku: string;
  description: string;
  shortDescription: string;
  highlights: string[];
  tags: string[];
  status: ProductStatus;
  rating: number;
  reviewCount: number;
  manufacturingDetails: ManufacturingDetails;
  variants: ProductVariant[];
  images: ProductImage[];
  category?: Category;
  vendor?: { id: string; businessName: string; rating: number };
  isFulfilledByNexmart: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductVariant {
  id: string;
  productId: string;
  size?: string;
  color?: string;
  colorHex?: string;
  material?: string;
  price: number;
  mrp: number;
  stockQty: number;
  sku: string;
}

export interface ProductImage {
  id: string;
  productId: string;
  url: string;
  alt: string;
  isPrimary: boolean;
  displayOrder: number;
}

export interface ManufacturingDetails {
  countryOfOrigin: string;
  material?: string;
  weight?: string;
  dimensions?: string;
  manufacturer?: string;
}

export interface Category {
  id: string;
  parentId?: string;
  name: string;
  slug: string;
  imageUrl?: string;
  icon?: string;
  productCount?: number;
  children?: Category[];
}

// ── Computed Types ────────────────────────────────────────────────────

export interface ProductCard {
  id: string;
  name: string;
  slug: string;
  brand: string;
  primaryImage: string;
  price: number;
  mrp: number;
  discountPercent: number;
  rating: number;
  reviewCount: number;
  freeDelivery: boolean;
  isFulfilledByNexmart: boolean;
  badges: ProductBadge[];
  inStock: boolean;
}

export interface ProductBadge {
  text: string;
  type: 'sale' | 'new' | 'bestseller' | 'choice';
}

// ── Zod Schemas ───────────────────────────────────────────────────────

export const createProductSchema = z.object({
  name: z.string().min(3).max(200),
  brand: z.string().min(1).max(100),
  categoryId: z.string().uuid(),
  description: z.string().min(50),
  shortDescription: z.string().min(10).max(300),
  highlights: z.array(z.string()).min(3).max(10),
  tags: z.array(z.string()).min(1).max(20),
  isFulfilledByNexmart: z.boolean().default(false),
  manufacturingDetails: z.object({
    countryOfOrigin: z.string().min(1),
    material: z.string().optional(),
    weight: z.string().optional(),
    dimensions: z.string().optional(),
    manufacturer: z.string().optional(),
  }),
  variants: z
    .array(
      z.object({
        size: z.string().optional(),
        color: z.string().optional(),
        colorHex: z.string().optional(),
        material: z.string().optional(),
        price: z.number().positive(),
        mrp: z.number().positive(),
        stockQty: z.number().int().min(0),
        sku: z.string().min(1),
      }),
    )
    .min(1),
  images: z
    .array(
      z.object({
        url: z.string().url(),
        alt: z.string().min(1),
        isPrimary: z.boolean().default(false),
        displayOrder: z.number().int().min(0),
      }),
    )
    .min(1),
});

export const productFilterSchema = z.object({
  category: z.string().optional(),
  brand: z.string().optional(),
  minPrice: z.coerce.number().min(0).optional(),
  maxPrice: z.coerce.number().min(0).optional(),
  rating: z.coerce.number().min(0).max(5).optional(),
  color: z.string().optional(),
  size: z.string().optional(),
  inStock: z.coerce.boolean().optional(),
  sort: z
    .enum(['relevance', 'price_asc', 'price_desc', 'newest', 'rating', 'popularity'])
    .default('relevance'),
  q: z.string().optional(),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(24),
});

export type CreateProductInput = z.infer<typeof createProductSchema>;
export type ProductFilterInput = z.infer<typeof productFilterSchema>;
