const fs = require('fs');
const path = require('path');

const files = {
  "src/lib/utils.ts": `import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

export function calculateDiscount(mrp: number, price: number) {
  return Math.round(((mrp - price) / mrp) * 100);
}`,

  "src/lib/constants.ts": `export const CATEGORIES = [
  { id: '1', name: 'Mobiles', icon: '📱', slug: 'mobiles' },
  { id: '2', name: 'Fashion', icon: '👕', slug: 'fashion' },
  { id: '3', name: 'Electronics', icon: '💻', slug: 'electronics' },
  { id: '4', name: 'Home', icon: '🛋️', slug: 'home' },
  { id: '5', name: 'Beauty', icon: '💄', slug: 'beauty' },
  { id: '6', name: 'Appliances', icon: '📺', slug: 'appliances' },
  { id: '7', name: 'Toys', icon: '🧸', slug: 'toys' },
  { id: '8', name: 'Sports', icon: '⚽', slug: 'sports' },
];

export const MOCK_PRODUCTS = Array.from({ length: 30 }).map((_, i) => {
  const mrp = Math.floor(Math.random() * 500) + 100;
  const price = mrp - Math.floor(Math.random() * (mrp * 0.4));
  return {
    id: \`prod-\${i + 1}\`,
    name: \`Awesome Product \${i + 1} with great features and design\`,
    slug: \`awesome-product-\${i + 1}\`,
    price,
    mrp,
    rating: (Math.random() * 2 + 3).toFixed(1),
    reviewCount: Math.floor(Math.random() * 1000) + 50,
    image: \`https://picsum.photos/seed/prod\${i}/400/300\`,
    category: CATEGORIES[i % CATEGORIES.length].slug,
    description: "This is a detailed description of the product. It has amazing features, great build quality, and is highly recommended by our users.",
    variants: [
      { name: 'Color', options: ['Red', 'Blue', 'Black'] },
      { name: 'Size', options: ['S', 'M', 'L', 'XL'] }
    ],
    brand: \`Brand \${i % 5 + 1}\`
  };
});`,

  "src/lib/api.ts": `import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  if (token) {
    config.headers.Authorization = \`Bearer \${token}\`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
      if (typeof window !== 'undefined') {
        window.location.href = '/auth/login';
      }
    }
    return Promise.reject(error);
  }
);`,

  "src/store/ui.ts": `import { create } from 'zustand';

interface UIState {
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (isOpen: boolean) => void;
  isCartOpen: boolean;
  setCartOpen: (isOpen: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isMobileMenuOpen: false,
  setMobileMenuOpen: (isOpen) => set({ isMobileMenuOpen: isOpen }),
  isCartOpen: false,
  setCartOpen: (isOpen) => set({ isCartOpen: isOpen }),
}));`,

  "src/store/auth.ts": `import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      login: (user, token) => set({ user, token }),
      logout: () => set({ user: null, token: null }),
    }),
    {
      name: 'nexmart-auth',
    }
  )
);`,

  "src/components/ui/Button.tsx": `"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "bg-primary-500 text-white hover:bg-primary-600 shadow-sm",
      secondary: "bg-accent-500 text-white hover:bg-accent-600 shadow-sm",
      outline: "border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-900",
      ghost: "hover:bg-gray-100 hover:text-gray-900 text-gray-700",
    };
    
    const sizes = {
      sm: "h-8 px-3 text-xs",
      md: "h-10 px-4 py-2 text-sm",
      lg: "h-12 px-8 text-base",
    };

    return (
      <motion.button
        whileTap={{ scale: 0.98 }}
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
export { Button };`,

  "src/components/ui/Skeleton.tsx": `import { cn } from "@/lib/utils";

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-gray-200", className)}
      {...props}
    />
  );
}`,

  "src/components/ui/Input.tsx": `import { cn } from "@/lib/utils";
import { forwardRef, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
            error && "border-error-500 focus:ring-error-500",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <span className="text-xs text-error-500">{error}</span>}
      </div>
    );
  }
);
Input.displayName = "Input";
export { Input };`,

  "src/components/layout/Footer.tsx": `import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-heading font-bold text-white mb-4">
            <span className="text-primary-500">Nex</span>Mart
          </h3>
          <p className="text-sm text-gray-400 mb-6">
            Your one-stop destination for enterprise e-commerce solutions.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-primary-500 transition-colors">Home</Link></li>
            <li><Link href="/products" className="hover:text-primary-500 transition-colors">All Products</Link></li>
            <li><Link href="/cart" className="hover:text-primary-500 transition-colors">Cart</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/contact" className="hover:text-primary-500 transition-colors">Contact Us</Link></li>
            <li><Link href="/faq" className="hover:text-primary-500 transition-colors">FAQs</Link></li>
            <li><Link href="/shipping" className="hover:text-primary-500 transition-colors">Shipping Info</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Newsletter</h4>
          <p className="text-sm text-gray-400 mb-4">Subscribe to get special offers and updates.</p>
          <div className="flex">
            <input type="email" placeholder="Enter your email" className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-primary-500" />
            <button className="bg-primary-500 text-white px-4 py-2 rounded-r-md hover:bg-primary-600 transition-colors">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()} NexMart. All rights reserved.
      </div>
    </footer>
  );
}`,

  "src/app/products/page.tsx": `import { MOCK_PRODUCTS } from "@/lib/constants";
import ProductCard from "@/components/product/ProductCard";

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-heading font-bold mb-8">All Products</h1>
      <div className="flex gap-8">
        {/* Desktop Sidebar Stub */}
        <aside className="hidden md:block w-64 flex-shrink-0">
          <div className="sticky top-24 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h2 className="font-semibold text-lg mb-4">Filters</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-sm mb-2 text-gray-700">Categories</h3>
                <div className="space-y-2">
                  {['Mobiles', 'Fashion', 'Electronics'].map(c => (
                    <label key={c} className="flex items-center gap-2 text-sm text-gray-600">
                      <input type="checkbox" className="rounded text-primary-500 focus:ring-primary-500" />
                      {c}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm text-gray-500">{MOCK_PRODUCTS.length} results found</span>
            <select className="border border-gray-300 rounded-md text-sm px-3 py-1.5 focus:ring-primary-500 focus:border-primary-500">
              <option>Relevance</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Arrivals</option>
            </select>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {MOCK_PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product as any} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}`,

  "src/app/cart/page.tsx": `"use client";
import useCartStore from "@/store/cart";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Minus, Plus } from "lucide-react";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCartStore();

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const delivery = subtotal > 50 ? 0 : 5;
  const total = subtotal + delivery;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-48 h-48 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          <span className="text-6xl">🛍️</span>
        </div>
        <h1 className="text-2xl font-heading font-bold mb-2">Your cart feels lonely</h1>
        <p className="text-gray-500 mb-8">Add some items to make it happy!</p>
        <Link href="/products">
          <Button size="lg">Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-heading font-bold mb-8">Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-4">
          {items.map(item => (
            <div key={item.id} className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="relative w-24 h-24 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-medium text-gray-900 line-clamp-2">{item.name}</h3>
                  <p className="font-bold font-mono text-primary-900">{formatPrice(item.price)}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-gray-50 text-gray-600">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-gray-50 text-gray-600">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-error-500 hover:text-error-600 flex items-center gap-1 text-sm font-medium">
                    <Trash2 className="w-4 h-4" /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-80 flex-shrink-0">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm sticky top-24">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>
            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({items.length} items)</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Charges</span>
                <span className={delivery === 0 ? "text-success-500 font-medium" : ""}>
                  {delivery === 0 ? "FREE" : formatPrice(delivery)}
                </span>
              </div>
              <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-lg">
                <span>Total Amount</span>
                <span className="font-mono text-primary-900">{formatPrice(total)}</span>
              </div>
            </div>
            <Link href="/checkout">
              <Button className="w-full" size="lg">Proceed to Checkout</Button>
            </Link>
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
