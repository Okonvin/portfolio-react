import { useCallback, useState } from "react";

// The saved (or system) theme is applied by the small script in index.html before the
// page paints. This hook just reads it and lets a button change it.
export function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || "light");

  const toggle = useCallback(() => {
    const root = document.documentElement;
    const next = theme === "dark" ? "light" : "dark";

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.classList.add("theme-fade");
      setTimeout(() => root.classList.remove("theme-fade"), 400);
    }

    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      /* storage can be blocked: the theme still changes for this visit */
    }
    setTheme(next);
  }, [theme]);

  return [theme, toggle];
}
