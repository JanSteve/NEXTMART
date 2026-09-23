const fs = require('fs');
const path = require('path');

const files = {
  "src/app/auth/login/page.tsx": `"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [tab, setTab] = useState<'email' | 'phone'>('email');
  const [showPwd, setShowPwd] = useState(false);

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-50 via-white to-primary-50/30">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-card border border-neutral-100">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <span className="font-display text-3xl font-bold tracking-tight text-primary-500">Nex</span>
            <span className="font-display text-3xl font-bold tracking-tight text-neutral-900">Mart</span>
          </Link>
          <h2 className="text-2xl font-display font-bold text-neutral-900">Welcome back</h2>
          <p className="mt-2 text-sm text-neutral-500">Please sign in to your account</p>
        </div>
        
        <div className="flex bg-neutral-100 p-1 rounded-lg mb-6">
          <button className={\`flex-1 py-2 text-sm font-bold rounded-md transition-all \${tab === 'email' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-500 hover:text-neutral-700'}\`} onClick={() => setTab('email')}>Email</button>
          <button className={\`flex-1 py-2 text-sm font-bold rounded-md transition-all \${tab === 'phone' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-500 hover:text-neutral-700'}\`} onClick={() => setTab('phone')}>Phone (OTP)</button>
        </div>

        <form className="space-y-4" onSubmit={e => e.preventDefault()}>
          {tab === 'email' ? (
            <>
              <Input label="Email Address" type="email" placeholder="you@example.com" className="bg-neutral-50 focus:bg-white" required />
              <div className="relative">
                <Input label="Password" type={showPwd ? "text" : "password"} placeholder="••••••••" className="bg-neutral-50 focus:bg-white pr-10" required />
                <button type="button" className="absolute right-3 top-[34px] text-neutral-400 hover:text-neutral-600" onClick={() => setShowPwd(!showPwd)}>
                  {showPwd ? <EyeOff className="w-5 h-5"/> : <Eye className="w-5 h-5"/>}
                </button>
              </div>
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 text-sm font-medium text-neutral-600 cursor-pointer">
                  <input type="checkbox" className="rounded text-primary-500 focus:ring-primary-500 border-neutral-300" /> Remember me
                </label>
                <Link href="/auth/forgot-password" className="text-sm font-bold text-primary-600 hover:text-primary-700">Forgot password?</Link>
              </div>
            </>
          ) : (
            <>
              <Input label="Mobile Number" type="tel" placeholder="+1 234 567 8900" className="bg-neutral-50 focus:bg-white" required />
            </>
          )}
          <Button type="submit" size="lg" className="w-full font-bold shadow-md shadow-primary-500/20 mt-2">{tab === 'email' ? 'Sign in' : 'Send OTP'}</Button>
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-neutral-200" /></div>
            <div className="relative flex justify-center text-xs font-semibold uppercase text-neutral-400"><span className="px-3 bg-white">or continue with</span></div>
          </div>
          <div className="mt-6">
            <Button variant="outline" className="w-full flex items-center justify-center gap-3 font-bold border-neutral-200 hover:bg-neutral-50 text-neutral-700">
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
              Google
            </Button>
          </div>
        </div>
        <p className="mt-8 text-center text-sm font-medium text-neutral-600">
          New to NexMart? <Link href="/auth/register" className="font-bold text-primary-600 hover:text-primary-700">Create Account</Link>
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
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-bl from-neutral-50 via-white to-primary-50/30">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-card border border-neutral-100">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <span className="font-display text-3xl font-bold tracking-tight text-primary-500">Nex</span>
            <span className="font-display text-3xl font-bold tracking-tight text-neutral-900">Mart</span>
          </Link>
          <h2 className="text-2xl font-display font-bold text-neutral-900">Create an account</h2>
          <p className="mt-2 text-sm text-neutral-500">Join NexMart today</p>
        </div>
        
        <form className="space-y-4" onSubmit={e => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <Input label="First Name" placeholder="John" className="bg-neutral-50 focus:bg-white" required />
            <Input label="Last Name" placeholder="Doe" className="bg-neutral-50 focus:bg-white" required />
          </div>
          <Input label="Email Address" type="email" placeholder="you@example.com" className="bg-neutral-50 focus:bg-white" required />
          <Input label="Phone Number (Optional)" type="tel" placeholder="+1 234 567 8900" className="bg-neutral-50 focus:bg-white" />
          
          <div>
            <Input label="Password" type="password" placeholder="••••••••" className="bg-neutral-50 focus:bg-white mb-2" required />
            <div className="flex gap-1 h-1 w-full mb-1">
              <div className="flex-1 bg-error-500 rounded-full"></div>
              <div className="flex-1 bg-accent-500 rounded-full"></div>
              <div className="flex-1 bg-neutral-200 rounded-full"></div>
            </div>
            <p className="text-xs font-semibold text-accent-600 text-right">Medium</p>
          </div>
          
          <Input label="Confirm Password" type="password" placeholder="••••••••" className="bg-neutral-50 focus:bg-white" required />
          
          <Button type="submit" size="lg" className="w-full mt-4 font-bold shadow-md shadow-primary-500/20">Create Account</Button>
        </form>

        <p className="mt-8 text-center text-sm font-medium text-neutral-600">
          Already have an account? <Link href="/auth/login" className="font-bold text-primary-600 hover:text-primary-700">Login here</Link>
        </p>
      </div>
    </div>
  );
}`,

  "src/app/account/layout.tsx": `"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Package, MapPin, Heart, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const links = [
    { href: '/account', label: 'Profile Settings', icon: User, exact: true },
    { href: '/account/orders', label: 'My Orders', icon: Package },
    { href: '/account/addresses', label: 'Saved Addresses', icon: MapPin },
    { href: '/account/wishlist', label: 'Wishlist', icon: Heart },
  ];

  return (
    <div className="bg-neutral-50 min-h-[80vh] py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-2xl font-display font-bold text-neutral-900 mb-6">My Account</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-[280px] flex-shrink-0">
            <div className="bg-white rounded-xl border border-neutral-100 shadow-card overflow-hidden sticky top-24">
              <div className="p-6 flex items-center gap-4 bg-neutral-900 text-white">
                <div className="w-14 h-14 rounded-full bg-primary-500 flex items-center justify-center font-display font-bold text-xl border-2 border-primary-400">JD</div>
                <div>
                  <h2 className="font-display font-bold text-lg">John Doe</h2>
                  <p className="text-xs text-neutral-400">john@example.com</p>
                </div>
              </div>
              <nav className="flex flex-row md:flex-col p-2 overflow-x-auto no-scrollbar border-b md:border-b-0 border-neutral-100">
                {links.map((link) => {
                  const Icon = link.icon;
                  const isActive = link.exact ? pathname === link.href : pathname.startsWith(link.href);
                  return (
                    <Link key={link.href} href={link.href} className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg font-bold text-sm whitespace-nowrap transition-colors",
                      isActive ? "bg-primary-50 text-primary-700" : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                    )}>
                      <Icon className={cn("w-5 h-5", isActive ? "text-primary-600" : "text-neutral-400")} />
                      {link.label}
                    </Link>
                  );
                })}
                <hr className="my-2 border-neutral-100 hidden md:block mx-4" />
                <button className="flex items-center gap-3 px-4 py-3 rounded-lg font-bold text-sm text-error-600 hover:bg-error-50 transition-colors w-full text-left">
                  <LogOut className="w-5 h-5 opacity-70" /> Logout
                </button>
              </nav>
            </div>
          </aside>
          <main className="flex-1 bg-white rounded-xl border border-neutral-100 shadow-card p-6 md:p-8 min-h-[500px]">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}`,

  "src/app/account/page.tsx": `"use client";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function ProfilePage() {
  return (
    <div className="animate-in fade-in duration-500">
      <h2 className="text-xl font-display font-bold text-neutral-900 mb-6 border-b border-neutral-100 pb-4">Profile Information</h2>
      <form className="max-w-2xl space-y-6" onSubmit={e => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Input label="First Name" defaultValue="John" className="bg-neutral-50" />
          <Input label="Last Name" defaultValue="Doe" className="bg-neutral-50" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Input label="Email Address" defaultValue="john@example.com" disabled className="bg-neutral-100 text-neutral-500" />
          <Input label="Phone Number" defaultValue="+1 234 567 8900" className="bg-neutral-50" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Input label="Date of Birth" type="date" defaultValue="1990-01-01" className="bg-neutral-50" />
          <div>
            <label className="text-sm font-semibold text-neutral-700 mb-2 block">Gender</label>
            <div className="flex gap-4 p-2">
              {['Male', 'Female', 'Other'].map(g => (
                <label key={g} className="flex items-center gap-2 cursor-pointer group">
                  <input type="radio" name="gender" className="text-primary-500 focus:ring-primary-500 w-4 h-4 border-neutral-300" defaultChecked={g === 'Male'} />
                  <span className="text-sm font-medium text-neutral-700 group-hover:text-neutral-900">{g}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-neutral-100">
          <Button type="submit" size="lg" className="font-bold px-8 shadow-md">Save Changes</Button>
        </div>
      </form>
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
