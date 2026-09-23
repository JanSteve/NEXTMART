'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProductTabsProps {
  description: string;
  highlights: string[];
  specs?: Record<string, string>;
  reviewsComponent?: React.ReactNode;
}

export function ProductTabs({ description, highlights, specs, reviewsComponent }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<'description' | 'specs' | 'reviews'>('description');

  const tabs = [
    { id: 'description' as const, label: 'Description' },
    { id: 'specs' as const, label: 'Specifications' },
    { id: 'reviews' as const, label: 'Reviews' },
  ];

  return (
    <div>
      {/* Tab headers */}
      <div className="border-b border-neutral-200">
        <div className="flex gap-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'relative px-5 py-3 text-sm font-medium transition-colors',
                activeTab === tab.id
                  ? 'text-primary-600'
                  : 'text-neutral-500 hover:text-neutral-700',
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div className="py-6">
        {activeTab === 'description' && (
          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
            {highlights.length > 0 && (
              <div>
                <h4 className="mb-2 text-sm font-semibold text-neutral-900">Highlights</h4>
                <ul className="space-y-1.5">
                  {highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {activeTab === 'specs' && specs && Object.keys(specs).length > 0 && (
          <div className="overflow-hidden rounded-lg border border-neutral-200">
            <table className="w-full text-sm">
              <tbody>
                {Object.entries(specs).map(([key, value], i) => (
                  <tr
                    key={key}
                    className={i % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}
                  >
                    <td className="w-1/3 px-4 py-2.5 font-medium text-neutral-600">{key}</td>
                    <td className="px-4 py-2.5 text-neutral-900">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div>
            {reviewsComponent || (
              <p className="text-sm text-neutral-500">No reviews yet. Be the first to review!</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
