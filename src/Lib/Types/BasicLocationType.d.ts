export type BasicLocationType = {
    readonly Country: string;
    readonly State: string;
    readonly City: string;

    toString: () => string;
}