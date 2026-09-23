import { z } from 'zod';
import type { KYCStatus } from './enums';

// ── Vendor Types ───────────────────────────────────────────────────────

export interface Vendor {
  id: string;
  userId: string;
  businessName: string;
  slug: string;
  gstin: string;
  pan: string;
  bankAccount: string;
  ifsc: string;
  kycStatus: KYCStatus;
  commissionPct: number;
  rating: number;
  totalProducts: number;
  totalOrders: number;
  isActive: boolean;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  email: string;
  logo?: string;
  createdAt: string;
  updatedAt: string;
}

export interface VendorDashboard {
  totalGMV: number;
  totalOrders: number;
  totalProducts: number;
  totalReturns: number;
  averageRating: number;
  pendingPayout: number;
  todayOrders: number;
  todayRevenue: number;
  recentOrders: Array<{
    id: string;
    orderNumber: string;
    amount: number;
    status: string;
    createdAt: string;
  }>;
  topProducts: Array<{
    id: string;
    name: string;
    sold: number;
    revenue: number;
  }>;
}

export interface VendorPayout {
  id: string;
  vendorId: string;
  amount: number;
  status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED';
  period: string;
  transactionRef?: string;
  paidAt?: string;
  createdAt: string;
}

// ── Zod Schemas ───────────────────────────────────────────────────────

export const vendorRegisterSchema = z.object({
  businessName: z.string().min(3).max(200),
  gstin: z.string().regex(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, 'Invalid GSTIN'),
  pan: z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Invalid PAN'),
  bankAccount: z.string().min(9).max(18),
  ifsc: z.string().regex(/^[A-Z]{4}0[A-Z0-9]{6}$/, 'Invalid IFSC code'),
  address: z.string().min(5).max(500),
  city: z.string().min(1).max(100),
  state: z.string().min(1).max(100),
  pincode: z.string().regex(/^\d{6}$/),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  email: z.string().email(),
});

export type VendorRegisterInput = z.infer<typeof vendorRegisterSchema>;
