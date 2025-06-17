import { BasicDateType } from "@/Lib/Types/BasicDateType";
import { BasicLocationType } from "@/Lib/Types//BasicLocationType";

export type EducationDateStartedType = BasicDateType;

export type EducationDateCompletedType = BasicDateType;

export type EducationLocationType = BasicLocationType;

export type EducationDataType = {
    readonly id: number;
    readonly Institution: string;
    readonly Location: EducationLocationType;
    readonly Degree: string;
    readonly DegreeShort: string;
    readonly Major: string;
    readonly Track?: string;
    readonly DateStarted: EducationDateStartedType;
    readonly DateCompleted?: EducationDateCompletedType;
    readonly Completed: boolean;

    toString: () => string;
};
