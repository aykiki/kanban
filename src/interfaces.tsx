import { z } from 'zod';
import { signInSchema, signUpSchema } from './validation';

export type TSignUp = z.infer<typeof signUpSchema>;
export type TSignIn = z.infer<typeof signInSchema>;
