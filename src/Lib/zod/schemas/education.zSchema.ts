import { z } from "zod";
import { BasicDateSchema, BasicLocationSchema } from "@/Lib/zod/schemas";

const helpers = {
    toString: z.function({output: z.string()}),
};

export const EducationSchema = z.object({
    id: z.string(),
    Position: z.number(),
    Institution: z.string(),
    Location: BasicLocationSchema,
    Degree: z.string(),
    DegreeShort: z.string().optional(),
    Major: z.string().optional(),
    Track: z.string().optional(),
    DateStarted: BasicDateSchema,
    DateCompleted: BasicDateSchema.optional(),
    Completed: z.boolean(),

    ...helpers,
});

export type EducationType = z.infer<typeof EducationSchema>;
export type EducationHelpers = keyof typeof helpers;
