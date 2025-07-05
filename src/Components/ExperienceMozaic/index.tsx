import { ExperienceDataType } from "@/Lib/Types/ExperienceDataType";
import { cn } from "@/Lib/Utils/shadCNUtils";
import { ComponentPropsWithoutRef, FC } from "react";
import { Primitive } from "@radix-ui/react-primitive";

type Props = {
    data: ExperienceDataType;
} & ComponentPropsWithoutRef<typeof Primitive.div>;

const ExperienceMozaic: FC<Props> = ({ data }: Props) => {
    return <div className={cn("")}>placeholder</div>;
};

export default ExperienceMozaic;
