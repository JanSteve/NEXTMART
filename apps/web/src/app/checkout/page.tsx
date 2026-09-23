'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import {
  Check,
  MapPin,
  CreditCard,
  Wallet,
  Truck,
  CheckCircle2,
  Plus,
  ArrowLeft,
  ShieldCheck,
  Smartphone,
  Landmark,
  Building,
  Home,
  Trash2,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn, formatPrice, generateOrderNumber } from '@/lib/utils';
import useCartStore from '@/store/cart';
import useLanguageStore from '@/store/language';
import useAuthStore from '@/store/auth';
import { signInWithGoogle } from '@/lib/firebase';
import { toast } from '@/components/ui/Toast';

interface Address {
  id: string;
  fullName: string;
  phone: string;
  street: string;
  landmark: string;
  city: string;
  state: string;
  pincode: string;
  type: 'HOME' | 'WORK';
  isDefault?: boolean;
}

export default function CheckoutPage() {
  const { user, isAuthenticated, login } = useAuthStore();
  const [step, setStep] = useState(isAuthenticated && user ? 2 : 1);
  const steps = ['Sign In', 'Address', 'Order Summary', 'Payment', 'Confirmation'];

  const { items, clearCart } = useCartStore();
  const { location } = useLanguageStore();

  const [addresses, setAddresses] = useState<Address[]>(() => {
    const name = user?.name || (user?.firstName ? `${user.firstName} ${user.lastName || ''}`.trim() : 'Customer');
    return [
      {
        id: 'addr-vadodara-1',
        fullName: name,
        phone: user?.phone || '+91 98765 43210',
        street: 'Flat 402, Samrudhi Residency, Waghodia Road',
        landmark: 'Near Parul University Campus',
        city: location.city || 'Vadodara',
        state: location.state || 'Gujarat',
        pincode: location.pincode || '390001',
        type: 'HOME',
        isDefault: true,
      },
    ];
  });
  const [selectedAddressId, setSelectedAddressId] = useState('addr-vadodara-1');
  const [showAddAddressForm, setShowAddAddressForm] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  // New Address Form State
  const [newFullName, setNewFullName] = useState(user?.name || '');
  const [newPhone, setNewPhone] = useState(user?.phone || '');
  const [newStreet, setNewStreet] = useState('');
  const [newLandmark, setNewLandmark] = useState('');
  const [newCity, setNewCity] = useState(location.city || 'Vadodara');
  const [newState, setNewState] = useState(location.state || 'Gujarat');
  const [newPincode, setNewPincode] = useState(location.pincode || '390001');
  const [newType, setNewType] = useState<'HOME' | 'WORK'>('HOME');

  // Google Sign-In Handler
  const handleGoogleSignIn = async () => {
    try {
      setIsAuthLoading(true);
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
      const updatedAddr: Address = {
        id: 'addr-vadodara-1',
        fullName: googleUser.name,
        phone: '+91 98765 43210',
        street: 'Flat 402, Samrudhi Residency, Waghodia Road',
        landmark: 'Near Parul University Campus',
        city: location.city || 'Vadodara',
        state: location.state || 'Gujarat',
        pincode: location.pincode || '390001',
        type: 'HOME',
        isDefault: true,
      };
      setAddresses([updatedAddr]);
      setNewFullName(googleUser.name);
      setStep(2);
      toast({
        type: 'success',
        title: 'Signed In with Google',
        message: `Welcome, ${googleUser.name}! Please select your delivery address.`,
      });
    } catch (e: any) {
      toast({
        type: 'error',
        title: 'Sign In Failed',
        message: e?.message || 'Could not complete Google Sign In',
      });
    } finally {
      setIsAuthLoading(false);
    }
  };

  const handleGuestContinue = () => {
    const guestUser = {
      id: `guest-${Date.now()}`,
      name: 'Verified Customer',
      email: 'customer@nexmart.in',
      phone: '+91 98765 43210',
      role: 'CUSTOMER',
    };
    login(guestUser, 'guest-token');
    setStep(2);
  };

  // Payment State
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking' | 'cod'>('upi');
  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  // Placed Order Info
  const [placedOrderNumber, setPlacedOrderNumber] = useState('');

  // Computations
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalMRP = items.reduce((acc, item) => acc + (item.mrp || item.price + 500) * item.quantity, 0);
  const discount = totalMRP - subtotal;
  const delivery = subtotal > 999 ? 0 : 49;
  const upiDiscount = paymentMethod === 'upi' ? 50 : 0;
  const totalAmount = Math.max(0, subtotal + delivery - upiDiscount);

  const selectedAddress =
    addresses.find((a) => a.id === selectedAddressId) || addresses[0];

  const handleAddNewAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFullName || !newPhone || !newStreet || !newPincode) {
      toast({
        type: 'error',
        title: 'Incomplete Address',
        message: 'Please fill in all required fields.',
      });
      return;
    }

    const createdAddress: Address = {
      id: `addr-${Date.now()}`,
      fullName: newFullName,
      phone: newPhone,
      street: newStreet,
      landmark: newLandmark,
      city: newCity || 'Vadodara',
      state: newState || 'Gujarat',
      pincode: newPincode,
      type: newType,
    };

    setAddresses([createdAddress, ...addresses]);
    setSelectedAddressId(createdAddress.id);
    setShowAddAddressForm(false);
    toast({
      type: 'success',
      title: 'Address Saved',
      message: `Delivery address for ${createdAddress.fullName} in ${createdAddress.city} added successfully.`,
    });

    // Reset Form
    setNewFullName('');
    setNewPhone('');
    setNewStreet('');
    setNewLandmark('');
  };

  const handlePlaceOrder = () => {
    const orderNo = generateOrderNumber();
    setPlacedOrderNumber(orderNo);
    clearCart();
    setStep(5);
    toast({
      type: 'success',
      title: 'Order Confirmed!',
      message: `Your NexMart order #${orderNo} has been placed successfully.`,
    });
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Step Progress Bar */}
        <div className="relative mx-auto mb-10 max-w-2xl">
          <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-neutral-200" />
          <div
            className="absolute left-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-primary-500 transition-all duration-500"
            style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
          />
          <div className="relative z-10 flex justify-between">
            {steps.map((s, i) => {
              const stepNumber = i + 1;
              const isActive = step === stepNumber;
              const isCompleted = step > stepNumber;
              return (
                <div key={s} className="flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() => stepNumber < step && setStep(stepNumber)}
                    disabled={stepNumber > step}
                    className={cn(
                      'flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold transition-all',
                      isCompleted
                        ? 'bg-primary-500 text-white shadow-md'
                        : isActive
                          ? 'border-2 border-primary-500 bg-white text-primary-600 ring-4 ring-primary-500/20'
                          : 'border-2 border-neutral-200 bg-white text-neutral-400'
                    )}
                  >
                    {isCompleted ? <Check className="h-4 w-4" /> : stepNumber}
                  </button>
                  <span
                    className={cn(
                      'mt-2 text-[11px] font-bold',
                      isActive || isCompleted ? 'text-neutral-900' : 'text-neutral-400'
                    )}
                  >
                    {s}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── STEP 1: GOOGLE SIGN IN GATE ── */}
        {step === 1 && (
          <div className="mx-auto max-w-xl rounded-2xl border border-neutral-100 bg-white p-6 text-center shadow-card md:p-8 animate-fade-in">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 shadow-sm">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <h2 className="font-display text-2xl font-bold text-neutral-900">
              Sign in with Google to Checkout
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-neutral-500">
              Please sign in with your Google account to receive express doorstep delivery in {location.city}, download GST invoices, and track your order in real-time.
            </p>

            <div className="mt-8 space-y-3">
              <Button
                size="lg"
                variant="outline"
                onClick={handleGoogleSignIn}
                isLoading={isAuthLoading}
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

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-200" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 font-semibold text-neutral-400">Or</span>
                </div>
              </div>

              <Button
                size="md"
                variant="ghost"
                onClick={handleGuestContinue}
                className="w-full text-xs font-bold text-neutral-600 hover:text-primary-600"
              >
                Proceed as Verified Guest →
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-xl bg-primary-50/60 p-3 text-left">
              <Truck className="h-5 w-5 shrink-0 text-primary-600" />
              <p className="text-xs font-medium text-primary-900">
                <strong>Vadodara 2-Hour Express Active:</strong> Orders placed today dispatch from Waghodia Hub with instant SMS updates.
              </p>
            </div>
          </div>
        )}

        {/* ── STEP 2: ADDRESS SELECTION & ADD NEW ADDRESS ── */}
        {step === 2 && (
          <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-card md:p-8 animate-fade-in">
            <div className="mb-6 flex items-center justify-between border-b border-neutral-100 pb-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary-500" />
                <div>
                  <h2 className="font-display text-xl font-bold text-neutral-900">
                    Delivery Address
                  </h2>
                  <p className="text-xs text-neutral-500">
                    Delivering to Vadodara &amp; Pan-India with express shipping
                  </p>
                </div>
              </div>
              {!showAddAddressForm && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setShowAddAddressForm(true)}
                  className="gap-1.5 border-primary-500 text-xs font-bold text-primary-600 hover:bg-primary-50"
                >
                  <Plus className="h-3.5 w-3.5" /> Add New Address
                </Button>
              )}
            </div>

            {/* Inline Add New Address Form */}
            {showAddAddressForm && (
              <form
                onSubmit={handleAddNewAddress}
                className="mb-8 rounded-xl border-2 border-primary-500/30 bg-primary-50/20 p-5 animate-fade-in"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-display text-sm font-bold text-primary-900">
                    ✍️ Enter New Delivery Address
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowAddAddressForm(false)}
                    className="text-xs font-semibold text-neutral-500 hover:text-neutral-800"
                  >
                    Cancel
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-bold text-neutral-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={newFullName}
                      onChange={(e) => setNewFullName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-primary-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-bold text-neutral-700">
                      10-Digit Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={newPhone}
                      onChange={(e) => setNewPhone(e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm font-mono focus:border-primary-500 focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-xs font-bold text-neutral-700">
                      Flat, House No., Building, Apartment *
                    </label>
                    <input
                      type="text"
                      required
                      value={newStreet}
                      onChange={(e) => setNewStreet(e.target.value)}
                      placeholder="e.g. Flat 402, Samrudhi Residency, Waghodia Road"
                      className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-primary-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-bold text-neutral-700">
                      Landmark / Area (Optional)
                    </label>
                    <input
                      type="text"
                      value={newLandmark}
                      onChange={(e) => setNewLandmark(e.target.value)}
                      placeholder="e.g. Near Parul University"
                      className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-primary-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-bold text-neutral-700">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      required
                      value={newPincode}
                      onChange={(e) => setNewPincode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      placeholder="390001"
                      maxLength={6}
                      className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm font-mono focus:border-primary-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-bold text-neutral-700">
                      City / District *
                    </label>
                    <input
                      type="text"
                      required
                      value={newCity}
                      onChange={(e) => setNewCity(e.target.value)}
                      placeholder="Vadodara"
                      className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-primary-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-bold text-neutral-700">
                      State *
                    </label>
                    <input
                      type="text"
                      required
                      value={newState}
                      onChange={(e) => setNewState(e.target.value)}
                      placeholder="Gujarat"
                      className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-primary-500 focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-xs font-bold text-neutral-700">
                      Address Type
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 text-xs font-semibold text-neutral-800 cursor-pointer">
                        <input
                          type="radio"
                          name="addressType"
                          checked={newType === 'HOME'}
                          onChange={() => setNewType('HOME')}
                          className="text-primary-500 focus:ring-primary-500"
                        />
                        <Home className="h-3.5 w-3.5" /> Home (All-day delivery)
                      </label>
                      <label className="flex items-center gap-2 text-xs font-semibold text-neutral-800 cursor-pointer">
                        <input
                          type="radio"
                          name="addressType"
                          checked={newType === 'WORK'}
                          onChange={() => setNewType('WORK')}
                          className="text-primary-500 focus:ring-primary-500"
                        />
                        <Building className="h-3.5 w-3.5" /> Work (10 AM - 6 PM)
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex justify-end gap-3">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowAddAddressForm(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" size="sm" className="px-6 font-bold">
                    Save and Deliver Here
                  </Button>
                </div>
              </form>
            )}

            {/* Saved Address Cards */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {addresses.map((addr) => {
                const isSelected = selectedAddressId === addr.id;
                return (
                  <div
                    key={addr.id}
                    onClick={() => setSelectedAddressId(addr.id)}
                    className={cn(
                      'relative cursor-pointer rounded-xl border-2 p-5 transition-all',
                      isSelected
                        ? 'border-primary-500 bg-primary-50/20 shadow-md ring-2 ring-primary-500/20'
                        : 'border-neutral-200 bg-white hover:border-neutral-300'
                    )}
                  >
                    <div className="flex items-start justify-between">
                      <span className="rounded bg-neutral-100 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-neutral-600">
                        {addr.type}
                      </span>
                      <div
                        className={cn(
                          'flex h-5 w-5 items-center justify-center rounded-full border-2',
                          isSelected
                            ? 'border-primary-500 bg-primary-500 text-white'
                            : 'border-neutral-300'
                        )}
                      >
                        {isSelected && <Check className="h-3 w-3" />}
                      </div>
                    </div>

                    <h3 className="mt-3 font-display text-sm font-bold text-neutral-900">
                      {addr.fullName}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-neutral-600">
                      {addr.street}
                      {addr.landmark && `, ${addr.landmark}`}
                      <br />
                      <strong className="font-semibold text-neutral-800">
                        {addr.city}, {addr.state} — {addr.pincode}
                      </strong>
                    </p>
                    <p className="mt-2 font-mono text-xs font-semibold text-neutral-700">
                      📞 {addr.phone}
                    </p>
                  </div>
                );
              })}

              {/* Add New Address Trigger Card */}
              {!showAddAddressForm && (
                <button
                  type="button"
                  onClick={() => setShowAddAddressForm(true)}
                  className="flex min-h-[140px] flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-neutral-200 p-5 text-neutral-500 transition-all hover:border-primary-400 hover:bg-primary-50/20 hover:text-primary-600"
                >
                  <Plus className="h-6 w-6" />
                  <span className="font-display text-xs font-bold">
                    + Add New Delivery Address
                  </span>
                </button>
              )}
            </div>

            <div className="mt-8 flex justify-end">
              <Button
                size="lg"
                onClick={() => setStep(3)}
                className="px-10 font-bold shadow-md"
              >
                Deliver to this Address →
              </Button>
            </div>
          </div>
        )}

        {/* ── STEP 3: ORDER SUMMARY ── */}
        {step === 3 && (
          <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-card md:p-8 animate-fade-in">
            <h2 className="mb-4 border-b border-neutral-100 pb-4 font-display text-xl font-bold text-neutral-900">
              Review Your Items &amp; Delivery
            </h2>

            {/* Selected Address Summary Pill */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 text-primary-600" />
                <div className="text-xs">
                  <p className="font-bold text-neutral-900">
                    Delivering to {selectedAddress.fullName} ({selectedAddress.pincode})
                  </p>
                  <p className="text-neutral-500">
                    {selectedAddress.street}, {selectedAddress.city}, {selectedAddress.state}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="text-xs font-bold text-primary-600 hover:underline"
              >
                Change Address
              </button>
            </div>

            {/* Items List */}
            <div className="divide-y divide-neutral-100">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 py-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50">
                    <Image
                      src={item.productImage || item.imageUrl || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=200&auto=format&fit=crop'}
                      alt={item.productName || item.name || 'Item'}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-display text-sm font-bold text-neutral-900 line-clamp-1">
                      {item.productName || item.name}
                    </h4>
                    <p className="text-xs text-neutral-500">
                      {item.size ? `Option: ${item.size} · ` : ''}Qty: {item.quantity}
                    </p>
                  </div>
                  <span className="font-mono text-sm font-bold text-neutral-900">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            {/* Total Calculation */}
            <div className="mt-6 border-t border-dashed border-neutral-200 pt-4 space-y-2">
              <div className="flex justify-between text-xs text-neutral-600">
                <span>Subtotal</span>
                <span className="font-mono">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-xs text-neutral-600">
                <span>Delivery (Vadodara)</span>
                <span className="font-semibold text-success-600">
                  {delivery === 0 ? 'FREE' : formatPrice(delivery)}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold text-neutral-900 border-t border-neutral-100 pt-2">
                <span>Total Amount</span>
                <span className="font-mono text-primary-600">{formatPrice(totalAmount)}</span>
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <Button variant="ghost" onClick={() => setStep(2)}>
                ← Back to Address
              </Button>
              <Button
                size="lg"
                onClick={() => setStep(4)}
                className="px-10 font-bold shadow-md"
              >
                Proceed to Payment →
              </Button>
            </div>
          </div>
        )}

        {/* ── STEP 4: PAYMENT OPTIONS ── */}
        {step === 4 && (
          <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-card md:p-8 animate-fade-in">
            <h2 className="mb-4 border-b border-neutral-100 pb-4 font-display text-xl font-bold text-neutral-900">
              Select Payment Method
            </h2>

            <div className="space-y-3">
              {/* UPI Option */}
              <label
                className={cn(
                  'flex cursor-pointer flex-col rounded-xl border-2 p-4 transition-all',
                  paymentMethod === 'upi'
                    ? 'border-primary-500 bg-primary-50/20 ring-2 ring-primary-500/20'
                    : 'border-neutral-200 hover:border-neutral-300'
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'upi'}
                      onChange={() => setPaymentMethod('upi')}
                      className="text-primary-500 focus:ring-primary-500"
                    />
                    <Smartphone className="h-5 w-5 text-primary-600" />
                    <div>
                      <p className="font-display text-sm font-bold text-neutral-900">
                        UPI (GPay / PhonePe / Paytm / BHIM)
                      </p>
                      <p className="text-[11px] text-success-600 font-semibold">
                        ⚡ Instant ₹50 extra discount applied!
                      </p>
                    </div>
                  </div>
                  <span className="rounded bg-success-100 px-2 py-0.5 text-[10px] font-extrabold text-success-700">
                    -₹50 OFF
                  </span>
                </div>

                {paymentMethod === 'upi' && (
                  <div className="mt-3 pl-8">
                    <input
                      type="text"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      placeholder="Enter your UPI ID (e.g. yourname@oksbi)"
                      className="w-full max-w-sm rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs font-mono focus:border-primary-500 focus:outline-none"
                    />
                  </div>
                )}
              </label>

              {/* Credit / Debit Card Option */}
              <label
                className={cn(
                  'flex cursor-pointer flex-col rounded-xl border-2 p-4 transition-all',
                  paymentMethod === 'card'
                    ? 'border-primary-500 bg-primary-50/20 ring-2 ring-primary-500/20'
                    : 'border-neutral-200 hover:border-neutral-300'
                )}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                    className="text-primary-500 focus:ring-primary-500"
                  />
                  <CreditCard className="h-5 w-5 text-neutral-700" />
                  <div>
                    <p className="font-display text-sm font-bold text-neutral-900">
                      Credit / Debit Card
                    </p>
                    <p className="text-[11px] text-neutral-500">
                      Visa, MasterCard, RuPay, American Express
                    </p>
                  </div>
                </div>

                {paymentMethod === 'card' && (
                  <div className="mt-4 grid grid-cols-2 gap-3 pl-8 max-w-md">
                    <div className="col-span-2">
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="16-Digit Card Number"
                        maxLength={19}
                        className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs font-mono focus:border-primary-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        placeholder="MM / YY"
                        maxLength={5}
                        className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs font-mono focus:border-primary-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="password"
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value)}
                        placeholder="CVV"
                        maxLength={4}
                        className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs font-mono focus:border-primary-500 focus:outline-none"
                      />
                    </div>
                  </div>
                )}
              </label>

              {/* Net Banking */}
              <label
                className={cn(
                  'flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-all',
                  paymentMethod === 'netbanking'
                    ? 'border-primary-500 bg-primary-50/20 ring-2 ring-primary-500/20'
                    : 'border-neutral-200 hover:border-neutral-300'
                )}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'netbanking'}
                  onChange={() => setPaymentMethod('netbanking')}
                  className="text-primary-500 focus:ring-primary-500"
                />
                <Landmark className="h-5 w-5 text-neutral-700" />
                <div>
                  <p className="font-display text-sm font-bold text-neutral-900">
                    Net Banking
                  </p>
                  <p className="text-[11px] text-neutral-500">
                    HDFC, ICICI, SBI, Axis, Bank of Baroda &amp; 50+ Banks
                  </p>
                </div>
              </label>

              {/* Cash on Delivery (COD) */}
              <label
                className={cn(
                  'flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-all',
                  paymentMethod === 'cod'
                    ? 'border-primary-500 bg-primary-50/20 ring-2 ring-primary-500/20'
                    : 'border-neutral-200 hover:border-neutral-300'
                )}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'cod'}
                  onChange={() => setPaymentMethod('cod')}
                  className="text-primary-500 focus:ring-primary-500"
                />
                <Truck className="h-5 w-5 text-neutral-700" />
                <div>
                  <p className="font-display text-sm font-bold text-neutral-900">
                    Cash on Delivery (COD)
                  </p>
                  <p className="text-[11px] text-neutral-500">
                    Pay securely in cash or via QR upon delivery in Vadodara
                  </p>
                </div>
              </label>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-neutral-100 pt-6">
              <Button variant="ghost" onClick={() => setStep(3)}>
                ← Back to Summary
              </Button>
              <Button
                size="lg"
                onClick={handlePlaceOrder}
                className="px-10 font-bold shadow-md shadow-primary-500/20"
              >
                Pay {formatPrice(totalAmount)} &amp; Place Order
              </Button>
            </div>
          </div>
        )}

        {/* ── STEP 5: ORDER PLACED CONFIRMATION ── */}
        {step === 5 && (
          <div className="rounded-2xl border border-neutral-100 bg-white p-8 text-center shadow-card md:p-12 animate-fade-in">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-success-100 text-success-600 shadow-md">
              <CheckCircle2 className="h-10 w-10" />
            </div>

            <h1 className="font-display text-3xl font-extrabold text-neutral-900">
              Order Placed Successfully! 🎉
            </h1>
            <p className="mt-2 text-sm text-neutral-500">
              Thank you for shopping with NexMart. An SMS and email confirmation have been sent.
            </p>

            <div className="mx-auto mt-6 max-w-md rounded-xl border border-neutral-200 bg-neutral-50 p-5 text-left text-xs space-y-2">
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <span className="text-neutral-500">Order ID:</span>
                <span className="font-mono font-bold text-neutral-900">{placedOrderNumber}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <span className="text-neutral-500">Delivery To:</span>
                <span className="font-semibold text-neutral-900">
                  {selectedAddress.fullName}, {selectedAddress.city} ({selectedAddress.pincode})
                </span>
              </div>
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <span className="text-neutral-500">Estimated Delivery:</span>
                <span className="font-bold text-success-700">In 2 Business Days (Express)</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-neutral-500">Payment Status:</span>
                <span className="font-bold text-primary-600 uppercase">
                  {paymentMethod === 'cod' ? 'Cash on Delivery (Pending)' : 'Paid Online (Verified)'}
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/account/orders">
                <Button size="lg" className="w-full sm:w-auto font-bold shadow-md">
                  Track Your Package 🚚
                </Button>
              </Link>
              <Link href="/products">
                <Button size="lg" variant="outline" className="w-full sm:w-auto font-bold border-neutral-300">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}