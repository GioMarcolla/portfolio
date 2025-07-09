import { cn } from "@/Lib/Utils/shadCNUtils";
import { ComponentPropsWithoutRef, FC } from "react";
import { Primitive } from "@radix-ui/react-primitive";
import { ExperienceType } from "@/Lib/zod/schemas";

type Props = {
    data: ExperienceType;
} & ComponentPropsWithoutRef<typeof Primitive.div>;

const ExperienceMozaic: FC<Props> = ({ }: Props) => {
    return <div className={cn("")}>placeholder</div>;
};

export default ExperienceMozaic;
