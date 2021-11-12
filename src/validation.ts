import { z } from 'zod';

export const signUpSchema = z
  .object({
    email: z
      .string()
      .nonempty('The field is required')
      .email('Not in email format'),
    password: z.string().nonempty('Field is required'),
    confirm: z.string().nonempty('Field is required'),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ['confirm'],
  })
  .refine((data) => data.password.length >= 8, {
    message: 'Password is to short',
    path: ['password'],
  });

export const signInSchema = z
  .object({
    email: z
      .string()
      .nonempty('The field is required')
      .email('Not in email format'),
    password: z.string().nonempty('Field is required'),
  })
  .refine((data) => data.password.length >= 8, {
    message: 'Password is to short',
    path: ['password'],
  });

export const createBoardSchema = z
  .object({
    title: z.string().nonempty('The field is required'),
    shortDescription: z.string().nonempty('Field is required'),
  })
  .refine((data) => data.title.length <= 30, {
    message: 'Title is too long',
    path: ['title'],
  });
