'use client';

import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { HERO_BANNERS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function HeroBanner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((idx: number) => emblaApi?.scrollTo(idx), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  return (
    <section className="relative" aria-label="Featured promotions">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {HERO_BANNERS.map((banner) => (
            <div key={banner.id} className="min-w-0 flex-[0_0_100%]">
              <Link href={banner.ctaLink}>
                <div
                  className={cn(
                    'relative flex min-h-[220px] items-center justify-center bg-gradient-to-br px-6 py-10 sm:min-h-[320px] sm:py-16 lg:min-h-[380px]',
                    banner.bgGradient,
                  )}
                >
                  {/* Pattern overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id={`dots-${banner.id}`} x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                          <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#dots-${banner.id})`} />
                    </svg>
                  </div>

                  <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center lg:flex-row lg:items-center lg:text-left">
                    <div className="max-w-lg">
                      <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                        {banner.title}
                      </h2>
                      <p className="mt-3 text-lg text-white/80 sm:text-xl">
                        {banner.subtitle}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-neutral-900 shadow-lg transition-transform hover:scale-105">
                        {banner.cta} <ChevronRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows — desktop only */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/90 p-2.5 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:shadow-xl sm:block"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 text-neutral-700" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/90 p-2.5 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:shadow-xl sm:block"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 text-neutral-700" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {HERO_BANNERS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            className={cn(
              'h-2 rounded-full transition-all',
              idx === selectedIndex ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/70',
            )}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
