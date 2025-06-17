export type EducationDataType = {
    readonly Institution: string;
    readonly Country: string;
    readonly State: string;
    readonly City: string;
    readonly Degree: string;
    readonly DegreeShort: string;
    readonly Major: string;
    readonly Track: string;
    readonly DateStarted: {
        readonly Year: number;
        readonly Month: number;
        readonly Day: number;

        toString: () => string;
    };
    readonly DateCompleted: {
        readonly Year: number;
        readonly Month: number;
        readonly Day: number;

        toString: () => string;
    };
    readonly Completed: boolean;

    toString: () => string;
};