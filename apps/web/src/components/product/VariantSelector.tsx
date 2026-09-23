'use client';

import { cn } from '@/lib/utils';

interface VariantSelectorProps {
  sizes?: string[];
  colors?: Array<{ name: string; hex: string }>;
  selectedSize?: string;
  selectedColor?: string;
  onSizeChange?: (size: string) => void;
  onColorChange?: (color: string) => void;
}

export function VariantSelector({
  sizes,
  colors,
  selectedSize,
  selectedColor,
  onSizeChange,
  onColorChange,
}: VariantSelectorProps) {
  return (
    <div className="space-y-4">
      {/* Size selector */}
      {sizes && sizes.length > 0 && (
        <div>
          <p className="mb-2 text-sm font-medium text-neutral-700">
            Size: <span className="font-semibold text-neutral-900">{selectedSize}</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => onSizeChange?.(size)}
                className={cn(
                  'rounded-md border px-4 py-2 text-sm font-medium transition-all',
                  selectedSize === size
                    ? 'border-primary-500 bg-primary-50 text-primary-700 ring-1 ring-primary-500'
                    : 'border-neutral-200 text-neutral-700 hover:border-neutral-400',
                )}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Color selector */}
      {colors && colors.length > 0 && (
        <div>
          <p className="mb-2 text-sm font-medium text-neutral-700">
            Color: <span className="font-semibold text-neutral-900">{selectedColor}</span>
          </p>
          <div className="flex flex-wrap gap-2.5">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => onColorChange?.(color.name)}
                title={color.name}
                className={cn(
                  'relative h-9 w-9 rounded-full border-2 transition-all',
                  selectedColor === color.name
                    ? 'border-primary-500 ring-2 ring-primary-500 ring-offset-2'
                    : 'border-neutral-200 hover:border-neutral-400',
                )}
                aria-label={`Color: ${color.name}`}
              >
                <span
                  className="absolute inset-1 rounded-full"
                  style={{ backgroundColor: color.hex }}
                />
                {selectedColor === color.name && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M3 7l3 3 5-5"
                        stroke={color.hex === '#FFFFFF' || color.hex === '#F5E6D3' || color.hex === '#E8E8E8' ? '#111' : '#fff'}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
