import { z } from 'zod';
import { createBoardSchema, signInSchema, signUpSchema } from './validation';

export type TSignUp = z.infer<typeof signUpSchema>;
export type TSignIn = z.infer<typeof signInSchema>;
export type TCreateBoard = z.infer<typeof createBoardSchema>;
