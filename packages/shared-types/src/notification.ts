import type { NotificationType } from './enums';

// ── Notification Types ─────────────────────────────────────────────────

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  body: string;
  data?: Record<string, unknown>;
  isRead: boolean;
  createdAt: string;
}

export interface NotificationEvent {
  type: NotificationType;
  userId: string;
  orderId?: string;
  data: Record<string, unknown>;
}
