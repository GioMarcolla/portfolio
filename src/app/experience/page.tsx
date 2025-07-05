"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/UI/tabs";
import { useExperienceStore } from "@/Lib/Stores/ExperienceStore";
import { ExperienceDataType } from "@/Lib/Types/ExperienceDataType";
import React, { useEffect, useState } from "react";
import ExperienceContent from "./ExperienceContent";

type Props = {};

const ExperiencePage = ({}: Props) => {
    const getData = useExperienceStore((state) => state.getData);
    const [ExperienceData, setExperienceData] = useState<
        ExperienceDataType[] | null
    >(null);

    useEffect(() => {
        getData().then(setExperienceData).catch(console.error);
    }, [getData]);

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
            className="min-w-full"
        >
            <TabsList className="flex flex-row-reverse gap-2 bg-transparent p-4 w-full max-w-full h-auto max-h-16 overflow-scroll no-scrollbar">
                {ExperienceData?.map((exp) => {
                    return (
                        <TabsTrigger
                            key={`exp-${exp.id}`}
                            value={exp.JobTitle.replaceAll(
                                " ",
                                "-"
                            ).toLowerCase()}
                            className="bg-background-50 data-[state=active]:bg-accent dark:data-[state=active]:bg-primary shadow min-w-fit h-auto"
                        >
                            <p className="text-lg">{exp.JobTitle}</p>
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

            {/* <TabsList className="flex flex-row-reverse w-full">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                Make changes to your account here.
            </TabsContent>
            <TabsContent value="password">
                Change your password here.
            </TabsContent> */}
        </Tabs>
    );
};

export default ExperiencePage;
