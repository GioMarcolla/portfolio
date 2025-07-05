"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/UI/tabs";
import { useExperienceDataStore } from "@/Lib/Stores/ExperienceDataStore";
import { ExperienceDataType } from "@/Lib/Types/ExperienceDataType";
import React, { useEffect, useState } from "react";

type Props = {};

const ExperiencePage = ({}: Props) => {
    const getData = useExperienceDataStore((state) => state.getData);
    const [ExperienceData, setExperienceData] = useState<
        ExperienceDataType[] | null
    >(null);

    useEffect(() => {
        getData().then(setExperienceData).catch(console.error);
    }, [getData]);

    return (
        <Tabs defaultValue="account" className="w-full">
            <TabsList className="flex flex-row-reverse w-full">
                {ExperienceData?.map((exp) => {
                    return (
                        <TabsTrigger
                            key={`exp-${exp.id}`}
                            value={exp.JobTitle.replaceAll(
                                " ",
                                "-"
                            ).toLowerCase()}
                        >
                            {exp.JobTitle}
                        </TabsTrigger>
                    );
                })}
            </TabsList>
            {ExperienceData?.map((exp) => {
                return (
                    <TabsContent
                        key={`exp-${exp.id}`}
                        value={exp.JobTitle.replaceAll(" ", "-").toLowerCase()}
                    >
                        {exp.JobTitle}
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
