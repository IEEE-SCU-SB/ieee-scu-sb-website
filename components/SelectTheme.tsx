import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function SelectTheme({ className }: { className?: string }) {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  // Initialize theme on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (savedTheme === "dark" || (savedTheme === null && prefersDark)) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      } else {
        setTheme("light");
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  // Apply theme whenever it changes
  useEffect(() => {
    if (theme) {
      const root = document.documentElement;

      if (theme === "light") {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
      } else if (theme === "dark") {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Prevent rendering until theme is initialized
  if (theme === null) return null;

  return (
    <button onClick={toggleTheme} className={`flex items-center gap-2 ${className}`}>
      <span className="rounded-full lg:p-2 lg:hover:bg-slate-100 lg:dark:hover:bg-slate-800">
        {theme === "light" ? (
          <MoonIcon className="text-primary size-5" />
        ) : (
          <SunIcon className="size-5 text-yellow-400" />
        )}
      </span>
      <span className="lg:sr-only">
        {theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      </span>
    </button>
  );
}
