import { cn } from "@/Lib/Utils/shadCNUtils";
import { ComponentPropsWithoutRef, FC } from "react";
import { Primitive } from "@radix-ui/react-primitive";
import { ExperienceType } from "@/Lib/zod/schemas";
import Image from "next/image";
import { ImageViewer } from "../UI/ImageViewer";

type Props = {
    data: ExperienceType;
} & ComponentPropsWithoutRef<typeof Primitive.div>;

const ExperienceMozaic: FC<Props> = ({ data, className }: Props) => {
    return (
        <ImageViewer
            className={cn("w-full h-full! max-h-full!", className)}
            jobTitle={data.JobTitle}
            images={(data.Highlights ?? []).map((item) => ({
                src: item.Image.URL,
                alt: item.Image.Description,
            }))}
        >
            <div className="gap-4 grid grid-cols-2 grid-rows-3 w-full h-full! max-h-full!">
                <div
                    className={cn(
                        "relative flex col-span-2! row-span-2! bg-primary pr-0.5 pb-0.5 rounded-2xl rounded-br-[calc(1rem+1px)] w-full h-full overflow-hidden",
                        "md:rounded-br-[calc(1rem+2px)]"
                    )}
                >
                    <Image
                        src={data.Highlights?.[0]?.Image.URL ?? ""}
                        height={1000}
                        width={1000}
                        alt="Google Maps Screenshot"
                        className="rounded-2xl w-full h-full object-cover"
                    />
                </div>
                <div
                    className={cn(
                        "relative flex col-span-1 row-span-1 bg-secondary pr-0.5 pb-0.5 rounded-2xl rounded-br-[calc(1rem+1px)] w-full h-full overflow-hidden",
                        "md:rounded-br-[calc(1rem+2px)]"
                    )}
                >
                    <Image
                        src={data.Highlights?.[1]?.Image.URL ?? ""}
                        height={1000}
                        width={1000}
                        alt="Google Maps Screenshot"
                        className="rounded-2xl w-full h-full object-cover"
                    />
                </div>
                <div
                    className={cn(
                        "relative flex col-span-1 row-span-1 bg-accent pr-0.5 pb-0.5 rounded-2xl rounded-br-[calc(1rem+1px)] w-full h-full overflow-hidden",
                        "md:rounded-br-[calc(1rem+2px)]"
                    )}
                >
                    <Image
                        src={data.Highlights?.[2]?.Image.URL ?? ""}
                        height={1000}
                        width={1000}
                        alt="Google Maps Screenshot"
                        className="rounded-2xl w-full h-full object-cover"
                    />
                </div>
            </div>
        </ImageViewer>
    );
};

export default ExperienceMozaic;
