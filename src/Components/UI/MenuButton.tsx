import { LucideIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { Button } from "./button";
import Link from "next/link";

type Props = {
    icon?: LucideIcon;
    tooltipText?: string;
    path: string;
    name: string;
};

const MenuButton = ({ icon: Icon, tooltipText, path, name }: Props) => {
    const iconElement = Icon ? <Icon className="!w-6 !h-6" /> : null;

    return (
        <>
            {tooltipText ? (
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="link"
                            className="px-2 py-1 font-bold text-text"
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
                    className="px-2 py-1 font-bold text-text"
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
