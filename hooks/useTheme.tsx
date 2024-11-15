"use client"
import { createContext, useContext, useEffect, useState } from "react";

type ThemePack = [boolean, () => void, boolean];

export const DarkMode = createContext<ThemePack | undefined>(undefined);
export const useDarkMode = (): ThemePack => {
    const context = useContext(DarkMode);
    if (!context) throw new Error('couldn\'t get dark mode context');
    return context;
}

export function useTheme(): ThemePack {
    const [darkMode, setDarkMode] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('theme');
        setDarkMode(savedTheme ? savedTheme === 'dark' : systemPrefersDark);
        setIsInitialized(true);
    }, []);

    const toggleTheme = () => {
        const newTheme = darkMode ? 'light' : 'dark';
        setDarkMode(newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
    };

    return [darkMode, toggleTheme, isInitialized];
}
