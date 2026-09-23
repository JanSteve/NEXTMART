'use client';

import { useState } from 'react';
import { MapPin, Check, Navigation, X } from 'lucide-react';
import useLanguageStore from '@/store/language';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const POPULAR_CITIES = [
  { city: 'Vadodara', pincode: '390001', state: 'Gujarat' },
  { city: 'Ahmedabad', pincode: '380001', state: 'Gujarat' },
  { city: 'Surat', pincode: '395001', state: 'Gujarat' },
  { city: 'Rajkot', pincode: '360001', state: 'Gujarat' },
  { city: 'Mumbai', pincode: '400001', state: 'Maharashtra' },
  { city: 'Bengaluru', pincode: '560001', state: 'Karnataka' },
  { city: 'Delhi NCR', pincode: '110001', state: 'Delhi' },
  { city: 'Chennai', pincode: '600001', state: 'Tamil Nadu' },
];

export function LocationModal({ isOpen, onClose }: LocationModalProps) {
  const { location, setLocation } = useLanguageStore();
  const [customPincode, setCustomPincode] = useState('');
  const [error, setError] = useState('');

  const handlePincodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\d{6}$/.test(customPincode)) {
      setError('Please enter a valid 6-digit Indian pincode');
      return;
    }

    // Auto-detect city from pincode
    let detectedCity = 'Vadodara';
    let detectedState = 'Gujarat';
    if (customPincode.startsWith('390')) {
      detectedCity = 'Vadodara';
      detectedState = 'Gujarat';
    } else if (customPincode.startsWith('380')) {
      detectedCity = 'Ahmedabad';
      detectedState = 'Gujarat';
    } else if (customPincode.startsWith('400')) {
      detectedCity = 'Mumbai';
      detectedState = 'Maharashtra';
    } else if (customPincode.startsWith('110')) {
      detectedCity = 'Delhi';
      detectedState = 'Delhi';
    } else if (customPincode.startsWith('560')) {
      detectedCity = 'Bengaluru';
      detectedState = 'Karnataka';
    }

    setLocation({
      city: detectedCity,
      pincode: customPincode,
      state: detectedState,
    });
    setError('');
    onClose();
  };

  const handleCityClick = (cityObj: typeof POPULAR_CITIES[0]) => {
    setLocation(cityObj);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Choose Delivery Location" size="md">
      <div className="space-y-5">
        <p className="text-xs text-neutral-500">
          Select your delivery city to see product availability and real-time delivery timelines.
        </p>

        {/* Pincode Input Form */}
        <form onSubmit={handlePincodeSubmit} className="space-y-2">
          <label className="block text-xs font-bold text-neutral-700">
            Enter an Indian Pincode
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={customPincode}
              onChange={(e) => {
                setCustomPincode(e.target.value.replace(/\D/g, '').slice(0, 6));
                setError('');
              }}
              placeholder="e.g. 390001 (Vadodara)"
              maxLength={6}
              className="flex-1 rounded-lg border border-neutral-300 px-3 py-2 text-sm font-mono focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
            <Button type="submit" size="sm" className="px-5 font-bold">
              Apply
            </Button>
          </div>
          {error && <p className="text-xs text-error-500">{error}</p>}
        </form>

        {/* Auto Detect Location Button */}
        <button
          type="button"
          onClick={() => {
            setLocation({ city: 'Vadodara', pincode: '390001', state: 'Gujarat' });
            onClose();
          }}
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 py-2.5 text-xs font-bold text-primary-600 transition-colors hover:bg-primary-50/60"
        >
          <Navigation className="h-3.5 w-3.5" /> Detect My Location (Vadodara, Gujarat)
        </button>

        {/* Popular Cities List */}
        <div>
          <h4 className="mb-2.5 text-xs font-bold uppercase tracking-wider text-neutral-500">
            Popular Cities
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {POPULAR_CITIES.map((c) => {
              const isSelected = location.city === c.city && location.pincode === c.pincode;
              return (
                <button
                  key={`${c.city}-${c.pincode}`}
                  type="button"
                  onClick={() => handleCityClick(c)}
                  className={`flex items-center justify-between rounded-lg border p-2.5 text-left transition-all ${
                    isSelected
                      ? 'border-primary-500 bg-primary-50 font-bold text-primary-900 ring-1 ring-primary-500'
                      : 'border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50 text-neutral-800'
                  }`}
                >
                  <div>
                    <p className="text-xs font-bold">{c.city}</p>
                    <p className="text-[11px] font-mono text-neutral-400">{c.pincode}</p>
                  </div>
                  {isSelected && <Check className="h-4 w-4 text-primary-600" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default LocationModal;
