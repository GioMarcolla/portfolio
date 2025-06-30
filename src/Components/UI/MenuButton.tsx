import { LucideIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { Button } from "./button";
import Link from "next/link";
import { cn } from "@/Lib/Utils/shadCNUtils";

type Props = {
    icon?: LucideIcon;
    tooltipText?: string;
    path: string;
    name: string;
} & React.ComponentProps<"button">;

const MenuButton = ({
    icon: Icon,
    tooltipText,
    path,
    name,
    className,
}: Props) => {
    const iconElement = Icon ? <Icon className={"!w-full !h-auto"} /> : null;

    return (
        <>
            {tooltipText ? (
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="link"
                            className={cn(
                                "px-2 py-1 font-bold text-text",
                                className
                            )}
                        >
                            <Link href={path} color="text">
                                {iconElement || name}
                            </Link>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="shadow">
                        <p className="invert text-text">{tooltipText}</p>
                    </TooltipContent>
                </Tooltip>
            ) : (
                <Button
                    variant="link"
                    className={cn("px-2 py-1 font-bold text-text", className)}
                >
                    <Link href={path} color="text">
                        {iconElement || name}
                    </Link>
                </Button>
            )}
        </>
    );
};

export default MenuButton;
