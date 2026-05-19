import { z } from "zod";

export const CreateJobExperienceDto = z.object({
  company: z.string().min(2),
  position: z.string().min(2),
  location: z.string().min(2),
  startDate: z.string().datetime(),
  endDate: z.string().datetime().nullable().optional(),
  description: z.string().min(10),
  tags: z.array(z.string()).default([]),
});

export const UpdateJobExperienceDto = z.object({
  company: z.string().min(2).optional(),
  position: z.string().min(2).optional(),
  location: z.string().min(2).optional(),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().nullable().optional(),
  description: z.string().min(10).optional(),
  tags: z.array(z.string()).optional(),
});

export type CreateJobExperienceDtoType = z.infer<typeof CreateJobExperienceDto>;
export type UpdateJobExperienceDtoType = z.infer<typeof UpdateJobExperienceDto>;
