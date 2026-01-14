"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/UI/tabs";
import { useProjectsStore } from "@/Lib/Stores/ProjectsStore";
import React, { useEffect, useState } from "react";
import { cn } from "@/Lib/Utils/shadCNUtils";
import { ProjectType } from "@/Lib/zod/schemas";
import { LoaderCircle } from "lucide-react";
import ProjectContent from "./ProjectContent";

type Props = {};

const ProjectsPage = ({}: Props) => {
    const getProjects = useProjectsStore((state) => state.getData);
    const [ProjectsData, setProjectsData] = useState<ProjectType[]>([]);

    useEffect(() => {
        getProjects()
            .then((res) => setProjectsData([...res].reverse()))
            .catch(console.error);
    }, [getProjects]);

    const getTabValue = (exp: ProjectType) => {
        return (
            exp.JobTitle.replaceAll(" ", "-").toLowerCase() +
            "-" +
            exp.ProjectName.replaceAll("", "-").toLowerCase()
        );
    };

    return ProjectsData.length > 0 ? (
        <Tabs
            // Use a key to force remount when ExperienceData changes
            key={
                ProjectsData
                    ? ProjectsData.map((proj) => proj.id).join("-")
                    : "empty"
            }
            defaultValue={
                ProjectsData && ProjectsData.length > 0
                    ? getTabValue(ProjectsData[0])
                    : ""
            }
            className="max-w-full h-dvh! max-h-dvh!"
        >
            <TabsList className="flex flex-row justify-start gap-16 bg-transparent px-8 pt-8 pb-4 w-full min-w-full h-auto max-h-10 overflow-scroll no-scrollbar">
                {ProjectsData?.map((proj) => {
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
            {ProjectsData?.map((proj) => {
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
    ) : (
        <div className="flex flex-col justify-center items-center p-8 w-full h-full">
            <LoaderCircle className="text-primary animate-spin" size={48} />
            <p className="mt-4 text-foreground text-lg">
                Loading Project data...
            </p>
        </div>
    );
};

export default ProjectsPage;
