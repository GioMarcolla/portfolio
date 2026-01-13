"use client";

import Link from "next/link";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import { Button } from "../UI/button";
import { cn } from "@/Lib/Utils/shadCNUtils";
import { Primitive } from "@radix-ui/react-primitive";
import { ArrowRight } from "lucide-react";
import { BiodataType } from "@/Lib/zod/schemas";
import { useBiodataStore } from "@/Lib/Stores/BiodataStore";

type Props = {} & ComponentPropsWithoutRef<typeof Primitive.div>;

const StyledIntro = ({ className }: Props) => {
    const getBiodata = useBiodataStore((state) => state.getData);

    const [Biodata, setBiodata] = useState<BiodataType | null>(null);

    useEffect(() => {
        getBiodata().then(setBiodata).catch(console.error);
    }, [getBiodata]);

    return (
        <div
            className={cn(
                "flex flex-col justify-between font-rubik text-lg line",
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
                    <span className="left-0 bg-clip-text bg-gradient-to-r from-primary to-secondary text-transparent text-3xl">
                        {` Multidisciplinary `}
                    </span>
                    <span>{Biodata?.Profession || `Computer Engineer`} </span>
                    <br />
                    <span>Building</span>
                    <span className="relative text-transparent text-3xl italic hallow-stroke">
                        {` Smart, Reliable, & Scalable `}
                    </span>
                    technologies.
                </p>
                <p className="mt-8 text-justify">
                    {`With a strong background in software, embedded systems,
                    education, and product development life-cycle, I’ve led
                    projects across Brazil, Thailand, and China—bringing teams
                    together and delivering real-world solutions.`}
                    <br />
                    <br />
                    {`Beyond tech, I’m into Formula 1, BBQ cooking, anime, sci-fi,
                    and spending time with my dog and cat. I appreciate Asian
                    culture and can strum a guitar well enough for a campfire
                    tune.`}
                </p>
            </div>

            <div className="flex justify-center items-center gap-4 mt-8 h-full">
                <Link href={"/experience"}>
                    <Button className="hover:cursor-pointer pop-up-100">
                        <p className="font-inter font-medium">
                            Work Experience
                        </p>
                        <ArrowRight />
                    </Button>
                </Link>
                <Link href={"/projects"}>
                    <Button className="hover:cursor-pointer pop-up-100-[100%]">
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
