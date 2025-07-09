"use client";

import Link from "next/link";
import React, { ComponentPropsWithoutRef, useEffect, useState } from "react";
import { Button } from "../UI/button";
import { useTheme } from "next-themes";
import { cn } from "@/Lib/Utils/shadCNUtils";
import { Primitive } from "@radix-ui/react-primitive";
import { ArrowRight } from "lucide-react";
import { BiodataType } from "@/Lib/zod/schemas";
import { useBiodataStore } from "@/Lib/Stores/BiodataStore";

type Props = {} & ComponentPropsWithoutRef<typeof Primitive.div>;

const StyledIntro = ({ className }: Props) => {
    const { theme, systemTheme } = useTheme();
    const getBiodata = useBiodataStore((state) => state.getData);

    const [Biodata, setBiodata] = useState<BiodataType | null>(null);

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        getBiodata().then(setBiodata).catch(console.error);
    }, [getBiodata]);

    // Required to properly set the theme after mount due to SSR
    useEffect(() => {
        setIsDark(
            theme === "dark" || (theme === "system" && systemTheme === "dark")
        );
    }, [theme, systemTheme, setIsDark]);

    return (
        <div
            className={cn(
                "flex flex-col justify-between font-rubik line text-lg self-center max-w-[640px]",
                className
            )}
        >
            <div>
                <h1 className="font-inter font-extrabold text-6xl tracking-wider space">
                    {`${Biodata?.Name.First || "Giovanni"} (${
                        Biodata?.Nickname || "Gio"
                    })`}
                </h1>
                <h1 className="font-inter font-extrabold text-6xl tracking-wider space">
                    {`${Biodata?.Name.Last || "Marcolla"} (纪欧)`}
                </h1>
                <br />
                <p className="font-black text-2xl">
                    <span className="bg-clip-text bg-gradient-to-r from-amber-500 to-rose-600 text-transparent text-3xl">
                        Multidisciplinary{" "}
                    </span>
                    <span>{Biodata?.Profession || "Computer Engineer"} </span>
                    <br />
                    <span>Building{"   "} </span>
                    <span
                        className="text-transparent text-3xl italic"
                        style={
                            isDark
                                ? { WebkitTextStroke: "1px white" }
                                : { WebkitTextStroke: "1px black" }
                        }
                    >
                        Smart, Reliable, & Scalable{"   "}
                    </span>
                    technologies.
                </p>
                <p className="mt-8">
                    With a strong background in software, embedded systems,
                    education, and product development life-cycle, I’ve led
                    projects across Brazil, Thailand, and China—bringing teams
                    together and delivering real-world solutions.
                    <br />
                    <br />
                    Beyond tech, I’m into Formula 1, BBQ cooking, anime, sci-fi,
                    and spending time with my dog and cat. I appreciate Asian
                    culture and can strum a guitar well enough for a campfire
                    tune.
                </p>
            </div>

            <div className="flex justify-center gap-4 mt-8">
                <Link href={"/experience"}>
                    <Button
                        className={cn(
                            "bg-amber-500 border-1 border-amber-300 p-6 rounded-full",
                            "border-amber-400",
                            "hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-200",
                            "dark:hover:shadow-amber-600"
                        )}
                    >
                        <p className="font-inter font-medium">
                            Work Experience
                        </p>
                        <ArrowRight />
                    </Button>
                </Link>
                <Link href={"/projects"}>
                    <Button
                        className={cn(
                            "bg-rose-600 p-6 border-rose-400 border-1 rounded-full",
                            "dark:border-rose-500",
                            "hover:bg-rose-500 hover:shadow-lg hover:shadow-rose-300",
                            "dark:hover:shadow-rose-700"
                        )}
                    >
                        <p className="font-inter font-medium">
                            Checkout my projects
                        </p>
                        <ArrowRight />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default StyledIntro;
