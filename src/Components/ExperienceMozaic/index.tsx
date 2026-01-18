import React from "react";
import { cn } from "@/Lib/Utils/shadCNUtils";
import { ComponentPropsWithoutRef, FC } from "react";
import { Primitive } from "@radix-ui/react-primitive";
import { ExperienceType, ProjectType } from "@/Lib/zod/schemas";
import Image from "next/image";
import dynamic from "next/dynamic";

// Lazy load ImageViewer since it's only used on click
const ImageViewer = dynamic(() => import("../UI/ImageViewer").then(mod => mod.ImageViewer), {
    loading: () => (
        <div className="flex items-center justify-center p-4">
            <div className="animate-spin rounded-full h-6 w-6 border-2 border-primary border-t-transparent"></div>
        </div>
    )
});

type Props = {
    data: ExperienceType | ProjectType;
} & ComponentPropsWithoutRef<typeof Primitive.div>;

const ExperienceMozaic: FC<Props> = React.memo(({ data, className }: Props) => {
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
                        alt="Highlight 1"
                        className="rounded-2xl w-full h-full object-cover"
                        priority // Above-the-fold in experience section
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
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
                        alt="Highlight 2"
                        className="rounded-2xl w-full h-full object-cover"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
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
                        alt="Highlight 3"
                        className="rounded-2xl w-full h-full object-cover"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
                    />
                </div>
            </div>
        </ImageViewer>
    );
});

ExperienceMozaic.displayName = "ExperienceMozaic";

export default ExperienceMozaic;
