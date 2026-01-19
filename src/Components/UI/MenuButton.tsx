"use client"

import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { Button } from "@/Components/UI/button";
import Link from "next/link";
import { cn } from "@/Lib/Utils/shadCNUtils";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
    IconComponent: React.ComponentType<{ className?: string }>;
    tooltipText?: string;
    path: string;
    name?: string;
    children?: React.ReactNode;
    iconSize?:
    | "size-8"
    | "size-7"
    | "size-6"
    | "size-5"
    | "size-4"
    | "size-3"
    | "size-2"
    | "size-1";
} & React.ComponentProps<"button">;

const MenuButton = React.memo(
    ({
        IconComponent,
        tooltipText,
        path,
        name,
        className,
        children,
        iconSize = "size-8",
    }: Props) => {
        const pathname = usePathname();

        const iconElement = (
            <IconComponent
                className={cn(
                    pathname === path ? "text-primary" : "",
                    iconSize
                )}
            />
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
                    href={path as any}
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
    }
);

export default MenuButton;
