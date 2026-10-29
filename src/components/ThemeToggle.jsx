"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
export function ThemeToggle() {
    const { theme, toggle } = useTheme();
    return (<button type="button" onClick={toggle} className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-soft-lavender text-primary transition hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
      {theme === "dark" ? <Sun className="h-5 w-5"/> : <Moon className="h-5 w-5"/>}
    </button>);
}
