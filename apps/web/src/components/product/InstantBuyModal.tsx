'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  X,
  MapPin,
  Truck,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';
import { toast } from '@/components/ui/Toast';
import useLanguageStore from '@/store/language';
import useAuthStore from '@/store/auth';

interface InstantBuyModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    image: string;
    price: number;
    mrp: number;
    variantLabel?: string;
    brand?: string;
  };
}

export function InstantBuyModal({
  isOpen,
  onClose,
  product,
}: InstantBuyModalProps) {
  const router = useRouter();
  const { location } = useLanguageStore();
  const { user } = useAuthStore();
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'cod' | 'card'>('upi');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Address
  const [address, setAddress] = useState(
    'Flat 402, Infinity Heights, Waghodia Road, Near Parul University, Vadodara - 390001'
  );
  const [isEditingAddress, setIsEditingAddress] = useState(false);

  if (!isOpen) return null;

  const handleConfirmOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      toast({
        type: 'success',
        title: 'Order Confirmed!',
        message: `Order #NM-GJ-390001-X7B9 placed successfully!`,
      });
      setTimeout(() => {
        router.push('/account/orders');
      }, 1500);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-100 bg-neutral-900 px-6 py-4 text-white">
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-primary-400" />
            <span className="font-display text-base font-bold">
              1-Click Instant Buy (Vadodara Priority)
            </span>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-neutral-400 hover:bg-neutral-800 hover:text-white"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center animate-fade-in">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h3 className="font-display text-2xl font-bold text-neutral-900">
              Order Confirmed!
            </h3>
            <p className="mt-1 text-sm text-neutral-500">
              Your order is queued for 2-hour express dispatch to {location.city}.
            </p>
            <p className="mt-4 font-mono text-xs font-bold text-primary-600">
              Redirecting to Orders tracking...
            </p>
          </div>
        ) : (
          <div className="p-6 space-y-5">
            {/* Product Summary */}
            <div className="flex items-center gap-4 rounded-2xl border border-neutral-100 bg-neutral-50 p-3.5">
              <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-white border border-neutral-200 shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-wider text-primary-600">
                  {product.brand || 'NexMart'}
                </p>
                <h4 className="font-display text-xs sm:text-sm font-bold text-neutral-900 truncate">
                  {product.name}
                </h4>
                {product.variantLabel && (
                  <p className="text-xs text-neutral-500">{product.variantLabel}</p>
                )}
                <p className="mt-1 font-mono text-sm font-black text-neutral-900">
                  {formatPrice(product.price)}
                </p>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="rounded-2xl border border-neutral-200 p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-800">
                  <MapPin className="h-4 w-4 text-primary-600 shrink-0" />
                  <span>Delivery Address</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsEditingAddress(!isEditingAddress)}
                  className="text-xs font-bold text-primary-600 hover:underline"
                >
                  {isEditingAddress ? 'Done' : 'Change Address'}
                </button>
              </div>

              {isEditingAddress ? (
                <textarea
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full rounded-xl border border-neutral-300 p-2 text-xs font-medium focus:border-primary-500 focus:outline-none"
                />
              ) : (
                <p className="text-xs text-neutral-600 leading-relaxed">
                  <strong>{user?.name || 'R. Jan Steve Daniel'}</strong> (+91 98765 43210)<br />
                  {address}
                </p>
              )}

              <div className="mt-3 flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-1.5 text-[11px] font-bold text-emerald-800">
                <Truck className="h-3.5 w-3.5 text-emerald-600" />
                <span>Estimated Delivery: Tomorrow, 2:00 PM (Vadodara Hub)</span>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <p className="mb-2 text-xs font-bold text-neutral-700">Payment Option</p>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`rounded-xl border p-2.5 text-center transition-all ${
                    paymentMethod === 'upi'
                      ? 'border-primary-500 bg-primary-50/60 ring-2 ring-primary-500/20'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <p className="text-xs font-bold text-neutral-900">⚡ UPI Instant</p>
                  <p className="text-[10px] text-neutral-500">GPay / PhonePe</p>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`rounded-xl border p-2.5 text-center transition-all ${
                    paymentMethod === 'cod'
                      ? 'border-primary-500 bg-primary-50/60 ring-2 ring-primary-500/20'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <p className="text-xs font-bold text-neutral-900">💵 Cash on Delivery</p>
                  <p className="text-[10px] text-neutral-500">Pay at Doorstep</p>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`rounded-xl border p-2.5 text-center transition-all ${
                    paymentMethod === 'card'
                      ? 'border-primary-500 bg-primary-50/60 ring-2 ring-primary-500/20'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <p className="text-xs font-bold text-neutral-900">💳 Card / NetBanking</p>
                  <p className="text-[10px] text-neutral-500">Debit / Credit</p>
                </button>
              </div>
            </div>

            {/* Total & Action */}
            <div className="border-t border-neutral-100 pt-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-neutral-600">Total Payable Amount:</span>
                <span className="font-mono text-xl font-black text-neutral-900">
                  {formatPrice(product.price)}
                </span>
              </div>

              <Button
                size="lg"
                onClick={handleConfirmOrder}
                isLoading={isProcessing}
                className="w-full text-base font-bold shadow-lg shadow-primary-500/25"
              >
                Place Order Now ({formatPrice(product.price)}) →
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
