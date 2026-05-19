import { z } from "zod";

export const CreateProjectDto = z.object({
  name: z.string().min(3),
  description: z.string().min(3),
  tag: z.string().min(1),
  label: z.string().min(1),
  cover: z.string().min(1),
  techs: z.array(z.string()).min(1),
  imageUrl: z.string().url().optional(),
  url: z.string().url().optional(),
});

export const UpdateProjectDto = z.object({
  name: z.string().min(3).optional(),
  description: z.string().min(3).optional(),
  tag: z.string().min(1).optional(),
  label: z.string().min(1).optional(),
  cover: z.string().min(1).optional(),
  techs: z.array(z.string()).optional(),
  imageUrl: z.string().url().optional(),
  url: z.string().url().optional(),
});

export type CreateProjectDtoType = z.infer<typeof CreateProjectDto>;
export type UpdateProjectDtoType = z.infer<typeof UpdateProjectDto>;
