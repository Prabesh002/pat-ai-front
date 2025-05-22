import { create } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';
import { AUTH_STORAGE_KEY } from '../constants';

interface AuthState {
  isAuthenticated: boolean;
  user: any | null;
  login: (userData: any) => void;
  logout: () => void;
}

type AuthPersist = PersistOptions<AuthState>;

export const useAuth = create<AuthState, [["zustand/persist", AuthPersist]]>(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      login: (userData) => set({ isAuthenticated: true, user: userData }),
      logout: () => set({ isAuthenticated: false, user: null }),
    }),
    {
      name: AUTH_STORAGE_KEY,
    }
  )
);
