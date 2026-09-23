import { z } from 'zod';

// ── Review Types ───────────────────────────────────────────────────────

export interface Review {
  id: string;
  userId: string;
  productId: string;
  orderId: string;
  rating: number;
  title: string;
  body: string;
  images: string[];
  isVerifiedPurchase: boolean;
  helpfulCount: number;
  notHelpfulCount: number;
  user: {
    firstName: string;
    lastName: string;
    avatar?: string;
  };
  createdAt: string;
}

export interface ReviewSummary {
  productId: string;
  averageRating: number;
  totalReviews: number;
  ratingBreakdown: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
}

// ── Zod Schemas ───────────────────────────────────────────────────────

export const createReviewSchema = z.object({
  productId: z.string().uuid(),
  orderId: z.string().uuid(),
  rating: z.number().int().min(1).max(5),
  title: z.string().min(3).max(100),
  body: z.string().min(10).max(2000),
  images: z.array(z.string().url()).max(3).optional(),
});

export type CreateReviewInput = z.infer<typeof createReviewSchema>;
