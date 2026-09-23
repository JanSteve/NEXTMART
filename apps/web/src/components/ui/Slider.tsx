'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface SliderProps {
  min: number;
  max: number;
  step?: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  formatLabel?: (value: number) => string;
  className?: string;
}

export function Slider({
  min,
  max,
  step = 1,
  value,
  onChange,
  formatLabel = (v) => String(v),
  className,
}: SliderProps) {
  const [dragging, setDragging] = useState<'min' | 'max' | null>(null);

  const getPercent = (val: number) => ((val - min) / (max - min)) * 100;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Math.min(Number(e.target.value), value[1] - step);
    onChange([newMin, value[1]]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Math.max(Number(e.target.value), value[0] + step);
    onChange([value[0], newMax]);
  };

  return (
    <div className={cn('space-y-3', className)}>
      <div className="relative h-2">
        {/* Track background */}
        <div className="absolute inset-0 rounded-full bg-neutral-200" />
        {/* Active track */}
        <div
          className="absolute h-full rounded-full bg-primary-500"
          style={{
            left: `${getPercent(value[0])}%`,
            width: `${getPercent(value[1]) - getPercent(value[0])}%`,
          }}
        />
        {/* Min thumb */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value[0]}
          onChange={handleMinChange}
          onMouseDown={() => setDragging('min')}
          onMouseUp={() => setDragging(null)}
          onTouchStart={() => setDragging('min')}
          onTouchEnd={() => setDragging(null)}
          className="pointer-events-none absolute inset-0 appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary-500 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md"
          aria-label="Minimum price"
        />
        {/* Max thumb */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value[1]}
          onChange={handleMaxChange}
          onMouseDown={() => setDragging('max')}
          onMouseUp={() => setDragging(null)}
          onTouchStart={() => setDragging('max')}
          onTouchEnd={() => setDragging(null)}
          className="pointer-events-none absolute inset-0 appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary-500 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md"
          aria-label="Maximum price"
        />
      </div>
      <div className="flex items-center justify-between text-sm text-neutral-600">
        <span className={cn(dragging === 'min' && 'font-semibold text-primary-600')}>
          {formatLabel(value[0])}
        </span>
        <span className={cn(dragging === 'max' && 'font-semibold text-primary-600')}>
          {formatLabel(value[1])}
        </span>
      </div>
    </div>
  );
}
