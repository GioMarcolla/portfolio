export type BioDataType = {
    readonly Name: {
        readonly First: string;
        readonly Middle: string;
        readonly Last: string;
        toString: () => string;
    },
    readonly Nickname: string;
    readonly Birthdate: {
        Year: number;
        Month: number;
        Day: number;
        toString: () => string;
    }
    readonly Gender: string;
    readonly Profession: string;
    readonly Nationalities: Array<string>;
    readonly ResidentOf: {
        readonly Country: string;
        readonly State: string;
        readonly City: string;
        toString: () => string;
    };
    readonly Age: number;
    toString: () => string;
};