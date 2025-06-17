import type { Metadata } from "next";
import { Provider } from "@/Lib/Components/UI/Provider";
import { ColorModeProvider } from "@/Lib/Components/UI/ColorMode";
import { BioData } from "@/Lib/Constants/BioData";

import "./globals.css";

export const metadata: Metadata = {
    title: `${BioData.Name} - ${BioData.Profession}`,
    description:
        "Portfolio/Professional website about Giovanni Marcolla; Brazilian / Italian Citizen; Computer Engineer, Full-Stack Software Developer, Teacher; Currently living in Chengdu, Sichuan, China.",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={"antialiased"}>
                <Provider>
                    <ColorModeProvider>
                        {children}
                    </ColorModeProvider>
                </Provider>
            </body>
        </html>
    );
};

export default RootLayout;
