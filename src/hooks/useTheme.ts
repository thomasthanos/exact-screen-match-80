import { useCallback, useSyncExternalStore } from "react";

// Singleton theme store so every component shares the same state
let listeners: (() => void)[] = [];

function getSnapshot(): boolean {
  return !document.documentElement.classList.contains("light");
}

function subscribe(cb: () => void) {
  listeners.push(cb);
  return () => {
    listeners = listeners.filter((l) => l !== cb);
  };
}

function notifyAll() {
  listeners.forEach((l) => l());
}

// Initialize from localStorage on first load
if (typeof window !== "undefined") {
  const saved = localStorage.getItem("gta-theme");
  if (saved === "light") {
    document.documentElement.classList.add("light");
  } else {
    document.documentElement.classList.remove("light");
  }
}

export function useTheme() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot);

  const toggle = useCallback(() => {
    const root = document.documentElement;
    if (root.classList.contains("light")) {
      root.classList.remove("light");
      localStorage.setItem("gta-theme", "dark");
    } else {
      root.classList.add("light");
      localStorage.setItem("gta-theme", "light");
    }
    notifyAll();
  }, []);

  return { isDark, toggle };
}
