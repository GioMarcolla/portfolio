"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect } from "react";

const ThemeProvider = ({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) => {
    useEffect(() => {
        // Ensure only one theme class is applied at a time
        const html = document.documentElement;
        const themeClasses = ['vapor', 'gloomy', 'race', 'soothing'];
        
        // Remove any existing theme classes
        themeClasses.forEach(theme => {
            html.classList.remove(theme);
        });
        
        // Add the current theme class
        const currentTheme = localStorage.getItem('theme') || 'vapor';
        if (themeClasses.includes(currentTheme)) {
            html.classList.add(currentTheme);
        }
    }, []);

    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
