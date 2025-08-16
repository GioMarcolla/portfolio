"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/UI/tabs";
import { useExperienceStore } from "@/Lib/Stores/ExperienceStore";
import React, { useEffect, useState } from "react";
import ExperienceContent from "./ExperienceContent";
import { cn } from "@/Lib/Utils/shadCNUtils";
import { ExperienceType } from "@/Lib/zod/schemas";

type Props = {};

const ExperiencePage = ({}: Props) => {
    const getExperience = useExperienceStore((state) => state.getData);
    const [ExperienceData, setExperienceData] = useState<
        ExperienceType[] | null
    >(null);

    useEffect(() => {
        getExperience().then(setExperienceData).catch(console.error);
    }, [getExperience]);

    return (
        <Tabs
            // Use a key to force remount when ExperienceData changes
            key={
                ExperienceData
                    ? ExperienceData.map((exp) => exp.id).join("-")
                    : "empty"
            }
            defaultValue={
                ExperienceData && ExperienceData.length > 0
                    ? ExperienceData[
                          ExperienceData.length - 1
                      ].JobTitle.replaceAll(" ", "-").toLowerCase()
                    : ""
            }
            className="pl-16 md:pl-0 w-full min-w-full max-w-dvw"
        >
            <TabsList className="flex flex-row-reverse gap-4 bg-transparent p-4 w-full max-w-full h-auto max-h-16 overflow-scroll no-scrollbar">
                {ExperienceData?.map((exp) => {
                    return (
                        <TabsTrigger
                            key={`exp-${exp.id}`}
                            value={exp.JobTitle.replaceAll(
                                " ",
                                "-"
                            ).toLowerCase()}
                            className={cn(
                                "!shadow-none min-w-fit h-auto border-0 rounded-none p-0 !text-foreground",
                                "hover:!text-accent hover:cursor-pointer",
                                "data-[state=active]:!border-primary border-b-1"
                            )}
                        >
                            <p className="text-lg text-inherit">
                                {exp.JobTitle}
                            </p>
                        </TabsTrigger>
                    );
                })}
            </TabsList>
            {ExperienceData?.map((exp) => {
                return (
                    <TabsContent
                        key={`exp-${exp.id}`}
                        value={exp.JobTitle.replaceAll(" ", "-").toLowerCase()}
                        className="max-h-[calc(100dvh-4.5rem)] overflow-scroll"
                    >
                        <ExperienceContent data={exp} />
                    </TabsContent>
                );
            })}
        </Tabs>
    );
};

export default ExperiencePage;
