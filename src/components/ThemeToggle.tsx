import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const ThemeToggle = () => {
  const { isDark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="relative w-14 h-7 rounded-full bg-secondary border border-border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/30"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute top-0.5 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
          isDark
            ? "left-0.5 bg-muted"
            : "left-[calc(100%-1.625rem)] bg-primary"
        }`}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5 text-primary" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-primary-foreground" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
