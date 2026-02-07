import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    draft: z.boolean().optional().default(false),
    readTime: z.number().int().positive().optional(),
    views: z.number().int().nonnegative().optional(),
  }),
});

export const collections = { blog };
