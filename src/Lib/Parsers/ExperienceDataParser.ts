import { createExperienceDataFactory } from "@/Lib/Factories/ExperienceDataFactory";
import { ExperienceDataType } from "@/Lib/Types/ExperienceDataType";

export function parseExperienceData(rawData: any[]): ExperienceDataType[] {
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
        })
    );
}
