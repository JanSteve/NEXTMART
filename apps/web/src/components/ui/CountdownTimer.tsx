'use client';

import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

export function CountdownTimer({ targetDate, className }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = targetDate.getTime() - new Date().getTime();
    if (difference <= 0) return { hours: 0, minutes: 0, seconds: 0 };
    return {
      hours: Math.floor(difference / (1000 * 60 * 60)),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className={className}>
      <div className="flex items-center gap-1.5">
        <TimeBlock value={pad(timeLeft.hours)} label="HRS" />
        <span className="text-lg font-bold text-amber-500">:</span>
        <TimeBlock value={pad(timeLeft.minutes)} label="MIN" />
        <span className="text-lg font-bold text-amber-500">:</span>
        <TimeBlock value={pad(timeLeft.seconds)} label="SEC" />
      </div>
    </div>
  );
}

function TimeBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="rounded-md bg-neutral-900 px-2.5 py-1 font-mono text-lg font-bold text-white tabular-nums">
        {value}
      </span>
      <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-neutral-500">
        {label}
      </span>
    </div>
  );
}
