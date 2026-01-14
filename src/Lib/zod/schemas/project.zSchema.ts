import { z } from "zod";
import { BasicDateSchema } from "./basicDate.zSchema.js";
import { BasicLocationSchema } from "./basicLocation.zSchema.js";
import { SkillSchema } from "./skill.zSchema.js";
import { BasicHighlightsSchema } from "./basicHighlights.zSchema.js";

const helpers = {
    Duration: z.function({input: z.tuple([]), output: z.string()}),
    toString: z.function({input: z.tuple([]), output: z.string()}),
};

export const ProjectSchema = z.object({
    id: z.string(),
    Position: z.number(),
    ProjectName: z.string(),
    Location: BasicLocationSchema,
    JobTitle: z.string(),
    Description: z.string().array(),
    Responsibilities: z.string().array(),
    Achievements: z.string().optional(),
    DateStarted: BasicDateSchema,
    DateEnd: BasicDateSchema.optional(),
    CurrentProject: z.boolean(),
    Skills: z.array(SkillSchema).optional(),
    Highlights: BasicHighlightsSchema.array().optional(),
    ...helpers
});

export type ProjectType = z.infer<typeof ProjectSchema>;
export const ProjectJsonSchema = z.toJSONSchema(ProjectSchema);
export type ProjectHelpers = keyof typeof helpers;

