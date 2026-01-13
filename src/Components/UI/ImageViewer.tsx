"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ComponentPropsWithoutRef, FC, useState } from "react";
import { Primitive } from "@radix-ui/react-primitive";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/Lib/Utils/shadCNUtils";

type ViewerImage = { src: string; alt?: string };

type ImageViewerProps = {
    images: ViewerImage[];
    initialIndex?: number;
    children?: React.ReactNode;
    jobTitle: string;
} & ComponentPropsWithoutRef<typeof Primitive.div>;

export const ImageViewer: FC<ImageViewerProps> = ({
    images,
    initialIndex = 0,
    className,
    children,
    jobTitle,
}) => {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const prev = () =>
        setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    const next = () =>
        setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));

    const handleOpen = (nextState: boolean) => {
        if (images.length === 0) return;
        setOpen(nextState);
    };

    return (
        <div className={cn("", className)}>
            {/* Trigger Thumbnails */}
            <div onClick={() => handleOpen(true)} className="h-full! cursor-pointer">
                {children}
            </div>

            {/* Fullscreen Lightbox */}
            {images.length > 0 && (
                <Dialog.Root open={open} onOpenChange={handleOpen}>
                    <Dialog.Portal>
                        <Dialog.Overlay className="z-40 fixed inset-0 bg-black/80 backdrop-blur-sm" />

                        <Dialog.Content className="z-50 fixed inset-0 flex flex-col justify-center items-center p-4">
                            <Dialog.Title className="sr-only">
                                {"Highlights as " + jobTitle}
                            </Dialog.Title>
                            {/* Close Button */}
                            <Dialog.Close className="top-4 right-4 z-50 absolute hover:opacity-80 text-white cursor-pointer">
                                <X size={28} />
                            </Dialog.Close>

                            {/* Large Image */}
                            <div className="relative w-full max-w-[90vw] max-h-[80vh] aspect-square">
                                <Image
                                    src={images[currentIndex].src}
                                    alt={images[currentIndex].alt || ""}
                                    fill
                                    className={"object-contain rounded-lg"}
                                />
                            </div>
                                <p className="text-white">{images[currentIndex].alt}</p>

                            {/* Navigation Arrows */}
                            <button
                                onClick={prev}
                                className="top-1/2 left-4 z-50 absolute hover:opacity-80 text-white -translate-y-1/2 cursor-pointer"
                            >
                                <ChevronLeft size={36} />
                            </button>
                            <button
                                onClick={next}
                                className="top-1/2 right-4 z-50 absolute hover:opacity-80 text-white -translate-y-1/2 cursor-pointer"
                            >
                                <ChevronRight size={36} />
                            </button>

                            {/* Thumbnails strip */}
                            <div className="flex flex-row gap-2 mt-4 overflow-x-auto">
                                {images.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className={`relative w-16 h-16 rounded-lg overflow-hidden cursor-pointer border-2 ${
                                            idx === currentIndex
                                                ? "border-white"
                                                : "border-transparent"
                                        }`}
                                        onClick={() => setCurrentIndex(idx)}
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.alt || ""}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            )}
        </div>
    );
};
