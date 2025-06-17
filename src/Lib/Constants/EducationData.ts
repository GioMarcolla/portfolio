import { createEducationDataFactory } from "@/Lib/Factories/EducationDataFactory";
import { EducationDataType } from "@/Lib/Types/EducationDataType";

export type ListEducationType = EducationDataType[];

const _CollectionEducationData: ListEducationType = [
    createEducationDataFactory({
        Institution: "Mae Fah Luang University",
        Country: "Thailand",
        State: "Chiang Rai",
        City: "Chiang Rai",
        Degree: "Bachelor of Engineering",
        DegreeShort: "B.E.",
        Major: "Computer Engineering",
        Track: "Embedded Systems",
        DateStarted: {
            Year: 2013,
            Month: 6,
            Day: 0
        },
        DateCompleted: {
            Year: 2017,
            Month: 7,
            Day: 0,
        },
        Completed: true,
    }),
] as const;

export const EducationData: Readonly<typeof _CollectionEducationData> =
    Object.freeze(_CollectionEducationData);
