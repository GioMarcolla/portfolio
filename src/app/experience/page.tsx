"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/UI/tabs";
import { useExperienceStore } from "@/Lib/Stores/ExperienceStore";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/Lib/Utils/shadCNUtils";
import { ExperienceType } from "@/Lib/zod/schemas";
import { LoadingState } from "@/Components/UI/LoadingState";
import { RetryState } from "@/Components/UI/RetryState";
import { MaxRetriesState } from "@/Components/UI/MaxRetriesState";

// Lazy load ExperienceContent for better code splitting
const ExperienceContent = dynamic(() => import("./ExperienceContent"), {
    loading: () => <LoadingState dataType="experience" />
});

type Props = {};

const ExperiencePage = ({}: Props) => {
    const { data: ExperienceData, isLoading, error, retryTimeLeft } = useExperienceStore();

    useEffect(() => {
        useExperienceStore.getState().getData().catch((error) => {
            console.error("Error fetching experience data: ", error);
        });
    }, []);

    const getTabValue = (exp: ExperienceType) => {
        return (
            exp.JobTitle.replaceAll(" ", "-").toLowerCase() +
            "-" +
            exp.CompanyName.replaceAll("", "-").toLowerCase()
        );
    };

    // Show loading state
    if (isLoading) {
        return <LoadingState dataType="experience" />;
    }

    // Show error with retry countdown (only after first failure)
    if (error && retryTimeLeft > 0) {
        return <RetryState timeLeft={retryTimeLeft} />;
    }

    // Show max retries error
    if (error && retryTimeLeft === 0 && !isLoading) {
        return <MaxRetriesState />;
    }

    // Show data when loaded
    const reversedData = ExperienceData ? [...ExperienceData].reverse() : [];
    return reversedData.length > 0 ? (
        <Tabs
            // Use a key to force remount when ExperienceData changes
            key={
                reversedData
                    ? reversedData.map((exp) => exp.id).join("-")
                    : "empty"
            }
            defaultValue={
                reversedData && reversedData.length > 0
                    ? getTabValue(reversedData[0])
                    : ""
            }
            className="max-w-full h-dvh! max-h-dvh!"
        >
            <TabsList className="flex flex-row justify-start gap-16 bg-transparent px-8 pt-8 pb-4 w-full min-w-full h-auto max-h-10 overflow-scroll no-scrollbar">
                {reversedData?.map((exp) => {
                    return (
                        <TabsTrigger
                            key={`exp-${exp.id}`}
                            value={getTabValue(exp)}
                            className={cn(
                                "shadow-none! p-0 border-0 rounded-none h-auto text-foreground!",
                                "hover:text-accent! hover:cursor-pointer",
                                "data-[state=active]:border-primary! data-[state=active]:border-b-2!"
                            )}
                        >
                            <p className="text-inherit text-lg">
                                {exp.JobTitle+ " @ " + exp.CompanyName}
                            </p>
                        </TabsTrigger>
                    );
                })}
            </TabsList>
            {reversedData?.map((exp) => {
                return (
                    <TabsContent
                        key={`exp-${exp.id}`}
                        value={getTabValue(exp)}
                        className="h-[calc(100dvh-3rem)]! max-h-[calc(100dvh-3rem)]! overflow-scroll"
                    >
                        <ExperienceContent data={exp} />
                    </TabsContent>
                );
            })}
        </Tabs>
    ) : null;
};

export default ExperiencePage;
