import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/Components/UI/button";

const StyledIntro = () => {
    return (
        <div
            className="flex flex-col justify-between font-rubik text-lg line h-full"
        >
            <div>
                <h1 className="font-inter font-extrabold text-6xl tracking-wider space">
                    {`Giovanni (Gio)`}
                </h1>
                <h1 className="font-inter font-extrabold text-6xl tracking-wider space">
                    {`Marcolla (纪欧)`}
                </h1>
                <br />
                <p className="font-black text-2xl">
                    <span className="left-0 bg-clip-text bg-linear-to-r from-primary to-secondary text-transparent text-3xl">
                        {` Multidisciplinary `}
                    </span>
                    <span>{`Computer Engineer`} </span>
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
                <Button className="hover:cursor-pointer pop-up-100">
                    <Link href={"/experience"} className="flex flex-row justify-center items-center gap-2">
                        <p className="font-inter font-medium">
                            {`Work Experience`}
                        </p>
                        <ArrowRight />
                    </Link>
                </Button>
                <Button className="hover:cursor-pointer pop-up-100">
                    <Link href={"/projects"} className="flex flex-row justify-center items-center gap-2">
                        <p className="font-inter font-medium">
                            {`Checkout my projects`}
                        </p>
                        <ArrowRight />
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default StyledIntro;
