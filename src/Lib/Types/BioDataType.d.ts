import { BasicDateType } from "@/Lib/Types/BasicDateType";
import { BasicLocationType } from "@/Lib/Types/BasicLocationType";

export type BioDataNameType = {
    First: string;
    Middle: string;
    Last: string;
    toString: () => string;
};

export type BioDataBirthdateType = BasicDateType;

export type BioDataResidentOfType = BasicLocationType;

export type BioDataType = {
    readonly Name: BioDataNameType;
    readonly Nickname: string;
    readonly Birthdate: BioDataBirthdateType;
    readonly Gender: string;
    readonly Profession: string;
    readonly Nationalities: Array<string>;
    readonly ResidentOf: BioDataResidentOfType;
    readonly Age: number;
    toString: () => string;
};
