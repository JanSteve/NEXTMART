const fs = require('fs');
const path = require('path');

const files = {
  "src/app/account/orders/page.tsx": `import { Button } from "@/components/ui/Button";
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
          <button key={tab} className={\`px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap transition-colors \${i===0 ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}\`}>
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
                  <span className={\`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded font-bold \${order.status === 'Delivered' ? 'bg-success-50 text-success-700' : 'bg-accent-50 text-accent-700'}\`}>
                    {order.status}
                  </span>
                </div>
                <p className="text-sm font-medium text-neutral-500">{order.date} • {order.items} items</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end border-t border-neutral-100 sm:border-0 pt-4 sm:pt-0">
              <span className="font-bold font-mono text-lg text-neutral-900">{formatPrice(order.total)}</span>
              <Link href={\`/account/orders/\${order.id}\`}>
                <Button variant="outline" className="group-hover:bg-neutral-900 group-hover:text-white transition-colors">Details <ChevronRight className="w-4 h-4 ml-1"/></Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`,

  "src/app/account/orders/[id]/page.tsx": `import { Button } from "@/components/ui/Button";
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
}`
};

for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.join(__dirname, filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content);
  console.log('Created:', filePath);
}
