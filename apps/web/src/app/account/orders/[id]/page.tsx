'use client';

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import {
  ChevronLeft,
  Package,
  Truck,
  CheckCircle2,
  Circle,
  MapPin,
  Phone,
  ShieldCheck,
  FileText,
  Clock,
  Printer,
  Navigation,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { toast } from "@/components/ui/Toast";

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  const [showInvoice, setShowInvoice] = useState(false);

  const orderData = {
    id: params.id,
    date: "Today, 10:45 AM",
    expectedDelivery: "Tomorrow by 2:00 PM",
    deliveryAddress: {
      name: "R. Jan Steve Daniel",
      street: "B-402, Samrudhi Heights, Near Inorbit Mall",
      area: "Alkapuri / Gorwa",
      city: "Vadodara, Gujarat",
      pincode: "390001",
      phone: "+91 98765 43210",
    },
    deliveryPartner: {
      name: "Suresh Patel",
      rating: 4.9,
      vehicle: "Hero Electric Nyx (GJ-06-EA-4210)",
      phone: "+91 98250 12345",
      deliveries: 1420,
    },
    items: [
      {
        id: "prod-1",
        name: "French Floral Print Tiered Maxi Dress",
        brand: "Zara",
        size: "M",
        color: "Floral Rose Pink",
        qty: 1,
        price: 2499,
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=600&auto=format&fit=crop",
      },
      {
        id: "prod-2",
        name: "Nike Air Max 270 React Sneakers",
        brand: "Nike",
        size: "UK 8",
        color: "Triple White",
        qty: 1,
        price: 8995,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop",
      },
    ],
    subtotal: 11494,
    discount: 500,
    delivery: 0,
    total: 10994,
    deliveryOtp: "4829",
  };

  const handleCallRider = () => {
    toast({
      type: "info",
      title: "Connecting to Delivery Partner",
      message: `Connecting to ${orderData.deliveryPartner.name} (+91 98250 12345)...`,
    });
  };

  return (
    <div className="animate-in fade-in duration-300 max-w-4xl mx-auto pb-12">
      {/* Top Breadcrumb Header */}
      <div className="flex items-center justify-between gap-4 mb-6 border-b border-neutral-100 pb-4">
        <div className="flex items-center gap-3">
          <Link
            href="/account/orders"
            className="text-neutral-500 hover:text-neutral-900 transition-colors p-2 bg-neutral-100 hover:bg-neutral-200 rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-xl font-display font-bold text-neutral-900">
              Order #{orderData.id}
            </h1>
            <p className="text-xs text-neutral-500">Placed on {orderData.date}</p>
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowInvoice(true)}
          className="flex items-center gap-1.5 border-neutral-300 font-semibold text-xs text-neutral-700 hover:bg-neutral-50"
        >
          <FileText className="w-4 h-4 text-primary-600" />
          <span>GST Invoice</span>
        </Button>
      </div>

      {/* Hero Delivery Status Card */}
      <div className="bg-gradient-to-r from-neutral-900 via-primary-950 to-neutral-900 text-white p-6 sm:p-7 rounded-3xl shadow-xl mb-8 border border-neutral-800">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-white/10 pb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold mb-2 border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5" /> Out For Delivery in Vadodara
            </div>
            <h2 className="text-2xl font-display font-bold tracking-tight">
              Arriving {orderData.expectedDelivery}
            </h2>
          </div>
          <div className="sm:text-right bg-white/5 p-3 sm:p-0 rounded-xl sm:bg-transparent">
            <p className="text-xs text-neutral-400 font-medium mb-1">Delivery OTP Code</p>
            <span className="font-mono text-2xl font-black tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-lg border border-amber-400/30">
              {orderData.deliveryOtp}
            </span>
          </div>
        </div>

        {/* Live Delivery Partner Card */}
        <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary-600 border-2 border-white/20 flex items-center justify-center font-bold text-lg text-white">
              SP
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-sm text-white">{orderData.deliveryPartner.name}</h4>
                <span className="text-[11px] bg-amber-400/20 text-amber-300 px-1.5 py-0.2 rounded font-semibold">
                  ★ {orderData.deliveryPartner.rating}
                </span>
              </div>
              <p className="text-xs text-neutral-400">{orderData.deliveryPartner.vehicle}</p>
            </div>
          </div>
          <Button
            size="sm"
            onClick={handleCallRider}
            className="bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-xl flex items-center justify-center gap-1.5 text-xs shadow-lg shadow-primary-500/30"
          >
            <Phone className="w-3.5 h-3.5" /> Call Delivery Partner
          </Button>
        </div>
      </div>

      {/* Live Vadodara Delivery GPS Map Simulation */}
      <div className="bg-white rounded-3xl border border-neutral-200 shadow-card p-6 mb-8 overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Navigation className="w-5 h-5 text-primary-600 animate-pulse" />
            <h3 className="font-display font-bold text-base text-neutral-900">
              Live Vadodara GPS Tracking
            </h3>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            ● Live 1.8 km away
          </span>
        </div>

        {/* Map Canvas Graphic */}
        <div className="relative w-full h-52 bg-slate-100 rounded-2xl overflow-hidden border border-neutral-200 flex items-center justify-center p-4">
          {/* Stylized Map Grid Lines */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#4b5563_1px,transparent_1px)] [background-size:16px_16px]"></div>

          {/* Road Path Simulation */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 50 150 Q 200 40 400 110 T 750 90"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <path
              d="M 50 150 Q 200 40 400 110 T 750 90"
              fill="none"
              stroke="#6366f1"
              strokeWidth="4"
              strokeDasharray="6 6"
              className="animate-pulse"
            />
          </svg>

          {/* Origin: NexMart Alkapuri Hub */}
          <div className="absolute left-8 bottom-8 flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-lg">
              <Package className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold text-neutral-700 bg-white/90 px-2 py-0.5 rounded shadow mt-1">
              NexMart Hub (Alkapuri)
            </span>
          </div>

          {/* Active Rider Position */}
          <div className="absolute left-1/2 top-14 -translate-x-1/2 flex flex-col items-center animate-bounce duration-1000">
            <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center shadow-xl ring-4 ring-primary-200">
              <Truck className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-white bg-primary-900 px-2 py-0.5 rounded shadow mt-1">
              Suresh (In Transit)
            </span>
          </div>

          {/* Destination: Customer Address */}
          <div className="absolute right-8 top-12 flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg">
              <MapPin className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold text-neutral-700 bg-white/90 px-2 py-0.5 rounded shadow mt-1">
              Vadodara - 390001
            </span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-neutral-600 bg-neutral-50 p-3 rounded-xl">
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-primary-500" />
            Delivering to: <strong className="font-bold text-neutral-900">{orderData.deliveryAddress.street}, {orderData.deliveryAddress.area}, Vadodara</strong>
          </span>
          <span className="text-neutral-500">Contact: {orderData.deliveryAddress.phone}</span>
        </div>
      </div>

      {/* Stepper Timeline */}
      <div className="bg-white rounded-3xl border border-neutral-200 shadow-card p-6 mb-8">
        <h3 className="font-display font-bold text-neutral-900 mb-6">Delivery Progress</h3>
        <div className="relative border-l-2 border-neutral-200 ml-5 space-y-7 pb-2">
          {/* Step 1 */}
          <div className="relative pl-9">
            <div className="absolute -left-[17px] top-0 bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-sm">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-sm text-neutral-900">Order Placed &amp; Confirmed</h4>
            <p className="text-xs text-neutral-500 mt-0.5">Sep 22, 10:45 AM · Vadodara Hub</p>
          </div>

          {/* Step 2 */}
          <div className="relative pl-9">
            <div className="absolute -left-[17px] top-0 bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-sm">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-sm text-neutral-900">Packed &amp; Quality Checked</h4>
            <p className="text-xs text-neutral-500 mt-0.5">Sep 22, 02:30 PM · Sayajigunj Fulfillment Center</p>
          </div>

          {/* Step 3 */}
          <div className="relative pl-9">
            <div className="absolute -left-[17px] top-0 bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-sm animate-pulse">
              <Truck className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-sm text-primary-700">Out For Delivery</h4>
            <p className="text-xs text-neutral-500 mt-0.5">
              Assigned to Suresh Patel · Arriving today
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative pl-9">
            <div className="absolute -left-[17px] top-0 bg-neutral-200 text-neutral-400 w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-sm">
              <Circle className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-sm text-neutral-400">Delivered</h4>
            <p className="text-xs text-neutral-400 mt-0.5">Pending OTP Handshake</p>
          </div>
        </div>
      </div>

      {/* Ordered Items List */}
      <div className="bg-white rounded-3xl border border-neutral-200 shadow-card p-6">
        <h3 className="font-display font-bold text-neutral-900 mb-4">Items in this Package</h3>
        <div className="space-y-4 divide-y divide-neutral-100">
          {orderData.items.map((item) => (
            <div key={item.id} className="pt-4 first:pt-0 flex gap-4 items-center">
              <div className="w-20 h-20 bg-neutral-100 rounded-xl relative overflow-hidden flex-shrink-0 border border-neutral-200">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm">{item.name}</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Brand: <strong className="text-neutral-700">{item.brand}</strong> | Size: {item.size} | Color: {item.color}
                  </p>
                  <p className="text-xs font-semibold text-neutral-700 mt-1">Qty: {item.qty}</p>
                </div>
                <div className="text-right">
                  <span className="font-bold font-mono text-base text-neutral-900">
                    {formatPrice(item.price)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Breakdown */}
        <div className="mt-6 pt-4 border-t border-neutral-100 space-y-2 text-sm">
          <div className="flex justify-between text-neutral-600">
            <span>Item Subtotal</span>
            <span className="font-mono text-neutral-900">{formatPrice(orderData.subtotal)}</span>
          </div>
          <div className="flex justify-between text-emerald-600">
            <span>Promo Savings</span>
            <span className="font-mono">-{formatPrice(orderData.discount)}</span>
          </div>
          <div className="flex justify-between text-neutral-600">
            <span>Express Delivery</span>
            <span className="text-emerald-600 font-bold">FREE</span>
          </div>
          <div className="flex justify-between font-bold text-lg text-neutral-900 pt-2 border-t">
            <span>Paid Total</span>
            <span className="font-mono">{formatPrice(orderData.total)}</span>
          </div>
        </div>
      </div>

      {/* GST Invoice Modal */}
      {showInvoice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-3xl p-8 shadow-2xl border border-neutral-200 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start border-b pb-4">
              <div>
                <h2 className="text-2xl font-black text-primary-600 font-display">NexMart</h2>
                <p className="text-xs text-neutral-500 mt-0.5">
                  NexMart India Retail Pvt. Ltd. · Sayajigunj, Vadodara, Gujarat 390001
                </p>
                <p className="text-[11px] font-mono text-neutral-400">GSTIN: 24AAACN1234F1Z5</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold uppercase bg-neutral-100 px-3 py-1 rounded-full text-neutral-700">
                  Tax Invoice
                </span>
                <p className="font-mono text-xs font-bold mt-2">INV-2026-{orderData.id.slice(0, 8)}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <p className="font-bold text-neutral-800">Billed &amp; Shipped To:</p>
                <p className="font-semibold text-neutral-700">{orderData.deliveryAddress.name}</p>
                <p className="text-neutral-500">{orderData.deliveryAddress.street}</p>
                <p className="text-neutral-500">{orderData.deliveryAddress.city} - {orderData.deliveryAddress.pincode}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-neutral-800">Payment Details:</p>
                <p className="text-neutral-600">Mode: Razorpay / UPI Verified</p>
                <p className="text-neutral-600">Transaction ID: TXN_VD_{Date.now().toString().slice(-8)}</p>
                <p className="text-neutral-600">Date: {orderData.date}</p>
              </div>
            </div>

            <table className="w-full text-xs text-left border border-neutral-200 rounded-xl overflow-hidden">
              <thead className="bg-neutral-100 font-bold text-neutral-700">
                <tr>
                  <th className="p-2.5">Item Description</th>
                  <th className="p-2.5 text-center">HSN</th>
                  <th className="p-2.5 text-center">Qty</th>
                  <th className="p-2.5 text-right">Net Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 font-medium text-neutral-700">
                {orderData.items.map((item) => (
                  <tr key={item.id}>
                    <td className="p-2.5 font-semibold">{item.name} ({item.size})</td>
                    <td className="p-2.5 text-center font-mono">6104</td>
                    <td className="p-2.5 text-center">{item.qty}</td>
                    <td className="p-2.5 text-right font-mono">{formatPrice(item.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-between items-center text-xs text-neutral-500 pt-2 border-t">
              <span>Includes 9% CGST + 9% SGST Gujarat State Taxes.</span>
              <span className="text-base font-bold text-neutral-900 font-mono">
                Total: {formatPrice(orderData.total)}
              </span>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.print()}
                className="flex items-center gap-1.5"
              >
                <Printer className="w-4 h-4" /> Print
              </Button>
              <Button size="sm" onClick={() => setShowInvoice(false)}>
                Done
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}