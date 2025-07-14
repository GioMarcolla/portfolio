import { cn } from "@/Lib/Utils/shadCNUtils";
import { FC } from "react";

type Props = {
    className?: string;
};

const Background: FC<Props> = ({ className }) => {
    return (
        <div
            className={cn(
                "absolute top-0 left-0 w-full h-dvh h-lvh max-h-dvh max-h-lvh max-w-full overflow-hidden -z-10",
                className
            )}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                preserveAspectRatio="none"
                viewBox="0 0 1920 1200"
                className="-mt-1 -ml-1 w-[calc(100dvw+0.5rem)] h-[calc(100dvh+0.5rem)]"
            >
                <path
                    className="fill-background stroke-secondary-foreground"
                    stroke-width="5"
                    d="m1922.67 0-193.4 1012.35L2.68 1200V0H1923z"
                />
                <path
                    className="fill-secondary stroke-secondary-foreground"
                    stroke-width="1"
                    d="m-116.37-92.96 285.7 190.72h-338.66l52.96-190.72z"
                    transform="matrix(0 -3.54345 1 0 1822.24 600)"
                />
                <path
                    className="fill-primary stroke-secondary-foreground"
                    stroke-width="1"
                    d="m135.64-89.89 33.69 187.65h-338.66L135.64-89.89z"
                    transform="matrix(5.67045 0 0 1 960.16 1102.24)"
                />
            </svg>
        </div>
    );
};

export default Background;
