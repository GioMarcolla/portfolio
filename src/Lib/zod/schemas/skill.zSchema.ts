import { z } from "zod";

export const SkillSchema = z.object({
    id: z.string(),
    Name: z.string(),
    Category: z.enum([
        "Programming",
        "Design",
        "Data Science",
        "DevOps",
        "Soft Skills",
        "Management",
        "Business",
        "Other",
    ]),
    Level: z.union([
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
    ]),
    toString: z.function({input: z.tuple([]), output: z.string()}),
});

export type SkillType = z.infer<typeof SkillSchema>;
