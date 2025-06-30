import { cn } from "@/Lib/Utils/shadCNUtils";
import { PropsWithChildren } from "react";

const FixedNavbar = ({ children }: PropsWithChildren) => {
    return (
        <div
            className={cn(
                "flex flex-col items-center bg-transparent p-2 border-secondary-100 border-r-1 w-fit min-w-fit h-dvh min-h-dvh max-h-dvh",
                "dark:border-secondary-300"
            )}
        >
            {children}
        </div>
    );
};

export default FixedNavbar;
