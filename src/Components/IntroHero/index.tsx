import { cn } from "@/Lib/Utils/shadCNUtils";
import IntroMozaic from "../IntroMozaic";
import StyledIntro from "../StyledIntro";

type Props = {};

const IntroHero = ({ }: Props) => {
    return (
        <div
            className={cn(
                "gap-18 grid grid-cols-1 grid-rows-2 p-18 h-fit max-h-dvh",
                "sm:max-h-[200dvh]",
                "xl:grid-cols-2 xl:grid-rows-1 xl:min-h-dvh xl:max-h-dvh"
            )}
        >
            <div className="col-span-1 row-span-1 h-full animate-slide-in-left">
                <StyledIntro />
            </div>
            <div className="col-span-1 row-span-1 bg-background/5 backdrop-blur-xl p-4 rounded-4xl h-full pop-up-100 animate-slide-in-left ">
                <IntroMozaic className="h-full" />
            </div>
        </div>
    );
};

export default IntroHero;
