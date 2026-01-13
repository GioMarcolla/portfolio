"use client";

import { cn } from "@/Lib/Utils/shadCNUtils";
import IntroMozaic from "../IntroMozaic";
import StyledIntro from "../StyledIntro";
import { motion } from "framer-motion";

type Props = {};

const IntroHero = ({}: Props) => {
    return (
        <div
            className={cn(
                "gap-18 grid grid-cols-1 grid-rows-2 p-18 h-fit max-h-dvh",
                "sm:max-h-[200dvh]",
                "xl:grid-cols-2 xl:grid-rows-1 xl:min-h-dvh xl:max-h-dvh"
            )}
        >
            <motion.div
                className="col-span-1 row-span-1 h-full"
                animate={{
                    x: [-50, 0],
                    opacity: [0, 1],
                }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
            >
                <StyledIntro className="h-full"/>
            </motion.div>
            <motion.div
                className={cn(
                    "col-span-1 row-span-1 bg-background/5 backdrop-blur-xl p-4 rounded-4xl h-full pop-up-100"
                )}
                animate={{
                    x: [50, 0],
                    opacity: [0, 1],
                }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
            >
                <IntroMozaic className="h-full"/>
            </motion.div>
        </div>
    );
};

export default IntroHero;
