"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Check, MapPin, CreditCard, Wallet, Truck, CheckCircle2, Plus } from "lucide-react";
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
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary-500 rounded-full transition-all duration-500" style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }} />
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
}