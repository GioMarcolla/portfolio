"use client";

import { useDataPreloader } from "@/Lib/Utils/DataPreloader";
import { useEffect, useState } from "react";

let hasGlobalPreloaded = false;

export const DataPreloader = () => {
    const { preloadData } = useDataPreloader();
    const [isPreloading, setIsPreloading] = useState(false);

    // Preload all data when the app starts (only once)
    useEffect(() => {
        if (hasGlobalPreloaded) return; // Prevent multiple executions
        const startPreloading = async () => {
            // Small delay to prioritize initial page render
            const timer = setTimeout(async () => {
                setIsPreloading(true);
                await preloadData();
                setIsPreloading(false);
            }, 500);

            return () => clearTimeout(timer);
        };

        startPreloading();
    }, []);

    return (<>
        {isPreloading && (
            <div className="fixed bottom-4 right-4 bg-background/80 backdrop-blur-sm border border-border rounded-lg px-3 py-2 shadow-lg z-50">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-sm text-foreground">{`Preloading data...`}</span>
                </div>
            </div>
        )}
    </>
    );
};