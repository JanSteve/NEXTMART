"use client";

import { useState, useRef, useEffect } from "react";
import { Sparkles, Gift, Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { toast } from "@/components/ui/Toast";

interface CouponScratchCardProps {
  onApplyCoupon: (code: string) => void;
}

export function CouponScratchCard({ onApplyCoupon }: CouponScratchCardProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [scratchProgress, setScratchProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);

  const couponCode = "VADODARA20";
  const discountText = "20% OFF up to ₹500";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Draw silver scratch texture
    ctx.fillStyle = "#818cf8"; // primary indigo gradient base
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add pattern
    ctx.fillStyle = "#6366f1";
    for (let i = 0; i < canvas.width; i += 20) {
      ctx.fillRect(i, 0, 10, canvas.height);
    }

    // Text on scratch surface
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 14px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("✨ SCRATCH TO REVEAL ✨", canvas.width / 2, canvas.height / 2);
  }, []);

  const handleScratch = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2, false);
    ctx.fill();

    // Check progress
    setScratchProgress((prev) => {
      const next = prev + 8;
      if (next >= 45 && !isRevealed) {
        setIsRevealed(true);
        toast({
          type: "success",
          title: "🎉 Scratch Card Unlocked!",
          message: `You revealed ${couponCode} for ${discountText}!`,
        });
      }
      return next;
    });
  };

  const handleCopyAndApply = () => {
    navigator.clipboard?.writeText(couponCode);
    setCopied(true);
    onApplyCoupon(couponCode);
    toast({
      type: "success",
      title: "Coupon Applied!",
      message: `Code ${couponCode} has been applied to your cart.`,
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border-2 border-dashed border-primary-300 bg-gradient-to-br from-primary-50 via-white to-amber-50/40 p-4 shadow-sm">
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
            <Gift className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-display font-bold text-sm text-neutral-900">
              Vadodara Mystery Scratch Card
            </h4>
            <p className="text-[11px] text-neutral-500">
              Scratch below to reveal today&apos;s exclusive city savings
            </p>
          </div>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
          Instant Luck
        </span>
      </div>

      <div className="relative w-full h-24 rounded-xl overflow-hidden border border-neutral-200 bg-white flex items-center justify-center select-none shadow-inner">
        {/* Underlying Prize */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-2 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 text-center">
          <div className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Exclusive Vadodara Deal
          </div>
          <div className="font-mono text-xl font-black tracking-wider text-neutral-900 my-0.5">
            {couponCode}
          </div>
          <div className="text-xs font-semibold text-emerald-600">{discountText}</div>
        </div>

        {/* Scratchable Canvas Layer */}
        {!isRevealed && (
          <canvas
            ref={canvasRef}
            width={340}
            height={96}
            onMouseDown={() => (isDrawing.current = true)}
            onMouseUp={() => (isDrawing.current = false)}
            onMouseLeave={() => (isDrawing.current = false)}
            onMouseMove={(e) => {
              if (isDrawing.current) handleScratch(e.clientX, e.clientY);
            }}
            onTouchMove={(e) => {
              const touch = e.touches[0];
              if (touch) handleScratch(touch.clientX, touch.clientY);
            }}
            className="absolute inset-0 w-full h-full cursor-crosshair z-10 touch-none"
          />
        )}
      </div>

      {/* Action CTA */}
      <div className="mt-3 flex items-center justify-between">
        {!isRevealed ? (
          <button
            type="button"
            onClick={() => {
              setIsRevealed(true);
              toast({
                type: "success",
                title: "Card Revealed!",
                message: `Code ${couponCode} unlocked!`,
              });
            }}
            className="text-xs font-bold text-primary-600 hover:text-primary-800 underline"
          >
            Click to auto-scratch
          </button>
        ) : (
          <Button
            size="sm"
            onClick={handleCopyAndApply}
            className="w-full font-bold bg-primary-600 hover:bg-primary-700 text-white rounded-xl flex items-center justify-center gap-1.5 shadow"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" /> Applied to Cart!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" /> Apply {couponCode}
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
