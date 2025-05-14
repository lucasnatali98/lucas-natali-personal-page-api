import { z } from 'zod';
import { UserRole } from '../../domain/entities/User';

export const CreateUserDto = z.object({
  email: z.string().email(),
  name: z.string().min(3),
  password: z.string().min(6),
  role: z.nativeEnum(UserRole).default(UserRole.USER)
});

export const UpdateUserDto = z.object({
  name: z.string().min(3).optional(),
  password: z.string().min(6).optional(),
  role: z.nativeEnum(UserRole).optional()
});

export const LoginUserDto = z.object({
  email: z.string().email(),
  password: z.string()
});

export type CreateUserDtoType = z.infer<typeof CreateUserDto>;
export type UpdateUserDtoType = z.infer<typeof UpdateUserDto>;
export type LoginUserDtoType = z.infer<typeof LoginUserDto>; 