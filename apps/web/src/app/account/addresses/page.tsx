'use client';

import { Button } from "@/components/ui/Button";
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
}