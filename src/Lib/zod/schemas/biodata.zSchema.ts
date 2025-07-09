import { z } from "zod";

import { BasicDateSchema, BasicLocationSchema } from "@/Lib/zod/schemas";

const helpers = {
    toString: z.function(z.tuple([]), z.string()),
    Age: z.function(z.tuple([]), z.number()),
};

export const BiodataNameSchema = z.object({
    First: z.string(),
    Middle: z.string().optional(),
    Last: z.string(),
    toString: z.function(z.tuple([]), z.string()),
});

export const BiodataSchema = z.object({
    Name: BiodataNameSchema,
    Nickname: z.string().optional(),
    Birthdate: BasicDateSchema,
    Gender: z.enum(["Male", "Female"]),
    Profession: z.string(),
    Nationalities: z.array(z.string()),
    ResidentOf: BasicLocationSchema,

    ...helpers,
});

export type BiodataType = z.infer<typeof BiodataSchema>;
export type BiodataHelpers = keyof typeof helpers;
