// src/store/authStore.ts

import { create } from 'zustand';

// Define the User type (client-side relevant fields)
export interface userData {
  id: number;
  email: string;
  username: string;
}

// Define the State and Actions interfaces
interface AuthState {
  token: string | null;
  user: userData | null;
  isAuthenticated: boolean;
  setAuth: (token: string, user: userData) => void;
  logout: () => void;
}
const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem('token') || null, // Initialize from localStorage
  user: null, // User is typically fetched or set on login/register
  isAuthenticated: !!localStorage.getItem('token'), // Simple check

  setAuth: (token, user) => {
    localStorage.setItem('token', token);
    set({ token, user, isAuthenticated: true });
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ token: null, user: null, isAuthenticated: false });
  },
}));

export default useAuthStore;