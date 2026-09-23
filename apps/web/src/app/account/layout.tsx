"use client";
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
}