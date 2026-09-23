'use client';

import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { ChevronLeft, Package, Truck, CheckCircle2, Circle } from "lucide-react";
import Image from "next/image";

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex items-center gap-4 mb-6 border-b border-neutral-100 pb-4">
        <Link href="/account/orders" className="text-neutral-400 hover:text-neutral-900 transition-colors p-1 bg-neutral-100 rounded-full">
          <ChevronLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-xl font-display font-bold text-neutral-900">Order #{params.id}</h1>
      </div>
      
      <div className="bg-neutral-900 text-white p-6 rounded-xl flex justify-between items-center mb-8 shadow-card">
        <div>
          <p className="text-sm text-neutral-400 font-medium mb-1">Order Date</p>
          <p className="font-bold text-lg">Sep 20, 2023</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-neutral-400 font-medium mb-1">Order Total</p>
          <p className="font-bold font-mono text-xl">{formatPrice(199.99)}</p>
        </div>
      </div>

      <div className="mb-10">
        <h3 className="font-display font-bold text-neutral-900 mb-6">Track Order</h3>
        <div className="relative border-l-2 border-neutral-200 ml-5 space-y-8 pb-4">
          <div className="relative pl-10">
            <div className="absolute -left-[17px] top-0 bg-success-500 text-white w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-sm"><CheckCircle2 className="w-4 h-4" /></div>
            <h4 className="font-bold text-neutral-900">Order Placed</h4>
            <p className="text-sm font-medium text-neutral-500">Sep 20, 10:00 AM</p>
          </div>
          <div className="relative pl-10">
            <div className="absolute -left-[17px] top-0 bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-sm"><Package className="w-4 h-4" /></div>
            <h4 className="font-bold text-neutral-900">Order Packed</h4>
            <p className="text-sm font-medium text-neutral-500">Sep 21, 09:00 AM</p>
          </div>
          <div className="relative pl-10">
            <div className="absolute -left-[17px] top-0 bg-neutral-200 text-neutral-500 w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-sm"><Truck className="w-4 h-4" /></div>
            <h4 className="font-bold text-neutral-400">Out for Delivery</h4>
            <p className="text-sm font-medium text-neutral-400">Pending</p>
          </div>
          <div className="relative pl-10">
            <div className="absolute -left-[17px] top-0 bg-neutral-200 text-neutral-500 w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-sm"><Circle className="w-4 h-4" /></div>
            <h4 className="font-bold text-neutral-400">Delivered</h4>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-100 pt-8">
        <h3 className="font-display font-bold text-neutral-900 mb-4">Items Ordered</h3>
        <div className="flex gap-4 p-4 border border-neutral-100 rounded-xl bg-neutral-50 shadow-sm">
          <div className="w-20 h-20 bg-white rounded-lg border border-neutral-200 relative overflow-hidden flex-shrink-0">
            <Image src="https://picsum.photos/seed/prod0/100/100" alt="Product" fill className="object-cover mix-blend-multiply" />
          </div>
          <div className="flex-1 flex justify-between">
            <div>
              <h4 className="font-bold text-neutral-900 leading-tight">Wireless Headphones</h4>
              <p className="text-xs text-neutral-500 mt-1">Brand: Apple | Color: Black</p>
              <p className="text-sm font-bold mt-2">Qty: 1</p>
            </div>
            <div className="text-right">
              <span className="font-bold font-mono text-lg text-neutral-900">{formatPrice(199.99)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}