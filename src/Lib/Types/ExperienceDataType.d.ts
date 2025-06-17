export type ExperienceDataType = {
    readonly CompanyName: string;
    readonly Department?: string;
    readonly Team?: string;
    readonly Country: string;
    readonly State: string;
    readonly City: string;
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
    readonly DateStarted: {
        readonly Year: number;
        readonly Month: number;
        readonly Day: number;

        toString: () => string;
    };
    readonly DateEnd?: {
        readonly Year: number;
        readonly Month: number;
        readonly Day: number;

        toString: () => string;
    };
    readonly CurrentJob?: Boolean;

    readonly Duration: () => string;

    toString: () => string;
};