import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  productId: string;
  productVariantId?: string;
  productName?: string;
  name?: string;
  productImage?: string;
  imageUrl?: string;
  brand?: string;
  slug?: string;
  size?: string;
  color?: string;
  price: number;
  mrp?: number;
  quantity: number;
  stockQty?: number;
  isAvailable?: boolean;
}

interface CartState {
  items: CartItem[];
  addItem: (item: Partial<CartItem> & { productId: string; price: number }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
  getSubtotal: () => number;
  getTotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) =>
        set((state) => {
          const existing = state.items.find(
            (i) => i.productId === item.productId && (item.productVariantId ? i.productVariantId === item.productVariantId : true),
          );
          const maxStock = item.stockQty ?? 99;
          const name = item.productName || item.name || 'Product';
          const image = item.productImage || item.imageUrl || 'https://picsum.photos/400/400';
          const mrp = item.mrp ?? item.price;

          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === existing.id
                  ? { ...i, quantity: Math.min(i.quantity + (item.quantity ?? 1), maxStock) }
                  : i,
              ),
            };
          }
          const fullItem: CartItem = {
            id: `${item.productId}-${item.productVariantId || 'default'}-${Date.now()}`,
            productId: item.productId,
            productVariantId: item.productVariantId || 'default',
            productName: name,
            name: name,
            productImage: image,
            imageUrl: image,
            brand: item.brand || 'NexMart',
            slug: item.slug || item.productId,
            size: item.size,
            color: item.color,
            price: item.price,
            mrp: mrp,
            quantity: item.quantity ?? 1,
            stockQty: maxStock,
            isAvailable: item.isAvailable ?? true,
          };
          return {
            items: [...state.items, fullItem],
          };
        }),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),

      updateQuantity: (id, quantity) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, quantity: Math.max(1, Math.min(quantity, i.stockQty ?? 99)) } : i,
          ),
        })),

      clearCart: () => set({ items: [] }),

      getItemCount: () => get().items.reduce((acc, item) => acc + item.quantity, 0),

      getSubtotal: () => get().items.reduce((acc, item) => acc + item.price * item.quantity, 0),

      getTotal: () => {
        const subtotal = get().getSubtotal();
        const delivery = subtotal > 999 ? 0 : 49;
        return subtotal + delivery;
      },
    }),
    {
      name: 'nexmart-cart',
    },
  ),
);

export default useCartStore;
