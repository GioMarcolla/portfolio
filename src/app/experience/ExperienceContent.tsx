import ExperienceDetails from "@/Components/ExperienceDetails";
import ExperienceMozaic from "@/Components/ExperienceMozaic";
import { cn } from "@/Lib/Utils/shadCNUtils";
import { ExperienceType } from "@/Lib/zod/schemas";
import { motion } from "framer-motion";
import { FC } from "react";

type Props = {
    data: ExperienceType;
};

const ExperienceContent: FC<Props> = ({ data }: Props) => {
    const hasHighlights = () => !!data?.Highlights?.length;

    return (
        <div
            className={cn(
                "flex flex-col gap-18 p-8 w-full h-full! max-h-full! basis-0",
                "xl:flex-row"
            )}
        >
            <motion.div
                className={cn("grow shrink basis-3/5", "xl:grow-3")}
                animate={{
                    x: [-50, 0],
                    opacity: [0, 1],
                }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
            >
                <ExperienceDetails data={data} />
            </motion.div>
            {hasHighlights() && (
                <motion.div
                    className={cn(
                        "bg-background/5 backdrop-blur-xl p-6 rounded-4xl max-h-full! basis-2/5 shrink grow pop-up-100",
                        "xl:grow-2"
                    )}
                    animate={{
                        x: [50, 0],
                        opacity: [0, 1],
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    <ExperienceMozaic data={data} />
                </motion.div>
            )}
        </div>
    );
};

export default ExperienceContent;
