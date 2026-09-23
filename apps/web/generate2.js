const fs = require('fs');
const path = require('path');

const files = {
  "src/components/ui/Badge.tsx": `import { cn } from "@/lib/utils";

export function Badge({ children, variant = 'default', className }: { children: React.ReactNode, variant?: 'default' | 'success' | 'error' | 'warning', className?: string }) {
  const variants = {
    default: "bg-gray-100 text-gray-800",
    success: "bg-success-500/10 text-success-500",
    error: "bg-error-500/10 text-error-500",
    warning: "bg-accent-500/10 text-accent-600",
  };
  return (
    <span className={cn("inline-flex items-center px-2 py-0.5 rounded text-xs font-medium", variants[variant], className)}>
      {children}
    </span>
  );
}`,

  "src/components/ui/Breadcrumb.tsx": `import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumb({ items }: { items: { label: string, href: string }[] }) {
  return (
    <nav className="flex text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        {items.map((item, index) => (
          <li key={item.href} className="inline-flex items-center">
            {index > 0 && <ChevronRight className="w-4 h-4 mx-1" />}
            <Link href={item.href} className="hover:text-primary-500 transition-colors">
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}`,

  "src/components/product/ProductGallery.tsx": `"use client";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ProductGallery({ images }: { images: string[] }) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      <div className="flex md:flex-col gap-2 overflow-x-auto md:w-20 flex-shrink-0 hide-scrollbar">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveImage(img)}
            className={cn("relative w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden border-2 flex-shrink-0 transition-colors", activeImage === img ? "border-primary-500" : "border-transparent hover:border-gray-300")}
          >
            <Image src={img} alt={\`Thumbnail \${i}\`} fill className="object-cover" />
          </button>
        ))}
      </div>
      <div className="relative flex-1 aspect-square md:aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden group cursor-crosshair">
        <Image src={activeImage} alt="Product Image" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
    </div>
  );
}`,

  "src/components/checkout/CheckoutProgress.tsx": `import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const steps = ["Cart", "Address", "Summary", "Payment", "Confirm"];

export function CheckoutProgress({ currentStep }: { currentStep: number }) {
  return (
    <div className="flex items-center justify-between w-full mb-8 relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 -z-10" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary-500 -z-10 transition-all duration-500" style={{ width: \`\${((currentStep - 1) / (steps.length - 1)) * 100}%\` }} />
      
      {steps.map((step, index) => {
        const stepNum = index + 1;
        const isActive = stepNum === currentStep;
        const isCompleted = stepNum < currentStep;
        
        return (
          <div key={step} className="flex flex-col items-center gap-2 bg-white px-2">
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors",
              isCompleted ? "bg-primary-500 border-primary-500 text-white" :
              isActive ? "border-primary-500 text-primary-500" : "border-gray-300 text-gray-400 bg-white"
            )}>
              {isCompleted ? <Check className="w-4 h-4" /> : stepNum}
            </div>
            <span className={cn("text-xs font-medium hidden sm:block", isActive || isCompleted ? "text-gray-900" : "text-gray-400")}>{step}</span>
          </div>
        );
      })}
    </div>
  );
}`,

  "src/app/products/[slug]/page.tsx": `import { MOCK_PRODUCTS } from "@/lib/constants";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import ProductGallery from "@/components/product/ProductGallery";
import { Button } from "@/components/ui/Button";
import { Star, Truck, Shield, RotateCcw } from "lucide-react";
import { formatPrice } from "@/lib/utils";

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = MOCK_PRODUCTS.find(p => p.slug === params.slug) || MOCK_PRODUCTS[0];
  
  const images = [
    product.image,
    \`https://picsum.photos/seed/\${product.id}a/400/500\`,
    \`https://picsum.photos/seed/\${product.id}b/400/500\`,
    \`https://picsum.photos/seed/\${product.id}c/400/500\`
  ];

  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: product.name, href: \`#\` }]} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-6">
        <ProductGallery images={images} />
        
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-2">{product.name}</h1>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center bg-success-500 text-white px-2 py-0.5 rounded text-sm font-medium gap-1">
              {product.rating} <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-sm text-gray-500 underline">{product.reviewCount} Ratings</span>
            <span className="text-sm font-medium text-gray-700 ml-auto">{product.brand}</span>
          </div>
          
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-3xl font-bold font-mono text-gray-900">{formatPrice(product.price)}</span>
            <span className="text-lg text-gray-500 line-through font-mono">{formatPrice(product.mrp)}</span>
            <span className="text-success-500 font-bold">{discount}% OFF</span>
          </div>

          <p className="text-gray-600 mb-6 line-clamp-3">{product.description}</p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-6 border-t border-gray-100">
            <Button size="lg" className="flex-1">Add to Cart</Button>
            <Button size="lg" variant="secondary" className="flex-1">Buy Now</Button>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-100 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600">
                <Truck className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium">Free Delivery</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600">
                <RotateCcw className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium">7 Days Return</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium">1 Year Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`,

  "src/app/checkout/page.tsx": `"use client";
import { useState } from "react";
import { CheckoutProgress } from "@/components/checkout/CheckoutProgress";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const [step, setStep] = useState(2); // Start at Address for demo

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-2xl font-heading font-bold mb-8">Checkout</h1>
        <CheckoutProgress currentStep={step} />
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mt-8">
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold">Delivery Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Full Name" placeholder="John Doe" />
                <Input label="Mobile Number" placeholder="+1 234 567 8900" />
                <Input label="PIN Code" placeholder="100001" />
                <Input label="City" placeholder="New York" />
                <div className="md:col-span-2">
                  <Input label="Address (House No, Building, Street, Area)" placeholder="123 Main St" />
                </div>
              </div>
              <Button onClick={() => setStep(4)} className="w-full sm:w-auto">Deliver Here (Skip to Payment)</Button>
            </div>
          )}
          
          {step === 4 && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold">Payment Method</h2>
              <div className="space-y-3">
                {['UPI', 'Credit / Debit Card', 'Net Banking', 'Cash on Delivery'].map((method, i) => (
                  <label key={method} className="flex items-center gap-3 p-4 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50 transition-colors">
                    <input type="radio" name="payment" className="text-primary-500 focus:ring-primary-500" defaultChecked={i === 0} />
                    <span className="font-medium text-gray-900">{method}</span>
                  </label>
                ))}
              </div>
              <Button onClick={() => setStep(5)} className="w-full">Pay Now</Button>
            </div>
          )}

          {step === 5 && (
            <div className="text-center py-12 flex flex-col items-center">
              <CheckCircle2 className="w-20 h-20 text-success-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Order Placed Successfully!</h2>
              <p className="text-gray-500 mb-8">Your order ID is #ORD-987654321. We will send you an email with tracking details.</p>
              <div className="flex gap-4">
                <Link href="/account/orders">
                  <Button variant="outline">View Orders</Button>
                </Link>
                <Link href="/">
                  <Button>Continue Shopping</Button>
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
