import type { Metadata } from "next";
import './globals.css';

import { ColorModeProvider } from '@/Lib/Components/UI/ColorMode';
import { Provider } from '@/Lib/Components/UI/Provider';

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
        <html lang="en" suppressHydrationWarning>
            <body className={"antialiased"}>
                <Provider>
                    <ColorModeProvider>{children}</ColorModeProvider>
                </Provider>
            </body>
        </html>
    );
};

export default RootLayout;
