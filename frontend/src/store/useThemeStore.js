import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: typeof window !== "undefined" && localStorage.getItem("chat-theme") || "light",
  setTheme: (theme) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("chat-theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
    }
    set({ theme });
  },
}));
