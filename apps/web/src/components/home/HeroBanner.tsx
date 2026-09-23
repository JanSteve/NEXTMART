'use client';

import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
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
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl shadow-xl border border-neutral-200/60" ref={emblaRef}>
        <div className="flex">
          {HERO_BANNERS.map((banner) => (
            <div key={banner.id} className="min-w-0 flex-[0_0_100%]">
              <div
                className={cn(
                  'relative flex min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] items-center bg-gradient-to-r px-6 py-10 sm:px-12 lg:px-16 overflow-hidden',
                  banner.bgGradient
                )}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

                {/* Content Grid */}
                <div className="relative z-10 grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-12">
                  {/* Left Column: Text & CTAs */}
                  <div className="lg:col-span-7 flex flex-col items-start text-left">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-md px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white border border-white/20 shadow-sm mb-4">
                      <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                      <span>Vadodara Super Sale</span>
                    </div>

                    <h1 className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.15]">
                      {banner.title}
                    </h1>

                    <p className="mt-3.5 max-w-xl text-sm font-medium text-white/90 sm:text-base lg:text-lg leading-relaxed">
                      {banner.subtitle}
                    </p>

                    <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4">
                      <Link
                        href={banner.ctaLink}
                        className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-extrabold text-neutral-900 shadow-xl transition-all hover:bg-neutral-100 hover:scale-105 active:scale-95"
                      >
                        <span>{banner.cta}</span>
                        <ArrowRight className="h-4 w-4 text-primary-600" />
                      </Link>

                      <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-white/90">
                        <ShieldCheck className="h-4 w-4 text-emerald-300" />
                        <span>100% Genuine · Free Vadodara Shipping</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Hero Product Image Display */}
                  <div className="lg:col-span-5 hidden sm:flex items-center justify-center relative">
                    <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30 group">
                      <Image
                        src={banner.image}
                        alt={banner.title}
                        fill
                        priority
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-neutral-100 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] uppercase font-bold text-primary-600">Special Deal</p>
                          <p className="text-xs font-bold text-neutral-900 truncate">Trending Collection</p>
                        </div>
                        <span className="bg-emerald-500 text-white text-xs font-extrabold px-2 py-0.5 rounded-lg shadow">
                          50% OFF
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-xl backdrop-blur-md transition-all hover:bg-white hover:scale-110 active:scale-95 sm:flex items-center justify-center border border-neutral-200/50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 text-neutral-800" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-xl backdrop-blur-md transition-all hover:bg-white hover:scale-110 active:scale-95 sm:flex items-center justify-center border border-neutral-200/50"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 text-neutral-800" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {HERO_BANNERS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={cn(
                'h-2.5 rounded-full transition-all duration-300',
                idx === selectedIndex ? 'w-8 bg-white shadow-md' : 'w-2.5 bg-white/50 hover:bg-white/80'
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
