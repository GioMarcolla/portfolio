import { z } from "zod";

export const ImageSchema = z.object({
    ID: z.string(),
    Metadata: z.string().array(),
    URL: z.string().url(),
    Description: z.string().max(512).optional(),
});

export type ImageType = z.infer<typeof ImageSchema>;
