"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
const ThemeContext = createContext(null);
function getPreferredTheme() {
    if (typeof window === "undefined")
        return "light";
    const stored = window.localStorage.getItem("kireeye-theme");
    if (stored === "light" || stored === "dark")
        return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        const next = getPreferredTheme();
        setTheme(next);
        document.documentElement.classList.toggle("dark", next === "dark");
    }, []);
    const value = useMemo(() => ({
        theme,
        toggle: () => {
            setTheme((current) => {
                const next = current === "dark" ? "light" : "dark";
                document.documentElement.classList.toggle("dark", next === "dark");
                window.localStorage.setItem("kireeye-theme", next);
                return next;
            });
        },
    }), [theme]);
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx)
        throw new Error("useTheme must be used within ThemeProvider");
    return ctx;
}
