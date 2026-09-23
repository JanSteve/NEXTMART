'use client';

import { useState } from 'react';
import { Camera, X } from 'lucide-react';
import { StarRating } from '@/components/ui/StarRating';

interface ReviewFormProps {
  onSubmit?: (review: { rating: number; title: string; body: string }) => void;
}

export function ReviewForm({ onSubmit }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0 || !title.trim() || !body.trim()) return;
    onSubmit?.({ rating, title, body });
    setRating(0);
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-neutral-200 p-5">
      <h3 className="font-display text-base font-semibold text-neutral-900">Write a Review</h3>

      {/* Star rating */}
      <div>
        <p className="mb-1.5 text-sm font-medium text-neutral-700">Your Rating</p>
        <StarRating rating={rating} size="lg" interactive onChange={setRating} />
      </div>

      {/* Title */}
      <div>
        <label className="mb-1 block text-sm font-medium text-neutral-700">Review Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Sum it up in a few words"
          className="w-full rounded-md border border-neutral-200 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
        />
      </div>

      {/* Body */}
      <div>
        <label className="mb-1 block text-sm font-medium text-neutral-700">Your Review</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Tell others what you liked or didn't like about this product"
          rows={4}
          className="w-full resize-none rounded-md border border-neutral-200 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
        />
      </div>

      {/* Photo upload area */}
      <div>
        <p className="mb-1 text-sm font-medium text-neutral-700">Add Photos (optional)</p>
        <button
          type="button"
          className="flex h-20 w-20 flex-col items-center justify-center gap-1 rounded-lg border-2 border-dashed border-neutral-300 text-neutral-400 transition-colors hover:border-primary-400 hover:text-primary-500"
        >
          <Camera className="h-5 w-5" />
          <span className="text-[10px]">Add Photo</span>
        </button>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={rating === 0 || !title.trim() || !body.trim()}
        className="rounded-md bg-primary-500 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600 disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:text-neutral-400"
      >
        Submit Review
      </button>
    </form>
  );
}
