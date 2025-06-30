import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/Components/Navbar";
import ThemeProvider from "@/Components/UI/NextThemeProvider";

export const metadata: Metadata = {
    title: "Giovanni Marcolla - Full-Stack Developer & Educator",
    description:
        "Portfolio and background of Giovanni Marcolla - Computer Engineer, Full-Stack Developer, and Educator based in Chengdu, China.",
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://giom.vercel.app",
    },
    openGraph: {
        title: "Giovanni Marcolla - Full-Stack Developer & Educator",
        description:
            "Brazilian/Italian Computer Engineer and Full-Stack Developer based in Chengdu. Discover Giovanni's projects, experience, and tech journey.",
        url: "https://giom.vercel.app",
        siteName: "Giovanni Marcolla Portfolio",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://giom.vercel.app/og-image.png",
                width: 1024,
                height: 1024,
                alt: "Giovanni Marcolla - Full-Stack Developer & Educator",
            },
        ],
    },
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="en" suppressHydrationWarning className="text-[8px] md:text-[16px]">
            <head></head>
            {/* CSS fallback for older browser without VH/VW support. */}
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="flex bg-background m-auto w-dvw min-w-dvw min-w-full max-w-dvw h-dvh min-h-dvh min-h-full antialiased">
                        <Navbar />
                        <div className="overflow-auto grow-1">
                            {children}
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;
