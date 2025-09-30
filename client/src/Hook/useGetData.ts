import { useEffect } from "react";
import useAuthStore from "../store/useUser";
import type { userData } from "../store/useUser";

const AUTH_KEY = "auth"; // key used in localStorage

export const useAuth = () => {
  const { token, user, isAuthenticated, setAuth, logout } = useAuthStore();

  // Rehydrate auth state from localStorage on refresh
  useEffect(() => {
    const storedAuth = localStorage.getItem(AUTH_KEY);
    if (storedAuth) {
      try {
        const parsed = JSON.parse(storedAuth) as { token: string; user: userData };
        if (parsed.token && parsed.user) {
          setAuth(parsed.token, parsed.user);
        }
      } catch (err) {
        console.error("Failed to parse auth from storage:", err);
        localStorage.removeItem(AUTH_KEY);
      }
    }
  }, [setAuth]);

  // Keep localStorage in sync whenever auth changes
  useEffect(() => {
    if (token && user) {
      localStorage.setItem(AUTH_KEY, JSON.stringify({ token, user }));
    } else {
      localStorage.removeItem(AUTH_KEY);
    }
  }, [token, user]);

  return { token, user, isAuthenticated, setAuth, logout };
};
