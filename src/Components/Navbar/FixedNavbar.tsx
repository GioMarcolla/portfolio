import { cn } from "@/Lib/Utils/shadCNUtils";
import { FC } from "react";

type Props = {
    className?: string;
    children?: React.ReactNode;
} & React.ComponentProps<"div">;

const FixedNavbar: FC<Props> = ({ className, children, ...props }) => {
    return (
        <div
            className={cn(
                "flex flex-col items-center p-2 border-r w-fit min-w-fit h-dvh min-h-dvh max-h-dvh",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
};

export default FixedNavbar;
