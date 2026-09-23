'use client';

import { Star } from 'lucide-react';

interface RatingBreakdownProps {
  averageRating: number;
  totalReviews: number;
  distribution: { stars: number; count: number; percentage: number }[];
}

export function RatingBreakdown({ averageRating, totalReviews, distribution }: RatingBreakdownProps) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
      {/* Average */}
      <div className="flex flex-col items-center">
        <span className="font-display text-5xl font-bold text-neutral-900">
          {averageRating.toFixed(1)}
        </span>
        <div className="mt-1 flex items-center gap-0.5">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.round(averageRating) ? 'fill-amber-400 text-amber-400' : 'text-neutral-300'
              }`}
            />
          ))}
        </div>
        <span className="mt-1 text-sm text-neutral-500">
          {totalReviews.toLocaleString('en-IN')} reviews
        </span>
      </div>

      {/* Bars */}
      <div className="flex-1 space-y-2">
        {distribution.map((item) => (
          <div key={item.stars} className="flex items-center gap-2.5">
            <span className="w-4 text-right text-sm font-medium text-neutral-600">
              {item.stars}
            </span>
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-neutral-200">
              <div
                className="h-full rounded-full bg-amber-400 transition-all"
                style={{ width: `${item.percentage}%` }}
              />
            </div>
            <span className="w-8 text-right text-xs text-neutral-500">
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
