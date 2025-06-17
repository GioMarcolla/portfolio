import { BasicDateType } from "@/Lib/Types//BasicDateType";
import { BasicLocationType } from "@/Lib/Types//BasicLocationType";

export type ExperienceDateStartedType = BasicDateType;

export type ExperienceDateEndType = BasicDateType;

export type ExperienceLocationType = BasicLocationType;

export type ExperienceDataType = {
    readonly id: number;
    readonly CompanyName: string;
    readonly Department?: string;
    readonly Team?: string;
    readonly Location: ExperienceLocationType;
    readonly JobTitle: string;
    readonly JobType: "Contract" | "Part-Time" | "Full-Time" | "Internship";
    readonly Level?:
        | "Junior"
        | "Mid"
        | "Senior"
        | "Staff"
        | "Lead"
        | "Manager"
        | "Director"
        | "VP"
        | "Founder"
        | "C-Suite";
    readonly Description: string;
    readonly Responsibilities: string;
    readonly Achievements?: string;
    readonly DateStarted: ExperienceDateStartedType;
    readonly DateEnd?: ExperienceDateEndType;
    readonly CurrentJob?: boolean;
    Duration: string;

    toString: () => string;
};
