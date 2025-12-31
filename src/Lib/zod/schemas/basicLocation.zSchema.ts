import { z } from "zod";

export const BasicLocationSchema = z.object({
    Country: z.string(),
    State: z.string(),
    City: z.string(),
    toString: z.function({input: z.tuple([]), output: z.string()}),
});

export type BasicLocationType = z.infer<typeof BasicLocationSchema>;
