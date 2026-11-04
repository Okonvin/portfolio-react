import { useTheme } from "../hooks/useTheme.js";

// Round button in the top-right corner. Light mode shows the moon, dark mode shows the sun.
export default function ThemeToggle() {
  const [theme, toggle] = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={theme === "dark"}
      aria-label="Dark mode"
      title="Toggle dark mode"
      className="fixed top-[max(0.9rem,env(safe-area-inset-top,0px))] right-[0.9rem] z-20 grid size-11 cursor-pointer place-items-center rounded-full border border-toggle-border bg-surface p-0 shadow-[0_6px_16px_rgba(0,0,0,0.18)] transition hover:scale-[1.08] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-focus"
    >
      <img src="/assets/moon.svg" alt="" className="size-[1.4rem] object-contain dark:hidden" />
      <img src="/assets/sun.svg" alt="" className="hidden size-[1.4rem] object-contain dark:block" />
    </button>
  );
}
