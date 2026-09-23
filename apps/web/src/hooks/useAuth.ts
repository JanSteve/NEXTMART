'use client';

import { useAuthStore } from '@/store/auth';

export function useAuth() {
  const { user, isAuthenticated, isLoading, login, logout, setUser } = useAuthStore();

  return {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    setUser,
  };
}
