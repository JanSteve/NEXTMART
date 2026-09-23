import { cn } from "@/lib/utils";

export function Badge({ children, variant = 'default', className }: { children: React.ReactNode, variant?: 'default' | 'success' | 'error' | 'warning', className?: string }) {
  const variants = {
    default: "bg-gray-100 text-gray-800",
    success: "bg-success-500/10 text-success-500",
    error: "bg-error-500/10 text-error-500",
    warning: "bg-accent-500/10 text-accent-600",
  };
  return (
    <span className={cn("inline-flex items-center px-2 py-0.5 rounded text-xs font-medium", variants[variant], className)}>
      {children}
    </span>
  );
}