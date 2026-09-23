'use client';

import useCartStore from '@/store/cart';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, Minus, Plus, ShoppingBag, Tag, CheckCircle2 } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCartStore();

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalMRP = items.reduce((acc, item) => acc + (item.mrp || item.price + 20) * item.quantity, 0);
  const discount = totalMRP - subtotal;
  const delivery = subtotal > 999 ? 0 : 50;
  const total = subtotal + delivery;

  if (items.length === 0) {
    return (
      <div className="bg-neutral-50 min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-6 shadow-card border border-neutral-100">
          <ShoppingBag className="w-16 h-16 text-neutral-300" />
        </div>
        <h1 className="text-3xl font-display font-bold text-neutral-900 mb-2">Your cart is empty</h1>
        <p className="text-neutral-500 mb-8 font-medium">Looks like you haven&apos;t added anything to your cart yet.</p>
        <Link href="/products">
          <Button size="lg" className="font-bold shadow-md">Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-neutral-50 min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl font-display font-bold text-neutral-900 mb-8">
          Shopping Cart <span className="text-neutral-400 text-xl font-medium">({items.length} items)</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Cart Items Left */}
          <div className="w-full lg:w-[60%] flex flex-col gap-4">
            {items.map((item) => {
              const displayName = item.productName || item.name || 'Product';
              const displayImage = item.productImage || item.imageUrl || 'https://picsum.photos/400/400';
              const displayMRP = item.mrp || item.price + 20;

              return (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-white rounded-xl border border-neutral-100 shadow-sm hover:shadow-card-hover transition-shadow"
                >
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden bg-neutral-50 flex-shrink-0 border border-neutral-100">
                    <Image
                      src={displayImage}
                      alt={displayName}
                      fill
                      className="object-cover mix-blend-multiply"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="font-display font-semibold text-neutral-900 line-clamp-2 leading-tight">
                          {displayName}
                        </h3>
                        <p className="text-xs text-neutral-500 mt-1">
                          {item.brand ? `${item.brand} · ` : ''}Size: {item.size || 'M'} | Color: {item.color || 'Default'}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold font-mono text-lg text-neutral-900">
                          {formatPrice(item.price)}
                        </p>
                        <p className="text-xs text-neutral-400 line-through font-mono">
                          {formatPrice(displayMRP)}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-neutral-100">
                      <div className="flex items-center bg-neutral-50 border border-neutral-200 rounded-md shadow-inner">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-neutral-200 text-neutral-600 rounded-l-md transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center text-sm font-bold text-neutral-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-neutral-200 text-neutral-600 rounded-r-md transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex gap-4">
                        <button className="text-xs font-semibold text-primary-600 hover:text-primary-700 uppercase tracking-wider">
                          Save for later
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-error-500 hover:text-error-600 p-1 rounded-full hover:bg-error-50 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary Right */}
          <div className="w-full lg:w-[40%] flex-shrink-0 sticky top-24">
            <div className="bg-white rounded-xl border border-neutral-100 shadow-card overflow-hidden">
              <div className="p-4 border-b border-neutral-100 bg-neutral-50/50">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                    <input
                      type="text"
                      placeholder="Apply Coupon"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-neutral-200 rounded-md focus:ring-2 focus:ring-primary-500 outline-none uppercase font-mono"
                    />
                  </div>
                  <Button
                    variant="outline"
                    className="font-semibold text-primary-600 border-primary-200 hover:bg-primary-50"
                  >
                    Apply
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-lg font-display font-bold text-neutral-900 mb-6">Price Details</h2>
                <div className="space-y-4 text-sm font-medium mb-6">
                  <div className="flex justify-between text-neutral-600">
                    <span>Total MRP</span>
                    <span className="font-mono text-neutral-900">{formatPrice(totalMRP)}</span>
                  </div>
                  <div className="flex justify-between text-success-600">
                    <span>Discount on MRP</span>
                    <span className="font-mono">-{formatPrice(discount)}</span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>Delivery Charges</span>
                    <span
                      className={
                        delivery === 0 ? 'text-success-600 font-bold' : 'font-mono text-neutral-900'
                      }
                    >
                      {delivery === 0 ? 'FREE' : formatPrice(delivery)}
                    </span>
                  </div>
                </div>

                <div className="border-t border-dashed border-neutral-200 pt-4 mb-6">
                  <div className="flex justify-between font-bold text-xl text-neutral-900">
                    <span>Total Amount</span>
                    <span className="font-mono">{formatPrice(total)}</span>
                  </div>
                </div>

                {discount > 0 && (
                  <div className="bg-success-50 text-success-700 p-3 rounded-lg flex items-center justify-center gap-2 text-sm font-bold mb-6 border border-success-100">
                    <CheckCircle2 className="w-4 h-4" /> You&apos;re saving {formatPrice(discount)} on this
                    order!
                  </div>
                )}

                <Link href="/checkout">
                  <Button size="lg" className="w-full font-bold shadow-md text-base shadow-primary-500/20 py-6">
                    Place Order
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mt-6 text-xs font-semibold text-neutral-500">
              <CheckCircle2 className="w-4 h-4 text-success-500" /> Safe and Secure Payments
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}