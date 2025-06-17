import { ExperienceDataType } from "@/Lib/Types/ExperienceDataType";

export const createExperienceDataFactory = (
    newData: Omit<ExperienceDataType, "toString" | "Duration">
): ExperienceDataType => {
    const data = {
        ...newData,
    } as any;

    data.toString = function () {
        return `${this.Level} ${this.JobTitle} at ${this.CompanyName}${
            this.Department ? " - " + this.Department : ""
        }${this.Team ? " " + this.Team + " team" : ""} from ${
            this.DateStarted
        } to ${this.DateEnd}.`;
    };

    data.Duration = function () {
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

        const yearStr = years > 0 ? `${years} year${years > 1 ? "s" : ""}` : "";
        const monthStr =
            months > 0 ? `${months} month${months > 1 ? "s" : ""}` : "";

        return [yearStr, monthStr].filter(Boolean).join(" ") || "1st month";
    };

    data.DateStarted.toString = function () {
        return [this.Day, this.Month, this.Year].filter(Boolean).join("/");
    };

    if (data.DateEnd) {
        data.DateEnd.toString = function () {
            return [this.Day, this.Month, this.Year].filter(Boolean).join("/");
        };
    }

    return data;
};
