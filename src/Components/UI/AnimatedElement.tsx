import React, { ReactNode, useState } from "react";
import { motion, HTMLMotionProps, easeInOut } from "framer-motion";
import type { Variants } from "framer-motion";

interface AnimatedElementProps extends HTMLMotionProps<"div"> {
    isHovered: boolean;
    isPressed: boolean;
    children: ReactNode;
    onTapComplete?: () => void;
}

const animationVariants: Variants = {
    idle: { y: 0, scale: 1, opacity: 1 },
    hover: {
        y: [0, -10, 0],
        scale: [1, 1.1, 1.2],
        transition: {
            duration: 0.6,
            times: [0, 0.4, 1],
            ease: easeInOut,
        },
    },
    tap: {
        y: [0, 0],
        scale: [1.2, 1.8],
        opacity: [1, 0],
        transition: {
            duration: 0.15,
            times: [0, 1],
            ease: easeInOut,
        },
    },
};

const AnimatedElement = React.memo(
    ({ children, isHovered, isPressed, ...props }: AnimatedElementProps) => {
        const currentVariant = isPressed ? "tap" : isHovered ? "hover" : "idle";

        return (
            <motion.div
                className="inline-block"
                variants={animationVariants}
                animate={currentVariant}
                initial={false}
                onAnimationComplete={(variant) => {
                    if (variant === "tap") {
                        props.onTapComplete?.();
                    }
                }}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);

export default AnimatedElement;
