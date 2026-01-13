import { ChevronRight } from "lucide-react";
import { ComponentPropsWithoutRef, FC } from "react";
import { Primitive } from "@radix-ui/react-primitive";
import { cn } from "@/Lib/Utils/shadCNUtils";
import { geDurantionString } from "@/Lib/Utils/DateUtils";
import { ExperienceType } from "@/Lib/zod/schemas";

type Props = {
    data: ExperienceType;
} & ComponentPropsWithoutRef<typeof Primitive.div>;

const ExperienceDetails: FC<Props> = ({ data, className }: Props) => {
    return (
        <div className={cn("flex flex-col gap-8 font-rubik", className)}>
            <div>
                <h1 className="font-inter font-extrabold text-3xl tracking-wider space">
                    {data.JobTitle}{" "}
                    <span className="bg-clip-text bg-linear-to-r from-primary to-secondary text-transparent">
                        @
                    </span>{" "}
                    {data.CompanyName}
                </h1>
                <p>
                    {`Presential | ${data.JobType} | ${data.Location} | ${
                        data.DateStarted
                    } - ${data.DateEnd || "Current"} (${geDurantionString(
                        data.DateStarted,
                        data.DateEnd
                    )})`}
                </p>
            </div>
            <div className="flex flex-col gap-2 pl-2">
                {data.Description.map((topic: string, index: number) => {
                    return (
                        <div key={index} className="flex flex-1 gap-2">
                            <p className="text-shadow-primary text-shadow-xs text-accent">{`> `}</p>
                            <p className="flex-1 text-justify">
                                {topic.trim()}
                            </p>
                        </div>
                    );
                })}
            </div>
            <div>
                <h1 className="font-bold text-xl">Responsibilities:</h1>
                <p className="pl-2">
                    {data.Responsibilities.join(", ").concat(".")}
                </p>
            </div>
            <div></div>
        </div>
    );
};

export default ExperienceDetails;
