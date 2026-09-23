'use client';

import { useState } from 'react';
import { X, SlidersHorizontal, Star, Check } from 'lucide-react';
import { Slider } from '@/components/ui/Slider';
import { Sheet } from '@/components/ui/Sheet';
import { cn, formatPrice } from '@/lib/utils';
import { FILTER_OPTIONS } from '@/lib/constants';
import { useIsMobile } from '@/hooks/useMediaQuery';

export interface FilterState {
  categories: string[];
  brands: string[];
  priceRange: [number, number];
  colors: string[];
  ratings: number[];
}

export interface FilterSidebarProps {
  filters?: FilterState;
  onFiltersChange?: (filters: FilterState) => void;
  onClear?: () => void;
  productCount?: number;
}

const defaultFilters: FilterState = {
  categories: [],
  brands: [],
  priceRange: [0, 200000],
  colors: [],
  ratings: [],
};

export function FilterSidebar({
  filters = defaultFilters,
  onFiltersChange = () => {},
  onClear = () => {},
  productCount = 0,
}: FilterSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleArrayItem = <K extends keyof FilterState>(key: K, item: string | number) => {
    const arr = (filters[key] || []) as (string | number)[];
    const newArr = arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item];
    onFiltersChange({ ...filters, [key]: newArr });
  };

  const activeFilterCount =
    (filters.categories?.length || 0) +
    (filters.brands?.length || 0) +
    (filters.colors?.length || 0) +
    (filters.ratings?.length || 0) +
    (filters.priceRange && (filters.priceRange[0] > 0 || filters.priceRange[1] < 200000) ? 1 : 0);

  const content = (
    <div className="space-y-6 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-display text-base font-semibold text-neutral-900">Filters</h3>
        {activeFilterCount > 0 && (
          <button onClick={onClear} className="text-xs font-medium text-primary-600 hover:underline">
            Clear All
          </button>
        )}
      </div>

      {/* Categories */}
      <FilterSection title="Category">
        <div className="space-y-2">
          {FILTER_OPTIONS.categories.map((cat) => (
            <label key={cat} className="flex cursor-pointer items-center gap-2.5">
              <input
                type="checkbox"
                checked={filters.categories?.includes(cat) || false}
                onChange={() => toggleArrayItem('categories', cat)}
                className="h-4 w-4 rounded border-neutral-300 text-primary-500 focus:ring-primary-500"
              />
              <span className="text-sm text-neutral-700">{cat}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Price Range */}
      <FilterSection title="Price Range">
        <Slider
          min={0}
          max={200000}
          step={500}
          value={filters.priceRange || [0, 200000]}
          onChange={(v) => onFiltersChange({ ...filters, priceRange: v })}
          formatLabel={formatPrice}
        />
      </FilterSection>

      {/* Brands */}
      <FilterSection title="Brand">
        <div className="max-h-40 space-y-2 overflow-y-auto">
          {FILTER_OPTIONS.brands.map((brand) => (
            <label key={brand} className="flex cursor-pointer items-center gap-2.5">
              <input
                type="checkbox"
                checked={filters.brands?.includes(brand) || false}
                onChange={() => toggleArrayItem('brands', brand)}
                className="h-4 w-4 rounded border-neutral-300 text-primary-500 focus:ring-primary-500"
              />
              <span className="text-sm text-neutral-700">{brand}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Color */}
      <FilterSection title="Color">
        <div className="flex flex-wrap gap-2">
          {FILTER_OPTIONS.colors.map((color) => (
            <button
              key={color.name}
              onClick={() => toggleArrayItem('colors', color.name)}
              title={color.name}
              className={cn(
                'relative h-8 w-8 rounded-full border-2 transition-all',
                filters.colors?.includes(color.name)
                  ? 'border-primary-500 ring-2 ring-primary-500/30'
                  : 'border-neutral-200',
              )}
            >
              <span
                className="absolute inset-1 rounded-full"
                style={{ backgroundColor: color.hex }}
              />
              {filters.colors?.includes(color.name) && (
                <Check className="absolute inset-0 m-auto h-3.5 w-3.5 text-white drop-shadow" />
              )}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Rating */}
      <FilterSection title="Customer Rating">
        <div className="space-y-2">
          {FILTER_OPTIONS.ratings.map((rating) => (
            <button
              key={rating}
              onClick={() => toggleArrayItem('ratings', rating)}
              className={cn(
                'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
                filters.ratings?.includes(rating)
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-neutral-600 hover:bg-neutral-50',
              )}
            >
              {rating}
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span>& above</span>
            </button>
          ))}
        </div>
      </FilterSection>
    </div>
  );

  if (isMobile) {
    return (
      <>
        <button
          onClick={() => setMobileOpen(true)}
          className="flex items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
          {activeFilterCount > 0 && (
            <span className="rounded-full bg-primary-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
              {activeFilterCount}
            </span>
          )}
        </button>
        <Sheet isOpen={mobileOpen} onClose={() => setMobileOpen(false)} title="Filters" side="bottom">
          {content}
          <div className="sticky bottom-0 border-t border-neutral-100 bg-white p-4">
            <button
              onClick={() => setMobileOpen(false)}
              className="w-full rounded-lg bg-primary-500 py-3 text-sm font-semibold text-white"
            >
              Show {productCount} Results
            </button>
          </div>
        </Sheet>
      </>
    );
  }

  return (
    <div className="w-full">
      {content}
    </div>
  );
}

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-neutral-100 pt-4 first:border-0 first:pt-0">
      <h4 className="mb-3 text-sm font-semibold text-neutral-800">{title}</h4>
      {children}
    </div>
  );
}

export default FilterSidebar;