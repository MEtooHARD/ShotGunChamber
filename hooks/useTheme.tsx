"use client"
import { useEffect, useState } from "react";

export function useTheme(): [boolean, () => void, boolean] {
    const [darkMode, setDarkMode] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('theme');
        setDarkMode(savedTheme ? savedTheme === 'dark' : systemPrefersDark);
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        setIsInitialized(true);
    }, []);

    const toggleTheme = () => {
        const newTheme = darkMode ? 'light' : 'dark';
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        setDarkMode(newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
    };

    return [darkMode, toggleTheme, isInitialized];
}
