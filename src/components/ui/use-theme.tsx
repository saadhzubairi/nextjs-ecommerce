"use client"

import { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';

export const useTheme = () => {
    const [theme, setTheme] = useState(typeof window !== 'undefined' ? localStorage.getItem('theme') || 'light' : 'light'); // Handle initial theme on both client and server

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light'); // Persist theme in localStorage
    };

    useEffect(() => {
        // Hydrate theme on client-side render
        document.documentElement.classList.add(theme);
    }, [theme]);

    return { theme, setTheme, toggleTheme };
};