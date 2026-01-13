"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/UI/tabs";
import { useExperienceStore } from "@/Lib/Stores/ExperienceStore";
import React, { useEffect, useState } from "react";
import ExperienceContent from "./ExperienceContent";
import { cn } from "@/Lib/Utils/shadCNUtils";
import { ExperienceType } from "@/Lib/zod/schemas";
import { LoaderCircle } from "lucide-react";

type Props = {};

const ExperiencePage = ({}: Props) => {
    const getExperience = useExperienceStore((state) => state.getData);
    const [ExperienceData, setExperienceData] = useState<ExperienceType[]>([]);

    useEffect(() => {
        getExperience()
            .then((res) => setExperienceData(res.reverse()))
            .catch(console.error);
    }, [getExperience]);

    return ExperienceData.length > 0 ? (
        <Tabs
            // Use a key to force remount when ExperienceData changes
            key={
                ExperienceData
                    ? ExperienceData.map((exp) => exp.id).join("-")
                    : "empty"
            }
            defaultValue={
                ExperienceData && ExperienceData.length > 0
                    ? ExperienceData[0].JobTitle.replaceAll(" ", "-").toLowerCase()
                    : ""
            }
            className="max-w-full h-dvh! max-h-dvh!"
        >
            <TabsList
                className="flex flex-row justify-start gap-4 bg-transparent px-8 pt-8 pb-4 w-full min-w-full h-auto max-h-10 overflow-scroll no-scrollbar"
            >
                {ExperienceData?.map((exp) => {
                    return (
                        <TabsTrigger
                            key={`exp-${exp.id}`}
                            value={exp.JobTitle.replaceAll(
                                " ",
                                "-"
                            ).toLowerCase()}
                            className={cn(
                                "shadow-none! p-0 border-0 rounded-none h-auto text-foreground!",
                                "hover:text-accent! hover:cursor-pointer",
                                "data-[state=active]:border-primary! data-[state=active]:border-b!"
                            )}
                        >
                            <p className="text-inherit text-lg">
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
                        className="h-[calc(100dvh-3rem)]! max-h-[calc(100dvh-3rem)]! overflow-scroll"
                    >
                        <ExperienceContent data={exp} />
                    </TabsContent>
                );
            })}
        </Tabs>
    ) : (
        <div className="flex flex-col justify-center items-center p-8 w-full h-full">
            <LoaderCircle className="text-primary animate-spin" size={48} />
            <p className="mt-4 text-foreground text-lg">
                Loading experience data...
            </p>
        </div>
    );
};

export default ExperiencePage;
