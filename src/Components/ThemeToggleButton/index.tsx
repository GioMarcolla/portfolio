"use client";

import { ChevronDownIcon, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/Components/UI/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/Components/UI/dropdown-menu";
import { cn } from "@/Lib/Utils/shadCNUtils";

const ThemeToggleButton = () => {
    const { setTheme, theme } = useTheme();
    const themes = ["vapor", "gloomy", "race", "soothing", "mono", "luxe"];

    const handleThemeChange = (newTheme: string) => {
        // Remove all theme classes from HTML element
        const html = document.documentElement;
        themes.forEach((themeClass) => {
            html.classList.remove(themeClass);
        });

        // Set the new theme
        setTheme(newTheme);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="group justify-between gap-1 p-1 w-full min-w-fit h-auto"
                >
                    <Sun
                        className={cn(
                            "w-[1.2rem] h-[1.2rem] rotate-0  scale-100  transition-all",
                            "vapor:-rotate-90 vapor:scale-0",
                            "race:-rotate-90 race:scale-0",
                            "gloomy:-rotate-90 gloomy:scale-0",
                            "mono:-rotate-90 mono:scale-0"
                        )}
                    />
                    <Moon
                        className={cn(
                            "absolute w-[1.2rem] h-[1.2rem] rotate-90 scale-0 transition-all",
                            "vapor:rotate-0 vapor:scale-100",
                            "race:rotate-0 race:scale-100",
                            "gloomy:rotate-0 gloomy:scale-100",
                            "mono:rotate-0 mono:scale-100"
                        )}
                    />
                    <span className="sr-only">Toggle theme</span>
                    <ChevronDownIcon
                        className="top-[1px] relative ml-1 size-3 group-data-[state=open]:rotate-180 transition duration-300"
                        aria-hidden="true"
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                className="bg-background border-0 shadow-md shadow-accent"
            >
                {themes.map((themeName) => (
                    <DropdownMenuItem
                        key={themeName}
                        onClick={() => handleThemeChange(themeName)}
                        className={theme === themeName ? "bg-accent" : ""}
                    >
                        {themeName}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ThemeToggleButton;
