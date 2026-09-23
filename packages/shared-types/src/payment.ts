import type { PaymentStatus, PaymentMethod, WalletTransactionType } from './enums';

// ── Payment Types ──────────────────────────────────────────────────────

export interface Payment {
  id: string;
  orderId: string;
  method: PaymentMethod;
  amount: number;
  currency: string;
  gatewayRef: string;
  gatewayOrderId: string;
  status: PaymentStatus;
  razorpayPaymentId?: string;
  razorpaySignature?: string;
  failureReason?: string;
  createdAt: string;
  updatedAt: string;
}

export interface WalletBalance {
  userId: string;
  balance: number;
  currency: string;
}

export interface WalletTransaction {
  id: string;
  userId: string;
  type: WalletTransactionType;
  amount: number;
  reference: string;
  description: string;
  balanceAfter: number;
  createdAt: string;
}

export interface RazorpayOrderResponse {
  id: string;
  amount: number;
  currency: string;
  receipt: string;
  status: string;
}

export interface PaymentVerification {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}
