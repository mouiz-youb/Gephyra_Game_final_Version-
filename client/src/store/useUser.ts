// src/store/authStore.ts
import { create } from "zustand";
import {jwtDecode} from "jwt-decode";

export interface userData {
  id: number;
  email: string;
  username: string;
}

interface AuthState {
  token: string | null;
  user: userData | null;
  isAuthenticated: boolean;
  setAuth: (token: string, user: userData) => void;
  logout: () => void;
  checkAuth: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("token") || null,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null,
  isAuthenticated: !!localStorage.getItem("token"),

  setAuth: (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    set({ token, user, isAuthenticated: true });
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    set({ token: null, user: null, isAuthenticated: false });
  },

  checkAuth: () => {
    const token = localStorage.getItem("token");
    if (!token) {
      set({ token: null, user: null, isAuthenticated: false });
      return;
    }

    try {
      const decoded: any = jwtDecode(token);
      if (decoded.exp * 1000 < Date.now()) {
        // Token expired
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        set({ token: null, user: null, isAuthenticated: false });
      } else {
        set({
          token,
          user: localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user")!)
            : null,
          isAuthenticated: true,
        });
      }
    } catch (err) {
      console.error("Invalid token", err);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      set({ token: null, user: null, isAuthenticated: false });
    }
  },
}));

export default useAuthStore;
