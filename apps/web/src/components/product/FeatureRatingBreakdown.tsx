'use client';

import { Star } from 'lucide-react';

interface FeatureScore {
  name: string;
  score: number;
  max: number;
}

interface FeatureRatingBreakdownProps {
  category?: string;
  rating: number;
}

export function FeatureRatingBreakdown({
  category = '',
  rating,
}: FeatureRatingBreakdownProps) {
  const cat = category.toLowerCase();

  let features: FeatureScore[] = [
    { name: 'Value for money', score: 4.8, max: 5.0 },
    { name: 'Quality of material', score: 4.9, max: 5.0 },
    { name: 'Durability & Longevity', score: 4.7, max: 5.0 },
    { name: 'Packaging & Fast Delivery', score: 4.9, max: 5.0 },
  ];

  if (cat.includes('electronics') || cat.includes('phone') || cat.includes('laptop') || cat.includes('headphone')) {
    features = [
      { name: 'Sound & Display Clarity', score: 4.9, max: 5.0 },
      { name: 'Battery Performance', score: 4.7, max: 5.0 },
      { name: 'Build Quality & Weight', score: 4.8, max: 5.0 },
      { name: 'Value for money', score: 4.6, max: 5.0 },
    ];
  } else if (cat.includes('fashion') || cat.includes('dress') || cat.includes('kurta') || cat.includes('shoe') || cat.includes('jean')) {
    features = [
      { name: 'Comfort & Breathability', score: 4.9, max: 5.0 },
      { name: 'Fabric & Stitching Quality', score: 4.8, max: 5.0 },
      { name: 'Fit as Expected', score: 4.7, max: 5.0 },
      { name: 'Color Accuracy to Photos', score: 4.9, max: 5.0 },
    ];
  } else if (cat.includes('kitchen') || cat.includes('cookware') || cat.includes('home')) {
    features = [
      { name: 'Heat Distribution & Cooking Ease', score: 4.9, max: 5.0 },
      { name: 'Easy to Clean & Non-Stick', score: 4.8, max: 5.0 },
      { name: 'Sturdiness & Handle Grip', score: 4.7, max: 5.0 },
      { name: 'Value for money', score: 4.8, max: 5.0 },
    ];
  }

  return (
    <div className="rounded-2xl border border-neutral-100 bg-neutral-50/70 p-5">
      <h3 className="font-display text-sm font-bold text-neutral-900 mb-3">
        By Feature (Customer Satisfaction)
      </h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {features.map((f) => (
          <div key={f.name} className="flex items-center justify-between gap-3 rounded-xl bg-white p-3 border border-neutral-100 shadow-sm">
            <span className="text-xs font-semibold text-neutral-700">{f.name}</span>
            <div className="flex items-center gap-1.5 shrink-0">
              <div className="flex items-center gap-0.5 text-amber-500 font-bold text-xs">
                <span>{f.score}</span>
                <Star className="h-3.5 w-3.5 fill-current" />
              </div>
              <div className="h-2 w-16 overflow-hidden rounded-full bg-neutral-100">
                <div
                  className="h-full rounded-full bg-amber-500"
                  style={{ width: `${(f.score / f.max) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
