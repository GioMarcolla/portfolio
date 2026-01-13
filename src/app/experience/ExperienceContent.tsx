import ExperienceDetails from "@/Components/ExperienceDetails";
import ExperienceMozaic from "@/Components/ExperienceMozaic";
import { cn } from "@/Lib/Utils/shadCNUtils";
import { ExperienceType } from "@/Lib/zod/schemas";
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
            <ExperienceDetails
                data={data}
                className={cn("grow shrink basis-3/5", "xl:grow-3")}
            />
            {hasHighlights() && (
                <div
                    className={cn(
                        "bg-background/5 backdrop-blur-xl p-6 rounded-4xl max-h-full! basis-2/5 shrink grow pop-up-100",
                        "xl:grow-2"
                    )}
                >
                    <ExperienceMozaic data={data} />
                </div>
            )}
        </div>
    );
};

export default ExperienceContent;
