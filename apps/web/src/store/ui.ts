import { create } from 'zustand';

interface UIState {
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (isOpen: boolean) => void;
  isCartOpen: boolean;
  setCartOpen: (isOpen: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isMobileMenuOpen: false,
  setMobileMenuOpen: (isOpen) => set({ isMobileMenuOpen: isOpen }),
  isCartOpen: false,
  setCartOpen: (isOpen) => set({ isCartOpen: isOpen }),
}));