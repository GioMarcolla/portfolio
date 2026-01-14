import { ProjectHelpers, ProjectType } from "@/Lib/zod/schemas";
import { DeepOmit } from "@/Lib/Utils/TypeUtils";

export const parseProject = (
    newData: DeepOmit<ProjectType, ProjectHelpers>[]
): ProjectType[] => {
    return newData.map((entry) => {
        const project = entry as ProjectType;

        project.toString = function () {
            return `${this.JobTitle} at ${this.ProjectName} from ${this.DateStarted} to ${this.DateEnd}.`;
        };

        project.DateStarted.toString = function () {
            return [this.Day, this.Month, this.Year].filter(Boolean).join("/");
        };

        if (project.DateEnd) {
            project.DateEnd.toString = function () {
                return [this.Day, this.Month, this.Year]
                    .filter(Boolean)
                    .join("/");
            };
        }

        project.Location.toString = function () {
            return `${this.City ? this.City + ", " : ""}${
                this.State ? this.State + ", " : ""
            }${this.Country}`;
        };

        project.Duration = function () {
            let dateEnd: typeof this.DateEnd = this.DateEnd;

            if (!dateEnd) {
                const now = new Date();
                dateEnd = {
                    Year: now.getFullYear(),
                    Month: now.getMonth() + 1,
                    Day: now.getDate(),
                };
            }

            const totalMonths =
                (dateEnd.Year - this.DateStarted.Year) * 12 +
                (dateEnd.Month - this.DateStarted.Month);

            const years = Math.floor(totalMonths / 12);
            const months = totalMonths % 12;

            const yearStr =
                years > 0 ? `${years} year${years > 1 ? "s" : ""}` : "";
            const monthStr =
                months > 0 ? `${months} month${months > 1 ? "s" : ""}` : "";

            return [yearStr, monthStr].filter(Boolean).join(" ") || "1st month";
        };

        return project;
    });
};
