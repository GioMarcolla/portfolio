import { createEducationDataFactory } from "@/Lib/Factories/EducationDataFactory";
import { EducationDataType } from "@/Lib/Types/EducationDataType";

export function parseEducationData(rawData: EducationDataType[]): EducationDataType[] {
    return rawData.map((entry) =>
        createEducationDataFactory({
            id: entry.id,
            Institution: entry.Institution,
            Location: {
                Country: entry.Location.Country,
                State: entry.Location.State,
                City: entry.Location.City,
            },
            Degree: entry.Degree,
            DegreeShort: entry.DegreeShort,
            Major: entry.Major,
            Track: entry.Track,
            DateStarted: {
                Year: entry.DateStarted?.Year,
                Month: entry.DateStarted?.Month,
                Day: entry.DateStarted?.Day ?? 0,
            },
            DateCompleted: entry.DateCompleted
                ? {
                      Year: entry.DateCompleted.Year,
                      Month: entry.DateCompleted.Month,
                      Day: entry.DateCompleted.Day ?? 0,
                  }
                : undefined,
            Completed: entry.Completed ?? false,
        })
    );
}
