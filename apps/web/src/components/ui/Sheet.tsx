'use client';

import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { cn } from '@/lib/utils';

interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  side?: 'left' | 'right' | 'bottom';
  className?: string;
}

const slideVariants = {
  left: { initial: { x: '-100%' }, animate: { x: 0 }, exit: { x: '-100%' } },
  right: { initial: { x: '100%' }, animate: { x: 0 }, exit: { x: '100%' } },
  bottom: { initial: { y: '100%' }, animate: { y: 0 }, exit: { y: '100%' } },
};

const positionClasses = {
  left: 'left-0 top-0 h-full w-[320px] max-w-[90vw]',
  right: 'right-0 top-0 h-full w-[320px] max-w-[90vw]',
  bottom: 'bottom-0 left-0 right-0 max-h-[85vh] rounded-t-2xl',
};

export function Sheet({ isOpen, onClose, title, children, side = 'right', className }: SheetProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40"
            onClick={onClose}
          />
          <motion.div
            initial={slideVariants[side].initial}
            animate={slideVariants[side].animate}
            exit={slideVariants[side].exit}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={cn(
              'absolute z-10 flex flex-col bg-white shadow-2xl',
              positionClasses[side],
              className,
            )}
            role="dialog"
            aria-modal="true"
          >
            {title && (
              <div className="flex shrink-0 items-center justify-between border-b border-neutral-100 px-4 py-3">
                <h2 className="text-base font-semibold text-neutral-900">{title}</h2>
                <button
                  onClick={onClose}
                  className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            )}
            <div className="flex-1 overflow-y-auto">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
