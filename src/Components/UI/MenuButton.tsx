import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { Button } from "./button";
import Link from "next/link";
import { cn } from "@/Lib/Utils/shadCNUtils";
import { usePathname } from "next/navigation";

type Props = {
    icon: React.ReactNode;
    tooltipText?: string;
    path: string;
    name: string;
    children?: React.ReactNode;
} & React.ComponentProps<"button">;

const MenuButton = ({
    icon,
    tooltipText,
    path,
    name,
    className,
    children,
}: Props) => {
    const pathname = usePathname();

    const iconElement = (
        <div className={pathname === path ? "text-primary" : ""}>
            {icon}
        </div>
    );

    const ButtonLink = (
        <Button
            variant="link"
            className={cn(
                "px-2 py-1 h-fit font-bold text-foreground",
                "hover:text-primary/60",
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
                        className="bg-primary shadow-accent shadow-sm fill-background"
                    >
                        <p className="text-foreground luxe:text-background soothing:text-background">
                            {tooltipText}
                        </p>
                    </TooltipContent>
                </Tooltip>
            ) : (
                ButtonLink
            )}
        </>
    );
};

export default MenuButton;
