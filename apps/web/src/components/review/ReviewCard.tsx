'use client';

import { Star, ThumbsUp, Check } from 'lucide-react';
import Image from 'next/image';
import { formatDate, getStarArray } from '@/lib/utils';

interface ReviewCardProps {
  review: {
    id: string;
    rating: number;
    title: string;
    body: string;
    user: { firstName: string; lastName: string };
    isVerifiedPurchase: boolean;
    helpfulCount: number;
    images: string[];
    createdAt: string;
  };
}

export function ReviewCard({ review }: ReviewCardProps) {
  const stars = getStarArray(review.rating);

  return (
    <div className="border-b border-neutral-100 py-5 last:border-0">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">
            {review.user.firstName[0]}
          </div>
          <div>
            <p className="text-sm font-medium text-neutral-900">
              {review.user.firstName} {review.user.lastName}
            </p>
            <div className="mt-0.5 flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {stars.map((star, i) => (
                  <Star
                    key={i}
                    className={`h-3.5 w-3.5 ${
                      star === 'full'
                        ? 'fill-amber-400 text-amber-400'
                        : star === 'half'
                          ? 'fill-amber-400/50 text-amber-400'
                          : 'text-neutral-300'
                    }`}
                  />
                ))}
              </div>
              {review.isVerifiedPurchase && (
                <span className="flex items-center gap-0.5 text-[11px] font-medium text-success-600">
                  <Check className="h-3 w-3" /> Verified Purchase
                </span>
              )}
            </div>
          </div>
        </div>
        <span className="text-xs text-neutral-400">{formatDate(review.createdAt)}</span>
      </div>

      {/* Content */}
      <div className="mt-3 pl-12">
        <h4 className="text-sm font-semibold text-neutral-900">{review.title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-neutral-600">{review.body}</p>

        {/* Images */}
        {review.images.length > 0 && (
          <div className="mt-3 flex gap-2">
            {review.images.map((img, i) => (
              <div key={i} className="h-16 w-16 overflow-hidden rounded-md border border-neutral-200">
                <Image src={img} alt={`Review image ${i + 1}`} width={64} height={64} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        )}

        {/* Helpful */}
        <button className="mt-3 flex items-center gap-1.5 text-xs text-neutral-500 transition-colors hover:text-neutral-700">
          <ThumbsUp className="h-3.5 w-3.5" />
          Helpful ({review.helpfulCount})
        </button>
      </div>
    </div>
  );
}
