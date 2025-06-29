import React, { ComponentPropsWithoutRef } from "react";
import { Primitive } from "@radix-ui/react-primitive";
import { cn } from "@/Lib/Utils/shadCNUtils";
import Image from "next/image";

type Props = {} & ComponentPropsWithoutRef<typeof Primitive.div>;

const IntroMozaic = ({ className }: Props) => {
    return (
        <div
            className={cn(
                "max-w-[640px] 2xl:!max-w-[800px] self-center flex flex-col gap-2  w-full h-full max-h-full",
                className
            )}
        >
            <div className="flex flex-row flex-1 gap-2 max-h-[50%]">
                <div className="flex flex-col flex-3 2xl:flex-2 self-end gap-4 bg-transparent h-[70%] max-h-[70%] overflow-hidden">
                    <div className="flex flex-1 items-end w-auto h-full max-h-full basis-auto shrink">
                        <Image
                            src="https://hco7caxbp8v7ula1.public.blob.vercel-storage.com/vaadin-S0BWUEsSWO5HinuqiJMV2eZLJqTSQR.png"
                            alt=""
                            className="w-auto max-w-full h-auto object-contain"
                            height={2000}
                            width={485}
                        />
                    </div>
                    <div className="flex flex-1 items-end w-auto h-full max-h-full basis-auto shrink">
                        <Image
                            src="https://hco7caxbp8v7ula1.public.blob.vercel-storage.com/spring-boot-DF1LGa2xOv4U832STDSp1w99Dr1xBJ.png"
                            alt=""
                            className="w-auto max-w-full h-auto object-contain"
                            height={2000}
                            width={515}
                        />
                    </div>
                </div>
                <div className="relative flex-20">
                    <div className="bg-primary-300 pr-1 pb-1 rounded-2xl rounded-br-[calc(1rem+4px)] w-full h-full overflow-hidden container">
                        <img
                            src="https://hco7caxbp8v7ula1.public.blob.vercel-storage.com/D3-m8o5WIxBz2bqZqPZu8e9i1qkdvIVxE.jpg"
                            alt=""
                            className="rounded-2xl w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-col flex-10 gap-2">
                    <div className="flex-2 bg-secondary-200 pr-1 pb-1 rounded-2xl rounded-br-[calc(1rem+4px)] w-full h-full overflow-hidden container">
                        <img
                            src="https://hco7caxbp8v7ula1.public.blob.vercel-storage.com/E3-qPmAfbgzUYOw0jpAGrVeqR0eYL3HAO.jpg"
                            alt=""
                            className="rounded-2xl w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex-1 content-end">
                        <div className="flex flex-col justify-around items-end gap-2 bg-transparent w-full h-full">
                            <img
                                src="https://hco7caxbp8v7ula1.public.blob.vercel-storage.com/js-html-css-ikV2h7FZf9CbU7IwL4UmoE8L3dBYZ8.png"
                                alt=""
                                className="h-[50%] object-contain"
                            />
                            <img
                                src="https://hco7caxbp8v7ula1.public.blob.vercel-storage.com/next-js-O6IESg14n7RsEjFRbCeEL6B2H6wWLQ.png"
                                alt=""
                                className="max-h-[25%] object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row flex-1 gap-2 max-h-[50%]">
                <div className="flex flex-col flex-2 gap-2">
                    <div className="flex flex-row flex-2 gap-2 max-h-[66%]">
                        <div className="flex-2 bg-secondary-200 pr-1 pb-1 rounded-2xl rounded-br-[calc(1rem+4px)] w-full h-full overflow-hidden container">
                            <img
                                src="https://hco7caxbp8v7ula1.public.blob.vercel-storage.com/P3-QhdrThzbUC35MMTxvybvqIymbHbFQ1.jpg"
                                alt=""
                                className="rounded-2xl w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col flex-1 gap-2">
                            <div className="flex-2 bg-background-200 pr-1 pb-1 rounded-2xl rounded-br-[calc(1rem+4px)] w-full h-full overflow-hidden container">
                                <img
                                    src="https://hco7caxbp8v7ula1.public.blob.vercel-storage.com/E1-tayxtMS2tjE2WcHnTWqw0A7VdlDshL.jpg"
                                    alt=""
                                    className="rounded-2xl w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-2 bg-background-200 pr-1 pb-1 rounded-2xl rounded-br-[calc(1rem+4px)] w-full h-full overflow-hidden container">
                                <img
                                    src="https://hco7caxbp8v7ula1.public.blob.vercel-storage.com/D1-Ys0lHUvFwk3W9IPmKz0DUp1uk29bSr.jpg"
                                    alt=""
                                    className="rounded-2xl w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 max-h-[calc(34%-0.5rem)]">
                        <div className="flex flex-row justify-start items-center gap-4 bg-transparent max-w-[80%] h-[50%] max-h-[50%]">
                            <div className="flex flex-1 items-end w-auto h-full max-h-full basis-auto shrink">
                                <Image
                                    src="https://hco7caxbp8v7ula1.public.blob.vercel-storage.com/typescript-seeklogo-aCUqapylBJSIOck5Ui1icLSLgyodRd.png"
                                    alt=""
                                    className="w-auto h-auto max-h-[80%] object-contain"
                                    width={2000}
                                    height={2000}
                                />
                            </div>
                            <div className="flex flex-1 items-end w-auto h-full max-h-full basis-auto shrink">
                                <Image
                                    src="https://hco7caxbp8v7ula1.public.blob.vercel-storage.com/java-qf1MWvDKMzRaUiyM3Z35NHI7oRb6m0.png"
                                    alt=""
                                    className="w-auto h-auto max-h-full object-contain"
                                    width={2000}
                                    height={1077}
                                />
                            </div>
                            <div className="flex flex-1 items-end w-auto h-full max-h-full basis-auto shrink">
                                <Image
                                    src="https://hco7caxbp8v7ula1.public.blob.vercel-storage.com/postgresql-bZMQsUYAEqG7uoF8CPsTZqs9pgFAAH.png"
                                    alt=""
                                    className="mb-[-5%] w-auto h-auto max-h-full object-contain"
                                    width={2000}
                                    height={484}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex-2 pr-1 pb-1 rounded-2xl rounded-br-[calc(1rem+4px)] w-full h-full overflow-hidden bg-accent-300 container">
                        <img
                            src="https://hco7caxbp8v7ula1.public.blob.vercel-storage.com/T2-znWF4bXETbP4NNI4DFgQKBmhNprWYg.jpg"
                            alt=""
                            className="rounded-2xl w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroMozaic;
