import { url } from "inspector";
import { z } from "zod";

export const CreateProjectDto = z.object({
  name: z.string().min(3),
  description: z.string().min(3),
  imageUrl: z.string().url(),
  url: z.string().url(),
});

export const UpdateProjectDto = z.object({
  name: z.string().min(3).optional(),
  description: z.string().min(3).optional(),
  imageUrl: z.string().url().optional(),
  url: z.string().url().optional(),
});

export type CreateProjectDtoType = z.infer<typeof CreateProjectDto>;
export type UpdateProjectDtoType = z.infer<typeof UpdateProjectDto>;
