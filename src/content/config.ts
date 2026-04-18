import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tag: z.string(),
    date: z.coerce.date(),
    readMinutes: z.number(),
    emoji: z.string().optional(),
    ogImage: z.string().optional(),
  }),
});

export const collections = { blog };
