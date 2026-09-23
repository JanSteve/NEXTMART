'use client';

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { Package, ChevronRight } from "lucide-react";
import Image from "next/image";

const MOCK_ORDERS = [
  { id: 'ORD-987654321', date: '2023-09-20', total: 199.99, status: 'Delivered', items: 2, image: 'https://picsum.photos/seed/prod0/100/100' },
  { id: 'ORD-123456789', date: '2023-10-15', total: 349.50, status: 'Processing', items: 1, image: 'https://picsum.photos/seed/prod1/100/100' },
];

export default function OrdersPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <h2 className="text-xl font-display font-bold text-neutral-900 mb-6">My Orders</h2>
      
      <div className="flex gap-2 overflow-x-auto no-scrollbar mb-6 border-b border-neutral-100 pb-2">
        {['All Orders', 'Active', 'Completed', 'Cancelled'].map((tab, i) => (
          <button key={tab} className={`px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${i===0 ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}`}>
            {tab}
          </button>
        ))}
      </div>
      
      <div className="space-y-4">
        {MOCK_ORDERS.map(order => (
          <div key={order.id} className="border border-neutral-100 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-neutral-200 hover:shadow-sm transition-all group">
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 bg-neutral-50 rounded-lg overflow-hidden border border-neutral-100 relative flex-shrink-0">
                <Image src={order.image} alt="Product" fill className="object-cover mix-blend-multiply" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-display font-bold text-neutral-900">{order.id}</span>
                  <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded font-bold ${order.status === 'Delivered' ? 'bg-success-50 text-success-700' : 'bg-accent-50 text-accent-700'}`}>
                    {order.status}
                  </span>
                </div>
                <p className="text-sm font-medium text-neutral-500">{order.date} • {order.items} items</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end border-t border-neutral-100 sm:border-0 pt-4 sm:pt-0">
              <span className="font-bold font-mono text-lg text-neutral-900">{formatPrice(order.total)}</span>
              <Link href={`/account/orders/${order.id}`}>
                <Button variant="outline" className="group-hover:bg-neutral-900 group-hover:text-white transition-colors">Details <ChevronRight className="w-4 h-4 ml-1"/></Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}