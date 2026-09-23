"use client";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductGallery({ images }: { images: string[] }) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full aspect-square bg-neutral-50 rounded-xl overflow-hidden border border-neutral-200 group cursor-zoom-in shadow-inner">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full relative"
          >
            <Image src={images[activeIdx]} alt="Product" fill className="object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500" priority />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className={cn(
              "relative w-20 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all",
              activeIdx === i ? "border-primary-500 shadow-md ring-2 ring-primary-500/20" : "border-neutral-200 hover:border-primary-300 opacity-70 hover:opacity-100"
            )}
          >
            <Image src={img} alt={`Thumb ${i}`} fill className="object-cover mix-blend-multiply" />
          </button>
        ))}
      </div>
    </div>
  );
}