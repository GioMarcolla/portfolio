import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/Components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ["var(--font-inter)", "sans-serif"],
                rubik: ["var(--font-rubik)", "sans-serif"],
                montserrat: ['"Montserrat"', "sans-serif"],
            },
            colors: {
                vapor: {
                    red: "#a6263e",
                    darkRed: "#8C2742",
                    blue: "#326A8C",
                    darkBlue: "#2E728C",
                    lightBlue: "#BDE3F2",
                },
                gloomy: {
                    blue: "#2E728C",
                    darkBlue: "#0B1C26",
                    lightBlue: "#63CAF2",
                    teal: "#79F2E6",
                    mutedOlive: "#AFD9AD",
                },
                race: {
                    leatherRed: "#A6212C",
                    leatherMocha: "#734549",
                    bronze: "#B38450",
                    red: "#BF190A",
                    black: "#0D0D0D",
                },
                soothing: {
                    olive: "#594B02",
                    yellow: "#D9B607",
                    gray: "#D9CDBF",
                    tan: "#A66D3C",
                    brown: "#593520",
                },
            },
            components: {
                
            }
        },
    },
} satisfies Config;
