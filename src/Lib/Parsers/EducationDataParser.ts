import { createEducationDataFactory } from "@/Lib/Factories/EducationDataFactory";
import { EducationDataType } from "@/Lib/Types/EducationDataType";

export function parseEducationData(rawData: any[]): EducationDataType[] {
    return rawData.map((entry) =>
        createEducationDataFactory({
            Institution: entry.Institution,
            Country: entry.Country,
            State: entry.State,
            City: entry.City,
            Degree: entry.Degree,
            DegreeShort: entry.DegreeShort,
            Major: entry.Major,
            Track: entry.Track,
            DateStarted: {
                Year: entry.DateStarted?.Year,
                Month: entry.DateStarted?.Month,
                Day: entry.DateStarted?.Day ?? 0,
            },
            DateCompleted: {
                Year: entry.DateCompleted?.Year,
                Month: entry.DateCompleted?.Month,
                Day: entry.DateCompleted?.Day ?? 0,
            },
            Completed: entry.Completed ?? false,
        })
    );
}
