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
import { formatPrice, generateOrderNumber } from '@/lib/utils';
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
  const { user, isAuthenticated, login } = useAuthStore();
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'cod' | 'card'>('upi');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [authRequired, setAuthRequired] = useState(!isAuthenticated);

  // Address
  const [address, setAddress] = useState(
    'Flat 402, Samrudhi Residency, Waghodia Road, Near Parul University Campus, Vadodara - 390001'
  );
  const [isEditingAddress, setIsEditingAddress] = useState(false);

  if (!isOpen) return null;

  const handleGoogleAuth = async () => {
    try {
      setIsProcessing(true);
      const { signInWithGoogle } = await import('@/lib/firebase');
      const googleUser = await signInWithGoogle();
      login(
        {
          id: googleUser.id,
          name: googleUser.name,
          firstName: googleUser.name.split(' ')[0],
          lastName: googleUser.name.split(' ').slice(1).join(' '),
          email: googleUser.email,
          avatar: googleUser.avatar,
          role: 'CUSTOMER',
        },
        googleUser.token
      );
      setAuthRequired(false);
      toast({
        type: 'success',
        title: 'Signed in successfully',
        message: `Welcome, ${googleUser.name}!`,
      });
    } catch (e: any) {
      toast({
        type: 'error',
        title: 'Sign in failed',
        message: e?.message || 'Could not complete Google Sign In',
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleConfirmOrder = () => {
    if (!isAuthenticated && !user) {
      setAuthRequired(true);
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      toast({
        type: 'success',
        title: 'Order Confirmed!',
        message: `Order #${generateOrderNumber()} placed successfully!`,
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
        ) : authRequired && !user ? (
          <div className="p-6 sm:p-8 text-center space-y-5 animate-fade-in">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 shadow-sm">
              <Lock className="h-7 w-7" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-neutral-900">
                Sign in with Google to Checkout
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-neutral-500">
                Sign in with your Google account to secure your express delivery to {location.city} and receive live order updates.
              </p>
            </div>

            <Button
              size="lg"
              variant="outline"
              onClick={handleGoogleAuth}
              isLoading={isProcessing}
              className="w-full gap-3 border-2 border-neutral-300 py-3.5 text-sm font-bold shadow-sm hover:border-neutral-400 hover:bg-neutral-50"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              Continue with Google Account
            </Button>

            <p className="text-[11px] text-neutral-400">
              🔒 256-bit Encrypted Checkout • Vadodara Hub Fulfilled
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
                  <strong>{user?.name || 'Customer'}</strong> {user?.email ? `(${user.email})` : ''}<br />
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
