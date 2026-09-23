const fs = require('fs');
const path = require('path');

const files = {
  "src/app/cart/page.tsx": `"use client";
import useCartStore from "@/store/cart";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Minus, Plus, ShoppingBag, Tag, CheckCircle2 } from "lucide-react";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCartStore();

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalMRP = items.reduce((acc, item) => acc + ((item as any).mrp || item.price + 20) * item.quantity, 0);
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
        <p className="text-neutral-500 mb-8 font-medium">Looks like you haven't added anything to your cart yet.</p>
        <Link href="/products">
          <Button size="lg" className="font-bold shadow-md">Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-neutral-50 min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl font-display font-bold text-neutral-900 mb-8">Shopping Cart <span className="text-neutral-400 text-xl font-medium">({items.length} items)</span></h1>
        
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Cart Items Left */}
          <div className="w-full lg:w-[60%] flex flex-col gap-4">
            {items.map(item => (
              <div key={item.id} className="flex gap-4 p-4 bg-white rounded-xl border border-neutral-100 shadow-sm hover:shadow-card-hover transition-shadow">
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden bg-neutral-50 flex-shrink-0 border border-neutral-100">
                  <Image src={item.imageUrl} alt={item.name} fill className="object-cover mix-blend-multiply" />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="font-display font-semibold text-neutral-900 line-clamp-2 leading-tight">{item.name}</h3>
                      <p className="text-xs text-neutral-500 mt-1">Size: M | Color: Black</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold font-mono text-lg text-neutral-900">{formatPrice(item.price)}</p>
                      <p className="text-xs text-neutral-400 line-through font-mono">{formatPrice((item as any).mrp || item.price + 20)}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-neutral-100">
                    <div className="flex items-center bg-neutral-50 border border-neutral-200 rounded-md shadow-inner">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1.5 hover:bg-neutral-200 text-neutral-600 rounded-l-md transition-colors"><Minus className="w-4 h-4" /></button>
                      <span className="w-8 text-center text-sm font-bold text-neutral-900">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1.5 hover:bg-neutral-200 text-neutral-600 rounded-r-md transition-colors"><Plus className="w-4 h-4" /></button>
                    </div>
                    <div className="flex gap-4">
                      <button className="text-xs font-semibold text-primary-600 hover:text-primary-700 uppercase tracking-wider">Save for later</button>
                      <button onClick={() => removeItem(item.id)} className="text-error-500 hover:text-error-600 p-1 rounded-full hover:bg-error-50 transition-colors"><Trash2 className="w-5 h-5" /></button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Right */}
          <div className="w-full lg:w-[40%] flex-shrink-0 sticky top-24">
            <div className="bg-white rounded-xl border border-neutral-100 shadow-card overflow-hidden">
              <div className="p-4 border-b border-neutral-100 bg-neutral-50/50">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                    <input type="text" placeholder="Apply Coupon" className="w-full pl-9 pr-3 py-2 text-sm border border-neutral-200 rounded-md focus:ring-2 focus:ring-primary-500 outline-none uppercase font-mono" />
                  </div>
                  <Button variant="outline" className="font-semibold text-primary-600 border-primary-200 hover:bg-primary-50">Apply</Button>
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
                    <span className={delivery === 0 ? "text-success-600 font-bold" : "font-mono text-neutral-900"}>
                      {delivery === 0 ? "FREE" : formatPrice(delivery)}
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
                    <CheckCircle2 className="w-4 h-4" /> You're saving {formatPrice(discount)} on this order!
                  </div>
                )}
                
                <Link href="/checkout">
                  <Button size="lg" className="w-full font-bold shadow-md text-base shadow-primary-500/20 py-6">Place Order</Button>
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
}`,

  "src/app/checkout/page.tsx": `"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Check, MapPin, CreditCard, Wallet, Truck, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { cn, formatPrice } from "@/lib/utils";

export default function CheckoutPage() {
  const [step, setStep] = useState(2);
  const steps = ["Cart", "Address", "Summary", "Payment", "Done"];

  return (
    <div className="bg-neutral-50 min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Progress Bar */}
        <div className="mb-12 relative max-w-2xl mx-auto">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-neutral-200 rounded-full" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary-500 rounded-full transition-all duration-500" style={{ width: \`\${((step - 1) / (steps.length - 1)) * 100}%\` }} />
          <div className="flex justify-between relative z-10">
            {steps.map((s, i) => {
              const isActive = step === i + 1;
              const isCompleted = step > i + 1;
              return (
                <div key={s} className="flex flex-col items-center gap-2">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-sm transition-colors",
                    isCompleted ? "bg-primary-500 text-white border-2 border-primary-500" :
                    isActive ? "bg-white text-primary-600 border-2 border-primary-500" :
                    "bg-white text-neutral-400 border-2 border-neutral-200"
                  )}>
                    {isCompleted ? <Check className="w-4 h-4" /> : i + 1}
                  </div>
                  <span className={cn("text-xs font-semibold absolute top-10", isActive || isCompleted ? "text-neutral-900" : "text-neutral-400")}>{s}</span>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-card border border-neutral-100 min-h-[400px]">
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-100">
                <MapPin className="w-6 h-6 text-primary-500" />
                <h2 className="text-xl font-display font-bold text-neutral-900">Select Delivery Address</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="border-2 border-primary-500 bg-primary-50/30 rounded-xl p-4 cursor-pointer relative shadow-sm">
                  <input type="radio" name="address" className="absolute top-4 right-4 text-primary-500 focus:ring-primary-500" defaultChecked />
                  <span className="bg-neutral-200 text-neutral-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase mb-2 inline-block">Home</span>
                  <h3 className="font-bold text-neutral-900 mb-1">John Doe</h3>
                  <p className="text-sm text-neutral-600 mb-2 leading-relaxed">123 Main St, Apt 4B<br/>New York, NY 10001</p>
                  <p className="text-sm font-semibold text-neutral-800">+1 234 567 8900</p>
                </label>
                
                <div className="border-2 border-dashed border-neutral-200 rounded-xl p-4 flex flex-col items-center justify-center text-neutral-500 hover:text-primary-500 hover:bg-neutral-50 cursor-pointer transition-colors min-h-[140px]">
                  <Plus className="w-8 h-8 mb-2 opacity-50" />
                  <span className="font-bold">Add New Address</span>
                </div>
              </div>
              
              <div className="flex justify-end pt-6">
                <Button size="lg" onClick={() => setStep(3)} className="px-10 font-bold shadow-md">Continue</Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-xl font-display font-bold text-neutral-900 border-b border-neutral-100 pb-4">Order Summary</h2>
              <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-lg border border-neutral-200" />
                  <div>
                    <h4 className="font-bold text-neutral-900">Wireless Headphones</h4>
                    <p className="text-sm text-neutral-500">Qty: 1</p>
                  </div>
                </div>
                <span className="font-bold font-mono text-lg">{formatPrice(199.99)}</span>
              </div>
              <div className="flex justify-between pt-6 border-t border-neutral-100 text-lg font-bold">
                <span>Total to Pay</span>
                <span className="font-mono text-primary-600">{formatPrice(199.99)}</span>
              </div>
              <div className="flex justify-between pt-6">
                <Button variant="ghost" onClick={() => setStep(2)}>Back</Button>
                <Button size="lg" onClick={() => setStep(4)} className="px-10 font-bold shadow-md">Proceed to Payment</Button>
              </div>
            </div>
          )}
          
          {step === 4 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-xl font-display font-bold text-neutral-900 border-b border-neutral-100 pb-4 mb-6">Payment Method</h2>
              <div className="space-y-3">
                {[
                  { id: 'card', name: 'Credit / Debit Card', icon: CreditCard, desc: 'Visa, Mastercard, Amex' },
                  { id: 'upi', name: 'UPI', icon: Wallet, desc: 'Google Pay, PhonePe, Paytm' },
                  { id: 'cod', name: 'Cash on Delivery', icon: Truck, desc: 'Pay when you receive' }
                ].map((m, i) => (
                  <label key={m.id} className="flex items-start gap-4 p-4 border border-neutral-200 rounded-xl cursor-pointer hover:border-primary-300 hover:bg-primary-50/30 transition-colors">
                    <input type="radio" name="payment" className="mt-1 text-primary-500 focus:ring-primary-500" defaultChecked={i === 0} />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 font-bold text-neutral-900">
                        <m.icon className="w-5 h-5 text-neutral-500" />
                        {m.name}
                      </div>
                      <p className="text-sm text-neutral-500 mt-1">{m.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
              <div className="flex justify-between pt-6 mt-6 border-t border-neutral-100">
                <Button variant="ghost" onClick={() => setStep(3)}>Back</Button>
                <Button size="lg" onClick={() => setStep(5)} className="px-10 font-bold shadow-md">Pay {formatPrice(199.99)}</Button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="text-center py-16 animate-in zoom-in-95 duration-500 flex flex-col items-center">
              <div className="w-24 h-24 bg-success-50 rounded-full flex items-center justify-center mb-6 border border-success-100 shadow-inner">
                <CheckCircle2 className="w-12 h-12 text-success-500" />
              </div>
              <h2 className="text-3xl font-display font-bold text-neutral-900 mb-3">Order Placed Successfully!</h2>
              <p className="text-neutral-500 mb-8 max-w-md mx-auto">Your order <strong className="text-neutral-900">#ORD-987654321</strong> has been confirmed. We've sent the details to your email.</p>
              
              <div className="bg-neutral-50 rounded-xl p-4 mb-8 max-w-sm mx-auto border border-neutral-100 w-full">
                <p className="text-sm text-neutral-600 mb-1">Estimated Delivery</p>
                <p className="font-bold text-neutral-900 text-lg flex justify-center items-center gap-2"><Truck className="w-5 h-5 text-primary-500"/> Monday, 29 Sep</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-sm mx-auto">
                <Link href="/account/orders" className="w-full">
                  <Button variant="outline" className="w-full font-bold shadow-sm">Track Order</Button>
                </Link>
                <Link href="/" className="w-full">
                  <Button className="w-full font-bold shadow-md shadow-primary-500/20">Continue Shopping</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}`
};

for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.join(__dirname, filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content);
  console.log('Created:', filePath);
}
