"use client";

import Link from "next/link";
import React, { ComponentPropsWithoutRef } from "react";
import { Button } from "../UI/button";
import { useTheme } from "next-themes";
import { cn } from "@/Lib/Utils/shadCNUtils";
import { Primitive } from "@radix-ui/react-primitive";

type Props = {} & ComponentPropsWithoutRef<typeof Primitive.div>;

const StyledIntro = ({ className }: Props) => {
    const { theme, systemTheme } = useTheme();

    return (
        <div
            className={cn(
                "flex flex-col justify-between font-rubik line text-lg self-center max-w-[640px] sm",
                className
            )}
        >
            <div>
                <h1 className="font-inter font-extrabold text-6xl tracking-wider space">
                    {"Giovanni (Gio)"}
                </h1>
                <h1 className="font-inter font-extrabold text-6xl tracking-wider space">
                    {"Marcolla (纪欧)"}
                </h1>
                <br />
                <p className="font-black text-2xl">
                    <span className="bg-clip-text bg-gradient-to-r from-primary to-accent text-transparent text-3xl">
                        Multidisciplinary{" "}
                    </span>
                    <span>Computer Engineer </span>
                    <br />
                    <span>Building{"   "} </span>
                    <span
                        className="text-transparent text-3xl italic"
                        style={
                            theme === "dark" ||
                            (theme === "system" && systemTheme === "dark")
                                ? { WebkitTextStroke: "1px var(--accent)" }
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
                <Link href={"/projects"}>
                    <Button
                        className={cn("bg-secondary-300 p-8", {
                            hover: "bg-accent",
                        })}
                    >
                        <p className="font-inter font-medium text-text">
                            Checkout my projects?
                        </p>
                    </Button>
                </Link>
                <Link href={"/experience"}>
                    <Button
                        className={cn("p-8", {
                            hover: "bg-accent",
                        })}
                    >
                        <p className="font-inter font-medium text-text">
                            Work Experience
                        </p>
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default StyledIntro;
