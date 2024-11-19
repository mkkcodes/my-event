"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

type themeProps = "dark" | "light";

export default function ThemeToggleButton() {
  const [theme, setTheme] = useState<themeProps | null>(null);

  useEffect(() => {
    // Get the initial theme from localStorage or default to 'dark'
    const initialTheme = localStorage.getItem("theme") || "dark";
    setTheme(initialTheme as themeProps);
  }, []);

  useEffect(() => {
    if (theme) {
      const root = window.document.documentElement;
      if (theme === "dark") {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  if (theme === null)
    return (
      <button
        onClick={toggleTheme}
        className="w-7 h-7 border-gray-500 dark:border-white/25 border rounded-md p-2 hover:bg-gray-300/50 dark:hover:bg-gray-700 transitions duration-300"
      ></button>
    );

  return (
    <button
      onClick={toggleTheme}
      className="border-gray-500/50 dark:border-white/25 border rounded-md p-1 hover:bg-gray-300/50 dark:hover:bg-gray-700 transitions duration-300"
    >
      {theme === "dark" ? (
        <SunIcon className="w-5 h-5" />
      ) : (
        <MoonIcon className="w-5 h-5" />
      )}
    </button>
  );
}
