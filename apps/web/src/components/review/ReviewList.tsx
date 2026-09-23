'use client';

import { useState } from 'react';
import { ReviewCard } from './ReviewCard';
import { RatingBreakdown } from './RatingBreakdown';
import { ReviewForm } from './ReviewForm';
import { MOCK_REVIEWS } from '@/lib/constants';

interface ReviewListProps {
  productRating?: number;
  productReviewCount?: number;
}

export function ReviewList({ productRating = 4.5, productReviewCount = 8432 }: ReviewListProps) {
  const [sortBy, setSortBy] = useState<'helpful' | 'newest'>('helpful');

  const distribution = [
    { stars: 5, count: 4890, percentage: 58 },
    { stars: 4, count: 2100, percentage: 25 },
    { stars: 3, count: 860, percentage: 10 },
    { stars: 2, count: 340, percentage: 4 },
    { stars: 1, count: 242, percentage: 3 },
  ];

  const sortedReviews = [...MOCK_REVIEWS].sort((a, b) => {
    if (sortBy === 'newest') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    return b.helpfulCount - a.helpfulCount;
  });

  return (
    <div className="space-y-8">
      {/* Rating breakdown */}
      <RatingBreakdown
        averageRating={productRating}
        totalReviews={productReviewCount}
        distribution={distribution}
      />

      {/* Write a review */}
      <ReviewForm />

      {/* Sort controls */}
      <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
        <h3 className="text-sm font-semibold text-neutral-900">
          Customer Reviews ({MOCK_REVIEWS.length})
        </h3>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'helpful' | 'newest')}
          className="rounded-md border border-neutral-200 px-3 py-1.5 text-sm outline-none focus:border-primary-500"
        >
          <option value="helpful">Most Helpful</option>
          <option value="newest">Newest First</option>
        </select>
      </div>

      {/* Reviews */}
      <div>
        {sortedReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
