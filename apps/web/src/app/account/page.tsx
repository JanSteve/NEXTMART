"use client";
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
}