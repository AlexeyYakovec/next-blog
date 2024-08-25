import { defineConfig, defineCollection, s } from "velite";

const posts = defineCollection({
   name: "Post",
   pattern: "blog/**/*.md",
   schema: s.object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      published: s.boolean().default(true),
      body: s.mdx(),
   }),
});
