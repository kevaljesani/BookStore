import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@/types';

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, name: string) => void;
  loginAsGuest: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      
      login: (email: string, name: string) => {
        set({
          user: {
            id: Date.now().toString(),
            email,
            name,
            isGuest: false
          },
          isAuthenticated: true
        });
      },
      
      loginAsGuest: () => {
        set({
          user: {
            id: `guest_${Date.now()}`,
            email: 'guest@example.com',
            name: 'Guest User',
            isGuest: true
          },
          isAuthenticated: true
        });
      },
      
      logout: () => {
        set({ user: null, isAuthenticated: false });
      }
    }),
    {
      name: 'auth-storage',
    }
  )
);