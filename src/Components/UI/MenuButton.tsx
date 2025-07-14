import { LucideIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { Button } from "./button";
import Link from "next/link";
import { cn } from "@/Lib/Utils/shadCNUtils";
import { usePathname } from "next/navigation";

type Props = {
    icon?: LucideIcon;
    tooltipText?: string;
    path: string;
    name: string;
    children?: React.ReactNode;
} & React.ComponentProps<"button">;

const MenuButton = ({
    icon: Icon,
    tooltipText,
    path,
    name,
    className,
    children,
}: Props) => {
    const pathname = usePathname();
    const iconElement = Icon ? (
        <Icon
            className={cn("!w-12 !h-12",
                pathname === path ? "text-primary" : "",
                "md:!w-full md:!h-full"
            )}
        />
    ) : null;

    const ButtonLink = (
        <Button
            variant="link"
            className={cn(
                "px-2 py-1 font-bold text-foreground h-fit",
                "hover:text-accent",
                className
            )}
        >
            <Link
                href={path}
                color="text"
                className="flex flex-col items-center"
            >
                {iconElement || name}
                {children}
            </Link>
        </Button>
    );

    return (
        <>
            {tooltipText ? (
                <Tooltip>
                    <TooltipTrigger asChild>{ButtonLink}</TooltipTrigger>
                    <TooltipContent
                        side="right"
                        className="bg-background fill-background shadow-md shadow-accent"
                    >
                        <p className="text-foreground">{tooltipText}</p>
                    </TooltipContent>
                </Tooltip>
            ) : (
                ButtonLink
            )}
        </>
    );
};

export default MenuButton;
