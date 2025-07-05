import ExperienceDetails from "@/Components/ExperienceDetails";
import ExperienceMozaic from "@/Components/ExperienceMozaic";
import { ExperienceDataType } from "@/Lib/Types/ExperienceDataType";
import { cn } from "@/Lib/Utils/shadCNUtils";
import { ChevronRight } from "lucide-react";
import { FC } from "react";

type Props = {
    data: ExperienceDataType;
};

const ExperienceContent: FC<Props> = ({ data }: Props) => {
    return (
        <div className={cn("grid grid-cols-1 p-8 gap-8", "md:grid-cols-5")}>
            <ExperienceDetails
                data={data}
                className={cn("col-span-1", "md:col-span-3")}
            />
            <ExperienceMozaic
                data={data}
                className={cn("col-span-1", "md:col-span-2")}
            />
        </div>
    );
};

export default ExperienceContent;
