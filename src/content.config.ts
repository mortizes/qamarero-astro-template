import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    tagline: z.string().optional(),
    description: z.string().optional(),
    author: z.string().optional(),
    date: z.coerce.date().optional(),
    published: z.date().optional(),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().optional(),
    latest: z.boolean().optional(),
  }),
});

export const collections = { blog };
