"use client";
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
          <button className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${tab === 'email' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-500 hover:text-neutral-700'}`} onClick={() => setTab('email')}>Email</button>
          <button className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${tab === 'phone' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-500 hover:text-neutral-700'}`} onClick={() => setTab('phone')}>Phone (OTP)</button>
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
}