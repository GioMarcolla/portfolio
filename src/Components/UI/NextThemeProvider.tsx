"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";

const ThemeProvider = ({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

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

    if (!mounted) {
        // Return children with default theme to avoid hydration mismatch
        return <>{children}</>;
    }

    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
