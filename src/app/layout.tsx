import "./globals.css";

import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import Navbar from "@/Components/Navbar";
import ThemeProvider from "@/Components/UI/NextThemeProvider";
import Background from "@/Components/UI/Background";
// import { DataProvider } from "@/Components/UI/DataProvider";
import { ServiceWorker } from "@/Components/UI/ServiceWorker";
import { SpeedInsights } from "@vercel/speed-insights/next";

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

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter'
});

const rubik = Rubik({
    subsets: ['latin'], 
    display: 'swap',
    variable: '--font-rubik'
});

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${inter.variable} ${rubik.variable} text-[8px] md:text-[16px]`}
        >
            <head>
            </head>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="vapor"
                    enableSystem={false}
                    disableTransitionOnChange={false}
                >
                    <Background />
                    {/* CSS fallback for older browser without VH/VW support. */}
                    <div className="flex bg-transparent m-auto w-dvw min-w-full max-w-dvw h-dvh min-h-full antialiased">
                        <Navbar />
                        <div className="overflow-auto grow">
                            {/* <DataProvider> */}
                                {children}
                            {/* </DataProvider> */}
                        </div>
                        <SpeedInsights/>
                    </div>
                    <ServiceWorker />
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;
