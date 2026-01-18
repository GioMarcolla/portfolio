"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/UI/tabs";
import { useProjectsStore } from "@/Lib/Stores/ProjectsStore";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/Lib/Utils/shadCNUtils";
import { ProjectType } from "@/Lib/zod/schemas";
import { LoadingState } from "@/Components/UI/LoadingState";
import { RetryState } from "@/Components/UI/RetryState";
import { MaxRetriesState } from "@/Components/UI/MaxRetriesState";

// Lazy load ProjectContent for better code splitting
const ProjectContent = dynamic(() => import("./ProjectContent"), {
    loading: () => <LoadingState dataType="project" />
});

type Props = {};

const ProjectsPage = ({}: Props) => {
    const { data: ProjectsData, isLoading, error, retryTimeLeft } = useProjectsStore();

    useEffect(() => {
        useProjectsStore.getState().getData().catch((error) => {
            console.error("Error fetching projects data: ", error);
        });
    }, []);

    const getTabValue = (exp: ProjectType) => {
        return (
            exp.JobTitle.replaceAll(" ", "-").toLowerCase() +
            "-" +
            exp.ProjectName.replaceAll("", "-").toLowerCase()
        );
    };

    // Show loading state
    if (isLoading) {
        return <LoadingState dataType="project" />;
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
    const reversedData = ProjectsData ? [...ProjectsData].reverse() : [];
    return reversedData.length > 0 ? (
        <Tabs
            // Use a key to force remount when ProjectsData changes
            key={
                reversedData
                    ? reversedData.map((proj) => proj.id).join("-")
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
                {reversedData?.map((proj) => {
                    return (
                        <TabsTrigger
                            key={`proj-${proj.id}`}
                            value={getTabValue(proj)}
                            className={cn(
                                "shadow-none! p-0 border-0 rounded-none h-auto text-foreground!",
                                "hover:text-accent! hover:cursor-pointer",
                                "data-[state=active]:border-primary! data-[state=active]:border-b-2!"
                            )}
                        >
                            <p className="text-inherit text-lg">
                                {proj.JobTitle + " @ " + proj.ProjectName}
                            </p>
                        </TabsTrigger>
                    );
                })}
            </TabsList>
            {reversedData?.map((proj) => {
                return (
                    <TabsContent
                        key={`proj-${proj.id}`}
                        value={getTabValue(proj)}
                        className="h-[calc(100dvh-3rem)]! max-h-[calc(100dvh-3rem)]! overflow-scroll"
                    >
                        <ProjectContent data={proj} />
                    </TabsContent>
                );
            })}
        </Tabs>
    ) : null;
};

export default ProjectsPage;
