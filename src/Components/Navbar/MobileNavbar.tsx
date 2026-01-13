import { ArrowLeft, Menu } from "lucide-react";
import { FC, useEffect, useState } from "react";

import { Button } from "../UI/button";
import { cn } from "@/Lib/Utils/shadCNUtils";

type Props = {
    className?: string;
    children?: React.ReactNode;
} & React.ComponentProps<"div">;

const MobileNavbar: FC<Props> = ({ children, className, ...props }) => {
    const [open, setOpen] = useState(false);
    const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout | null>(
        null
    );

    const toggleMenu = () => {
        setOpen((state) => !state);
    };

    const triggerTimeout = () => {
        setCurrentTimeout(
            setTimeout(() => {
                setOpen(false);
            }, 3000)
        );
    };

    useEffect(() => {
        if (!open && currentTimeout) {
            clearTimeout(currentTimeout);
            setCurrentTimeout(null);
        }
        return () => {
            if (currentTimeout) {
                clearTimeout(currentTimeout);
                setCurrentTimeout(null);
            }
        };
    }, [open, currentTimeout]);

    return (
        <div
            className={cn(
                "z-10 fixed flex flex-col justify-between items-center bg-background",
                open ? "w-fit" : "w-0",
                className
            )}
            onMouseEnter={() => {
                if (currentTimeout) {
                    clearTimeout(currentTimeout);
                    setCurrentTimeout(null);
                }
            }}
            onMouseLeave={triggerTimeout}
            {...props}
        >
            <Button
                onClick={toggleMenu}
                className={cn(
                    "left-0 z-100 absolute bg-transparent w-[32px] h-[32px] text-text",
                    "md:hidden"
                )}
                variant="ghost"
            >
                {!open && <Menu className="!w-full !h-auto" />}
                {open && <ArrowLeft className="!w-full !h-auto" />}
            </Button>
            <div
                className={cn(
                    "flex flex-col items-center bg-transparent p-2 border-secondary-100 border-r-1 w-fit min-w-fit h-dvh min-h-dvh max-h-dvh",
                    "md:!translate-x-0",
                    open ? "translate-x-0 w-fit" : "-translate-x-full w-0",
                    "transition-transform duration-300 ease-in-out",
                    "dark:border-secondary-300"
                )}
            >
                {children}
            </div>
        </div>
    );
};

export default MobileNavbar;
