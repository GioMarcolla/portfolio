import { z } from "zod";

export const BasicDateSchema = z.object({
    Year: z.number(),
    Month: z.number(),
    Day: z.number().optional(),
    toString: z.function(z.tuple([]), z.string()),
});

export type BasicDateType = z.infer<typeof BasicDateSchema>;
