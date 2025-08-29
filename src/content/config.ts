import { defineCollection, z } from 'astro:content';

const post = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    publishDate: z.coerce.date().optional(),
    updateDate: z.coerce.date().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
    author: z.string().optional(),
    draft: z.boolean().optional(),
    metadata: z.any().optional(),
  }),
});

export const collections = { post };
