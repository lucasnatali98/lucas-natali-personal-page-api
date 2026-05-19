import { z } from 'zod';

export const CreatePostDto = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
  excerpt: z.string().optional(),
  readTime: z.string().optional(),
  slug: z.string().min(3),
  published: z.boolean().default(false),
  categoryId: z.string().uuid().nullable().optional(),
  tagId: z.string().uuid().nullable().optional(),
});

export const UpdatePostDto = z.object({
  title: z.string().min(3).optional(),
  content: z.string().min(10).optional(),
  excerpt: z.string().optional(),
  readTime: z.string().optional(),
  slug: z.string().min(3).optional(),
  published: z.boolean().optional(),
  categoryId: z.string().uuid().nullable().optional(),
  tagId: z.string().uuid().nullable().optional(),
});

export type CreatePostDtoType = z.infer<typeof CreatePostDto>;
export type UpdatePostDtoType = z.infer<typeof UpdatePostDto>;
