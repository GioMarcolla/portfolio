import { z } from "zod";

export const BasicDateSchema = z.object({
    Year: z.number(),
    Month: z.number(),
    Day: z.number().optional(),
    toString: z.function({input: z.tuple([]), output: z.string()}),
});

export type BasicDateType = z.infer<typeof BasicDateSchema>;
