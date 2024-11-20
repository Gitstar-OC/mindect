"use client";
import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function ThemeChanger() {
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    // Apply the theme on initial load
    const currentTheme = theme === "system" ? systemTheme : theme;
    applyTheme(currentTheme);
  }, [theme, systemTheme]);

  const applyTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {theme === "light" ? (
        <Moon style={{ height: "1.25rem", width: "1.25rem" }} />
      ) : (
        <Sun style={{ height: "1.25rem", width: "1.25rem" }} />
      )}
    </Button>
  );
}