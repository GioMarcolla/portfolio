import { createExperienceDataFactory } from "@/Lib/Factories/ExperienceDataFactory";
import { ExperienceDataType } from "@/Lib/Types/ExperienceDataType";

export function parseExperienceData(
    rawData: ExperienceDataType[]
): ExperienceDataType[] {
    return rawData.map((entry) =>
        createExperienceDataFactory({
            id: entry.id,
            CompanyName: entry.CompanyName,
            Department: entry.Department,
            Team: entry.Team,
            Location: {
                Country: entry.Location.Country,
                State: entry.Location.State,
                City: entry.Location.City,
            },
            JobTitle: entry.JobTitle,
            JobType: entry.JobType,
            Level: entry.Level,
            Responsibilities: entry.Responsibilities,
            Description: entry.Description,
            DateStarted: {
                Year: entry.DateStarted.Year,
                Month: entry.DateStarted.Month,
                Day: entry.DateStarted.Day ?? 0,
            },
            DateEnd: entry.DateEnd
                ? {
                      Year: entry.DateEnd.Year,
                      Month: entry.DateEnd.Month,
                      Day: entry.DateEnd.Day ?? 0,
                  }
                : undefined,
            CurrentJob: entry.CurrentJob ?? false,
            get Duration() {
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

                return (
                    [yearStr, monthStr].filter(Boolean).join(" ") || "1st month"
                );
            },
        })
    );
}
