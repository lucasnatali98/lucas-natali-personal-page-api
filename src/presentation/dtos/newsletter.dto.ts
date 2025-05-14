import { z } from 'zod';

export const CreateNewsletterDto = z.object({
  email: z.string().email(),
  userId: z.string().optional(),
  active: z.boolean().default(true)
});

export const UpdateNewsletterDto = z.object({
  active: z.boolean().optional()
});

export type CreateNewsletterDtoType = z.infer<typeof CreateNewsletterDto>;
export type UpdateNewsletterDtoType = z.infer<typeof UpdateNewsletterDto>; 