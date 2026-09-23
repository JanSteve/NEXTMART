'use client';

import { useState, useEffect, useRef } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Toast {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  message?: string;
}

let addToastFn: ((toast: Omit<Toast, 'id'>) => void) | null = null;

export function toast(options: Omit<Toast, 'id'>) {
  addToastFn?.(options);
}

export function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const timersRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  useEffect(() => {
    addToastFn = (options) => {
      const id = Date.now().toString(36) + Math.random().toString(36).substring(2, 5);
      setToasts((prev) => [...prev, { ...options, id }]);
      const timer = setTimeout(() => removeToast(id), 5000);
      timersRef.current.set(id, timer);
    };
    return () => { addToastFn = null; };
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    const timer = timersRef.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timersRef.current.delete(id);
    }
  };

  const icons = {
    success: <CheckCircle className="h-5 w-5 text-green-500" />,
    error: <XCircle className="h-5 w-5 text-red-500" />,
    info: <CheckCircle className="h-5 w-5 text-primary-500" />,
  };

  return (
    <div className="fixed right-4 top-4 z-[100] flex flex-col gap-2" aria-live="polite">
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 80, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="flex w-80 items-start gap-3 rounded-lg border border-neutral-200 bg-white p-4 shadow-lg"
          >
            <span className="mt-0.5 shrink-0">{icons[t.type]}</span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-neutral-900">{t.title}</p>
              {t.message && <p className="mt-0.5 text-xs text-neutral-500">{t.message}</p>}
            </div>
            <button
              onClick={() => removeToast(t.id)}
              className="shrink-0 rounded p-0.5 text-neutral-400 hover:text-neutral-600"
              aria-label="Dismiss"
            >
              <XCircle className="h-4 w-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
