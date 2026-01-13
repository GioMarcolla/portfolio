import { Button } from "@/Components/UI/button";
import { usePathname } from "next/navigation";
import AnimatedElement from "@/Components/UI/AnimatedElement";
import React, { useEffect, useState } from "react";

type Props = {
    children?: React.ReactNode;
} & React.ComponentProps<"button">;

const AnimatedButton = React.memo(
    ({ className, children, ...props }: Props) => {
        const [isHovered, setIsHovered] = useState<boolean>(false);
        const [isPressed, setIsPressed] = useState<boolean>(false);
        const pathname = usePathname();

        useEffect(() => {
            setIsHovered(false);
        }, [pathname]);

        const onTapComplete = () => setIsPressed(false);

        return (
            <AnimatedElement
                isHovered={isHovered}
                isPressed={isPressed}
                onTapComplete={onTapComplete}
            >
                <Button className={className} {...props}>
                    {children}
                </Button>
            </AnimatedElement>
        );
    }
);

export default AnimatedButton;
