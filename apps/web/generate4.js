const fs = require('fs');
const path = require('path');

const files = {
  "src/app/account/orders/[id]/page.tsx": `import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { ChevronLeft, Package, Truck, CheckCircle2 } from "lucide-react";

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Link href="/account/orders" className="text-gray-500 hover:text-gray-900">
          <ChevronLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-bold">Order Details</h1>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center mb-8 border border-gray-100">
        <div>
          <p className="text-sm text-gray-500">Order ID</p>
          <p className="font-bold">{params.id}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Order Date</p>
          <p className="font-medium">Sep 20, 2023</p>
        </div>
      </div>

      <div className="mb-8 relative border-l-2 border-gray-200 ml-4 space-y-8">
        <div className="relative pl-8">
          <div className="absolute -left-[11px] top-1 bg-success-500 text-white w-5 h-5 rounded-full flex items-center justify-center border-4 border-white"><CheckCircle2 className="w-3 h-3" /></div>
          <h3 className="font-bold text-gray-900">Order Placed</h3>
          <p className="text-sm text-gray-500">Sep 20, 10:00 AM</p>
        </div>
        <div className="relative pl-8">
          <div className="absolute -left-[11px] top-1 bg-primary-500 text-white w-5 h-5 rounded-full flex items-center justify-center border-4 border-white"><Package className="w-3 h-3" /></div>
          <h3 className="font-bold text-gray-900">Packed</h3>
          <p className="text-sm text-gray-500">Sep 21, 09:00 AM</p>
        </div>
        <div className="relative pl-8 opacity-50">
          <div className="absolute -left-[11px] top-1 bg-gray-200 text-white w-5 h-5 rounded-full border-4 border-white"><Truck className="w-3 h-3" /></div>
          <h3 className="font-bold text-gray-900">Out for Delivery</h3>
          <p className="text-sm text-gray-500">Pending</p>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h2 className="font-bold mb-4">Items in Order</h2>
        <div className="flex gap-4 p-4 border border-gray-200 rounded-lg">
          <div className="w-16 h-16 bg-gray-100 rounded-md" />
          <div className="flex-1">
            <h4 className="font-medium">Wireless Headphones</h4>
            <p className="text-sm text-gray-500">Qty: 1</p>
          </div>
          <div className="font-bold font-mono">{formatPrice(199.99)}</div>
        </div>
      </div>
    </div>
  );
}`,

  "src/app/account/addresses/page.tsx": `import { Button } from "@/components/ui/Button";
import { Plus, Edit2, Trash2 } from "lucide-react";

export default function AddressesPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Saved Addresses</h1>
        <Button size="sm" className="gap-2"><Plus className="w-4 h-4" /> Add New</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border-2 border-primary-500 rounded-lg p-4 relative">
          <div className="absolute top-4 right-4 text-xs font-bold bg-primary-100 text-primary-700 px-2 py-1 rounded">DEFAULT</div>
          <h3 className="font-bold mb-1">John Doe</h3>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            123 Main St, Apt 4B<br />
            New York, NY 10001<br />
            Phone: +1 234 567 8900
          </p>
          <div className="flex gap-3">
            <button className="text-sm font-medium text-gray-600 flex items-center gap-1 hover:text-primary-500"><Edit2 className="w-4 h-4" /> Edit</button>
            <button className="text-sm font-medium text-error-500 flex items-center gap-1 hover:text-error-600"><Trash2 className="w-4 h-4" /> Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}`,

  "src/app/account/wishlist/page.tsx": `import { MOCK_PRODUCTS } from "@/lib/constants";
import ProductCard from "@/components/product/ProductCard";

export default function WishlistPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_PRODUCTS.slice(0, 3).map(product => (
          <ProductCard key={product.id} product={product as any} />
        ))}
      </div>
    </div>
  );
}`,

  "src/app/search/page.tsx": `"use client";
import { MOCK_PRODUCTS } from "@/lib/constants";
import ProductCard from "@/components/product/ProductCard";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  
  // Basic mock filter
  const results = MOCK_PRODUCTS.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">Search Results</h1>
      <p className="text-gray-500 mb-8">{results.length} results found for <span className="font-semibold text-gray-900">"{query}"</span></p>
      
      {results.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {results.map(product => (
            <ProductCard key={product.id} product={product as any} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-xl font-bold mb-2">No results found</h2>
          <p className="text-gray-500">Try checking your spelling or use more general terms</p>
        </div>
      )}
    </div>
  );
}`,

  "src/app/category/[slug]/page.tsx": `import { MOCK_PRODUCTS, CATEGORIES } from "@/lib/constants";
import ProductCard from "@/components/product/ProductCard";
import { notFound } from "next/navigation";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = CATEGORIES.find(c => c.slug === params.slug);
  if (!category) return notFound();
  
  const results = MOCK_PRODUCTS.filter(p => p.category === category.slug);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-primary-50 rounded-xl p-8 mb-8 text-center">
        <div className="text-4xl mb-4">{category.icon}</div>
        <h1 className="text-3xl font-heading font-bold mb-2">{category.name}</h1>
        <p className="text-gray-600">{results.length} products available</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {results.map(product => (
          <ProductCard key={product.id} product={product as any} />
        ))}
      </div>
    </div>
  );
}`,

  "src/app/error.tsx": `"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function Error({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="w-16 h-16 bg-error-100 text-error-500 rounded-full flex items-center justify-center mb-6 text-2xl">!</div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong on our side</h2>
      <p className="text-gray-500 mb-8 max-w-md">We apologize for the inconvenience. Please try again.</p>
      <div className="flex gap-4">
        <Button onClick={() => reset()}>Try Again</Button>
        <Button variant="outline">Contact Support</Button>
      </div>
    </div>
  );
}`,

  "src/components/ui/EmptyState.tsx": `import { ReactNode } from "react";

export function EmptyState({ icon, title, description, action }: { icon: ReactNode, title: string, description: string, action?: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-4xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 max-w-sm mb-6">{description}</p>
      {action}
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
