"use client"
import { useEffect, useState } from "react";


export function useTheme() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('theme');
        setDarkMode(savedTheme ? savedTheme === 'dark' : systemPrefersDark);
    }, []);

    const toggleTheme = () => {
        const newTheme = darkMode ? 'light' : 'dark';
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        setDarkMode(newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
    };

    return { darkMode, toggleTheme };
}