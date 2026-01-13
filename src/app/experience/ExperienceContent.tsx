import ExperienceDetails from "@/Components/ExperienceDetails";
import ExperienceMozaic from "@/Components/ExperienceMozaic";
import { cn } from "@/Lib/Utils/shadCNUtils";
import { ExperienceType } from "@/Lib/zod/schemas";
import { FC } from "react";

type Props = {
    data: ExperienceType;
};

const ExperienceContent: FC<Props> = ({ data }: Props) => {
    const hasHighlights = () => data.Highlights && data.Highlights.length > 0;
    console.log("Highlights:", hasHighlights());
    return (
        <div
            className={cn(
                "gap-18 grid grid-cols-1 p-8 w-full max-h-full",
                `md:${"grid-cols-" + (hasHighlights() ? 5 : 1)}`
            )}
        >
            <ExperienceDetails
                data={data}
                className={cn(
                    `col-span-1`,
                    `md:${"col-span-" + (hasHighlights() ? 3 : 1)}`
                )}
            />
            {hasHighlights() && (
                <div
                    className={cn(
                        "col-span-1 bg-background/5 backdrop-blur-xl p-6 rounded-4xl w-full pop-up-100",
                        "md:col-span-2"
                    )}
                >
                    <ExperienceMozaic data={data} />
                </div>
            )}
        </div>
    );
};

export default ExperienceContent;
