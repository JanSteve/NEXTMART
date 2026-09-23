'use client';

import { useState } from 'react';
import { MapPin, Truck, Zap, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { isValidPincode } from '@/lib/utils';
import useLanguageStore from '@/store/language';

export function DeliveryCheck() {
  const { location } = useLanguageStore();
  const [pincode, setPincode] = useState(location.pincode || '390001');
  const [result, setResult] = useState<{
    available: boolean;
    city: string;
    hub: string;
    eta: string;
    isExpress: boolean;
    cod: boolean;
    freeShipping: boolean;
  } | null>({
    available: true,
    city: location.city || 'Vadodara',
    hub: 'Waghodia Express Hub',
    eta: 'Tomorrow, 2:00 PM',
    isExpress: true,
    cod: true,
    freeShipping: true,
  });
  const [error, setError] = useState('');

  const checkDelivery = () => {
    setError('');
    if (!isValidPincode(pincode)) {
      setError('Please enter a valid 6-digit Indian PIN code');
      return;
    }

    const pinNum = parseInt(pincode, 10);
    if (pinNum >= 390001 && pinNum <= 390030) {
      // Vadodara Local Pincodes
      setResult({
        available: true,
        city: 'Vadodara',
        hub: 'Waghodia Fulfillment Center',
        eta: 'Today within 2-4 Hours (Express Dispatch)',
        isExpress: true,
        cod: true,
        freeShipping: true,
      });
    } else if (pincode.startsWith('380') || pincode.startsWith('395') || pincode.startsWith('360')) {
      // Ahmedabad, Surat, Rajkot
      setResult({
        available: true,
        city: 'Gujarat Priority Region',
        hub: 'Gujarat Regional Hub',
        eta: 'Tomorrow by 11:00 AM',
        isExpress: true,
        cod: true,
        freeShipping: true,
      });
    } else if (pincode.startsWith('400') || pincode.startsWith('110') || pincode.startsWith('560')) {
      // Mumbai, Delhi, Bangalore
      setResult({
        available: true,
        city: 'Metro Air Express Zone',
        hub: 'NexMart Air Freight',
        eta: 'Tomorrow by 2:00 PM',
        isExpress: false,
        cod: true,
        freeShipping: true,
      });
    } else {
      setResult({
        available: true,
        city: 'National Delivery Zone',
        hub: 'Standard Surface Express',
        eta: 'In 2 Business Days',
        isExpress: false,
        cod: true,
        freeShipping: true,
      });
    }
  };

  return (
    <div className="rounded-2xl border border-neutral-200 bg-neutral-50/60 p-4">
      <div className="flex items-center justify-between mb-2">
        <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-600">
          <MapPin className="h-4 w-4 text-primary-600" />
          Delivery &amp; Service Availability
        </p>
        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
          Live Dispatch
        </span>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={pincode}
          onChange={(e) => {
            const v = e.target.value.replace(/\D/g, '').slice(0, 6);
            setPincode(v);
            setError('');
          }}
          onKeyDown={(e) => e.key === 'Enter' && checkDelivery()}
          placeholder="Enter 6-digit Pincode"
          maxLength={6}
          className="w-48 rounded-xl border border-neutral-300 bg-white px-3.5 py-2 text-xs font-mono font-bold text-neutral-800 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
        />
        <button
          type="button"
          onClick={checkDelivery}
          className="rounded-xl bg-neutral-900 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-primary-600"
        >
          Verify
        </button>
      </div>

      {error && (
        <p className="mt-2 flex items-center gap-1 text-xs text-rose-600">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
          {error}
        </p>
      )}

      {result?.available && (
        <div className="mt-3 space-y-2 rounded-xl bg-white p-3 border border-neutral-200 shadow-sm animate-fade-in">
          <div className="flex items-start gap-2">
            <Truck className="h-4 w-4 text-primary-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-neutral-900">
                Estimated Delivery: <span className="text-primary-600">{result.eta}</span>
              </p>
              <p className="text-[11px] text-neutral-500">
                Dispatches from <strong>{result.hub}</strong> to {result.city} ({pincode})
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 border-t border-neutral-100 pt-2 text-[11px] text-neutral-700">
            <span className="flex items-center gap-1 text-emerald-700 font-semibold">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> Free Delivery Eligible
            </span>
            <span className="flex items-center gap-1 text-neutral-700 font-medium">
              <ShieldCheck className="h-3.5 w-3.5 text-primary-500" /> Cash on Delivery Available
            </span>
            {result.isExpress && (
              <span className="flex items-center gap-1 text-amber-700 font-bold">
                <Zap className="h-3 w-3 text-amber-500 fill-amber-500" /> NexMart Priority Express
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
