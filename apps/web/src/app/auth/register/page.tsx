"use client";
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
}