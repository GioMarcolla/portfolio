import { cn } from "@/Lib/Utils/shadCNUtils";
import IntroMozaic from "../IntroMozaic";
import StyledIntro from "../StyledIntro";

type Props = {};

const IntroHero = ({}: Props) => {
    return (
        <div
            className={cn(
                "gap-18 grid grid-cols-1 grid-rows-2 p-18 h-full min-h-[200dvh] max-h-[200dvh]",
                "xl:grid-cols-2 xl:grid-rows-1 xl:max-h-dvh xl:min-h-dvh"
            )}
        >
            <StyledIntro className="col-span-1 row-span-1" />
            <div
                className={cn(
                    "col-span-1 row-span-1 bg-background/5 backdrop-blur-xl p-4 rounded-4xl pop-up-100",
                )}
            >
                <IntroMozaic />
            </div>
        </div>
    );
};

export default IntroHero;
