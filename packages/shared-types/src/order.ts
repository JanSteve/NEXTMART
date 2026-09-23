import { z } from 'zod';
import type { OrderStatus, PaymentStatus, PaymentMethod, ShipmentStatus } from './enums';

// ── Order Types ────────────────────────────────────────────────────────

export interface Order {
  id: string;
  orderNumber: string;
  userId: string;
  addressId: string;
  status: OrderStatus;
  totalAmount: number;
  subtotal: number;
  discount: number;
  deliveryCharge: number;
  couponCode?: string;
  paymentStatus: PaymentStatus;
  paymentMethod: PaymentMethod;
  items: OrderItem[];
  address?: {
    fullName: string;
    phone: string;
    street: string;
    city: string;
    state: string;
    pincode: string;
  };
  shipments?: Shipment[];
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  productVariantId: string;
  vendorId: string;
  productName: string;
  productImage: string;
  variantDetails: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  status: OrderStatus;
}

export interface Shipment {
  id: string;
  orderId: string;
  awb: string;
  courier: string;
  status: ShipmentStatus;
  trackingUrl?: string;
  estimatedDelivery: string;
  events: ShipmentEvent[];
}

export interface ShipmentEvent {
  status: string;
  location: string;
  timestamp: string;
  description: string;
}

export interface OrderTimeline {
  status: OrderStatus;
  timestamp: string;
  description: string;
  isCompleted: boolean;
  isCurrent: boolean;
}

// ── Coupon Types ──────────────────────────────────────────────────────

export interface Coupon {
  id: string;
  code: string;
  type: 'PERCENTAGE' | 'FIXED' | 'FREE_DELIVERY';
  value: number;
  minOrderAmount: number;
  maxDiscount?: number;
  usageLimit: number;
  usedCount: number;
  validFrom: string;
  validUntil: string;
  isActive: boolean;
}

// ── Zod Schemas ───────────────────────────────────────────────────────

export const checkoutSchema = z.object({
  addressId: z.string().uuid(),
  paymentMethod: z.enum(['UPI', 'CREDIT_CARD', 'DEBIT_CARD', 'NET_BANKING', 'WALLET', 'COD', 'EMI']),
  couponCode: z.string().optional(),
  useWallet: z.boolean().default(false),
  walletAmount: z.number().min(0).default(0),
});

export const cancelOrderSchema = z.object({
  reason: z.string().min(5, 'Please provide a reason').max(500),
});

export const returnRequestSchema = z.object({
  reason: z.string().min(5).max(500),
  type: z.enum(['RETURN', 'REPLACE']),
  itemIds: z.array(z.string().uuid()).min(1),
  images: z.array(z.string().url()).max(3).optional(),
});

export type CheckoutInput = z.infer<typeof checkoutSchema>;
export type CancelOrderInput = z.infer<typeof cancelOrderSchema>;
export type ReturnRequestInput = z.infer<typeof returnRequestSchema>;
