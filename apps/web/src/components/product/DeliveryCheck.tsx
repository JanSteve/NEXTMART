'use client';

import { useState } from 'react';
import { MapPin, Truck, Clock } from 'lucide-react';
import { isValidPincode, formatDeliveryDate } from '@/lib/utils';

export function DeliveryCheck() {
  const [pincode, setPincode] = useState('');
  const [result, setResult] = useState<{
    available: boolean;
    eta?: string;
    cod?: boolean;
  } | null>(null);
  const [error, setError] = useState('');

  const checkDelivery = () => {
    setError('');
    if (!isValidPincode(pincode)) {
      setError('Please enter a valid 6-digit pincode');
      return;
    }
    // Mock delivery check
    const daysFromNow = Math.floor(Math.random() * 4) + 2;
    setResult({
      available: true,
      eta: formatDeliveryDate(daysFromNow),
      cod: true,
    });
  };

  return (
    <div className="space-y-2.5">
      <p className="flex items-center gap-1.5 text-sm font-medium text-neutral-700">
        <MapPin className="h-4 w-4 text-neutral-400" />
        Check Delivery
      </p>
      <div className="flex gap-2">
        <input
          type="text"
          value={pincode}
          onChange={(e) => {
            const v = e.target.value.replace(/\D/g, '').slice(0, 6);
            setPincode(v);
            setResult(null);
            setError('');
          }}
          placeholder="Enter pincode"
          maxLength={6}
          className="w-40 rounded-md border border-neutral-200 px-3 py-2 text-sm outline-none transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
        />
        <button
          onClick={checkDelivery}
          className="rounded-md border border-primary-500 px-4 py-2 text-sm font-semibold text-primary-600 transition-colors hover:bg-primary-50"
        >
          Check
        </button>
      </div>
      {error && <p className="text-xs text-error-500">{error}</p>}
      {result?.available && (
        <div className="rounded-md bg-success-50 px-3 py-2">
          <div className="flex items-center gap-2 text-sm text-success-700">
            <Truck className="h-4 w-4" />
            <span>
              Delivery by <span className="font-semibold">{result.eta}</span>
            </span>
          </div>
          {result.cod && (
            <div className="mt-1 flex items-center gap-2 text-xs text-success-600">
              <Clock className="h-3.5 w-3.5" />
              <span>Cash on Delivery available</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
