import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const steps = ["Cart", "Address", "Summary", "Payment", "Confirm"];

export function CheckoutProgress({ currentStep }: { currentStep: number }) {
  return (
    <div className="flex items-center justify-between w-full mb-8 relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 -z-10" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary-500 -z-10 transition-all duration-500" style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }} />
      
      {steps.map((step, index) => {
        const stepNum = index + 1;
        const isActive = stepNum === currentStep;
        const isCompleted = stepNum < currentStep;
        
        return (
          <div key={step} className="flex flex-col items-center gap-2 bg-white px-2">
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors",
              isCompleted ? "bg-primary-500 border-primary-500 text-white" :
              isActive ? "border-primary-500 text-primary-500" : "border-gray-300 text-gray-400 bg-white"
            )}>
              {isCompleted ? <Check className="w-4 h-4" /> : stepNum}
            </div>
            <span className={cn("text-xs font-medium hidden sm:block", isActive || isCompleted ? "text-gray-900" : "text-gray-400")}>{step}</span>
          </div>
        );
      })}
    </div>
  );
}