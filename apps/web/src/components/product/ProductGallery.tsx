'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductGalleryProps {
  images: string[];
  selectedImage?: string | null;
  onImageChange?: (img: string) => void;
}

export default function ProductGallery({ images, selectedImage, onImageChange }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(selectedImage || images[0]);

  useEffect(() => {
    if (selectedImage) {
      setActiveImage(selectedImage);
    } else if (images.length > 0 && !images.includes(activeImage)) {
      setActiveImage(images[0]);
    }
  }, [selectedImage, images, activeImage]);

  const handleSelect = (img: string) => {
    setActiveImage(img);
    onImageChange?.(img);
  };

  // Combine unique image list including active image if color switched
  const allImages = Array.from(new Set([activeImage, ...images])).filter(Boolean);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Big Image Showcase */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-inner group cursor-zoom-in">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative h-full w-full"
          >
            <Image
              src={activeImage}
              alt="Product View"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Zoom Hint Pill */}
        <div className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md opacity-0 transition-opacity group-hover:opacity-100">
          🔍 Roll over image to zoom
        </div>
      </div>

      {/* Thumbnails row */}
      <div className="scrollbar-hide flex gap-3 overflow-x-auto pb-1">
        {allImages.map((img, i) => {
          const isSelected = activeImage === img;
          return (
            <button
              key={`${img}-${i}`}
              type="button"
              onClick={() => handleSelect(img)}
              className={cn(
                'relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-200',
                isSelected
                  ? 'border-primary-500 shadow-md ring-2 ring-primary-500/30'
                  : 'border-neutral-200 opacity-70 hover:opacity-100 hover:border-neutral-400',
              )}
            >
              <Image
                src={img}
                alt={`Thumbnail ${i + 1}`}
                fill
                className="object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}