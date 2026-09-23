'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React, { forwardRef } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, type = 'button', ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:opacity-50 cursor-pointer';

    const variants = {
      primary: 'bg-primary-500 text-white hover:bg-primary-600 shadow-sm',
      secondary: 'bg-accent-500 text-white hover:bg-accent-600 shadow-sm',
      outline: 'border border-neutral-300 bg-transparent hover:bg-neutral-50 text-neutral-900',
      ghost: 'hover:bg-neutral-100 hover:text-neutral-900 text-neutral-700',
    };

    const sizes = {
      sm: 'h-8 px-3 text-xs',
      md: 'h-10 px-4 py-2 text-sm',
      lg: 'h-12 px-8 text-base',
    };

    return (
      <motion.button
        type={type}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...(props as any)}
      >
        {isLoading ? (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </motion.button>
    );
  },
);

Button.displayName = 'Button';
export { Button };
export default Button;