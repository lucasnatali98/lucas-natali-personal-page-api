import { z } from 'zod';

export const CreatePostDto = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
  slug: z.string().min(3),
  published: z.boolean().default(false),
  categories: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([])
});

export const UpdatePostDto = z.object({
  title: z.string().min(3).optional(),
  content: z.string().min(10).optional(),
  slug: z.string().min(3).optional(),
  published: z.boolean().optional(),
  categories: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional()
});

export type CreatePostDtoType = z.infer<typeof CreatePostDto>;
export type UpdatePostDtoType = z.infer<typeof UpdatePostDto>; 