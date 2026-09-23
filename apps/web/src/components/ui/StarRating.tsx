'use client';

import { Star, StarHalf } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  count?: number;
  interactive?: boolean;
  onChange?: (rating: number) => void;
}

const sizeMap = {
  sm: 'h-3.5 w-3.5',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
};

export function StarRating({
  rating,
  maxStars = 5,
  size = 'md',
  showValue = false,
  count,
  interactive = false,
  onChange,
}: StarRatingProps) {
  const iconSize = sizeMap[size];

  const handleClick = (star: number) => {
    if (interactive && onChange) {
      onChange(star);
    }
  };

  return (
    <div className="flex items-center gap-1" role={interactive ? 'radiogroup' : 'img'} aria-label={`Rating: ${rating} out of ${maxStars}`}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: maxStars }, (_, i) => {
          const starValue = i + 1;
          const isFull = rating >= starValue;
          const isHalf = !isFull && rating >= starValue - 0.5;

          return (
            <button
              key={i}
              type="button"
              onClick={() => handleClick(starValue)}
              disabled={!interactive}
              className={cn(
                interactive ? 'cursor-pointer transition-transform hover:scale-110' : 'cursor-default',
              )}
              aria-label={interactive ? `Rate ${starValue} stars` : undefined}
            >
              {isFull ? (
                <Star className={cn(iconSize, 'fill-amber-400 text-amber-400')} />
              ) : isHalf ? (
                <StarHalf className={cn(iconSize, 'fill-amber-400 text-amber-400')} />
              ) : (
                <Star className={cn(iconSize, 'text-neutral-300')} />
              )}
            </button>
          );
        })}
      </div>
      {showValue && (
        <span className="text-sm font-medium text-neutral-700">{rating.toFixed(1)}</span>
      )}
      {count !== undefined && (
        <span className="text-sm text-neutral-500">
          ({count.toLocaleString('en-IN')})
        </span>
      )}
    </div>
  );
}
