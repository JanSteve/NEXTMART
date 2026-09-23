const fs = require('fs');
const path = require('path');

const files = {
  "src/app/auth/login/page.tsx": `"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function LoginPage() {
  const [tab, setTab] = useState<'email' | 'phone'>('email');
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-heading font-bold text-gray-900">Welcome back</h2>
          <p className="mt-2 text-sm text-gray-600">Please sign in to your account</p>
        </div>
        
        <div className="flex border-b border-gray-200 mb-6">
          <button className={\`flex-1 pb-3 text-sm font-medium border-b-2 transition-colors \${tab === 'email' ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700'}\`} onClick={() => setTab('email')}>Email</button>
          <button className={\`flex-1 pb-3 text-sm font-medium border-b-2 transition-colors \${tab === 'phone' ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700'}\`} onClick={() => setTab('phone')}>Phone (OTP)</button>
        </div>

        <form className="space-y-4" onSubmit={e => e.preventDefault()}>
          {tab === 'email' ? (
            <>
              <Input label="Email Address" type="email" placeholder="you@example.com" required />
              <Input label="Password" type="password" placeholder="••••••••" required />
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" className="rounded text-primary-500" /> Remember me
                </label>
                <Link href="/auth/forgot-password" className="text-sm font-medium text-primary-600 hover:text-primary-500">Forgot password?</Link>
              </div>
            </>
          ) : (
            <>
              <Input label="Mobile Number" type="tel" placeholder="+1 234 567 8900" required />
            </>
          )}
          <Button type="submit" className="w-full">{tab === 'email' ? 'Sign in' : 'Send OTP'}</Button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200" /></div>
            <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-gray-500">Or continue with</span></div>
          </div>
          <div className="mt-6">
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
              Google
            </Button>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-gray-600">
          Don't have an account? <Link href="/auth/register" className="font-medium text-primary-600 hover:text-primary-500">Register here</Link>
        </p>
      </div>
    </div>
  );
}`,

  "src/app/auth/register/page.tsx": `"use client";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-heading font-bold text-gray-900">Create an account</h2>
          <p className="mt-2 text-sm text-gray-600">Join NexMart today</p>
        </div>
        
        <form className="space-y-4" onSubmit={e => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <Input label="First Name" placeholder="John" required />
            <Input label="Last Name" placeholder="Doe" required />
          </div>
          <Input label="Email Address" type="email" placeholder="you@example.com" required />
          <Input label="Phone Number (Optional)" type="tel" placeholder="+1 234 567 8900" />
          <Input label="Password" type="password" placeholder="••••••••" required />
          <Input label="Confirm Password" type="password" placeholder="••••••••" required />
          
          <Button type="submit" className="w-full mt-2">Create Account</Button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600">
          Already have an account? <Link href="/auth/login" className="font-medium text-primary-600 hover:text-primary-500">Login here</Link>
        </p>
      </div>
    </div>
  );
}`,

  "src/app/account/layout.tsx": `import Link from "next/link";
import { User, Package, MapPin, Heart } from "lucide-react";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const links = [
    { href: '/account', label: 'Profile', icon: User },
    { href: '/account/orders', label: 'Orders', icon: Package },
    { href: '/account/addresses', label: 'Addresses', icon: MapPin },
    { href: '/account/wishlist', label: 'Wishlist', icon: Heart },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm mb-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-xl">JD</div>
              <div>
                <h2 className="font-bold">John Doe</h2>
                <p className="text-sm text-gray-500">john@example.com</p>
              </div>
            </div>
            <nav className="flex flex-row md:flex-col gap-2 overflow-x-auto no-scrollbar">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <Link key={link.href} href={link.href} className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-50 text-gray-700 font-medium text-sm whitespace-nowrap">
                    <Icon className="w-5 h-5 text-gray-400" />
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </aside>
        <main className="flex-1 bg-white rounded-lg p-6 border border-gray-200 shadow-sm min-h-[500px]">
          {children}
        </main>
      </div>
    </div>
  );
}`,

  "src/app/account/page.tsx": `"use client";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function ProfilePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Profile Settings</h1>
      <form className="max-w-xl space-y-6" onSubmit={e => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-4">
          <Input label="First Name" defaultValue="John" />
          <Input label="Last Name" defaultValue="Doe" />
        </div>
        <Input label="Email Address" defaultValue="john@example.com" disabled />
        <Input label="Phone Number" defaultValue="+1 234 567 8900" />
        <Input label="Date of Birth" type="date" defaultValue="1990-01-01" />
        
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">Gender</label>
          <div className="flex gap-4">
            {['Male', 'Female', 'Other'].map(g => (
              <label key={g} className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="gender" className="text-primary-500" defaultChecked={g === 'Male'} />
                <span className="text-sm">{g}</span>
              </label>
            ))}
          </div>
        </div>
        
        <Button>Save Changes</Button>
      </form>
    </div>
  );
}`,

  "src/app/account/orders/page.tsx": `import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";

const MOCK_ORDERS = [
  { id: 'ORD-987654321', date: '2023-09-20', total: 199.99, status: 'Delivered', items: 2 },
  { id: 'ORD-123456789', date: '2023-10-15', total: 349.50, status: 'Processing', items: 1 },
];

export default function OrdersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Order History</h1>
      <div className="flex gap-4 mb-6 border-b border-gray-200">
        {['All Orders', 'Active', 'Completed', 'Cancelled'].map((tab, i) => (
          <button key={tab} className={\`pb-2 text-sm font-medium border-b-2 \${i===0 ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500'}\`}>
            {tab}
          </button>
        ))}
      </div>
      
      <div className="space-y-4">
        {MOCK_ORDERS.map(order => (
          <div key={order.id} className="border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="font-bold">{order.id}</span>
                <span className={\`text-xs px-2 py-1 rounded-full font-medium \${order.status === 'Delivered' ? 'bg-success-100 text-success-700' : 'bg-accent-100 text-accent-700'}\`}>
                  {order.status}
                </span>
              </div>
              <p className="text-sm text-gray-500">Placed on {order.date} • {order.items} items • <span className="font-bold text-gray-900">{formatPrice(order.total)}</span></p>
            </div>
            <Link href={\`/account/orders/\${order.id}\`}>
              <Button variant="outline" size="sm">View Details</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}`,

  "src/app/loading.tsx": `export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 animate-pulse">
      <div className="h-64 bg-gray-200 rounded-lg mb-8 w-full" />
      <div className="h-8 bg-gray-200 rounded w-1/4 mb-6" />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="bg-white p-4 rounded-lg border border-gray-100">
            <div className="aspect-[4/3] bg-gray-200 rounded-md mb-4" />
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
            <div className="h-10 bg-gray-200 rounded w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}`,

  "src/app/not-found.tsx": `import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-9xl font-heading font-bold text-gray-200 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Looks like this page went for a walk</h2>
      <p className="text-gray-500 mb-8 max-w-md">The page you are looking for doesn't exist or has been moved.</p>
      <Link href="/">
        <Button size="lg">Back to Home</Button>
      </Link>
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
