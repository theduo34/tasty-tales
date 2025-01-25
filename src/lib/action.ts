'use server';

import { z } from 'zod';
import { createUser, login } from '@/lib/auth';
import  AuthError  from 'next-auth';

// export type SignUpState = {
//   errors?: {
//     email?: string[];
//     fullName?: string[];
//     password?: string;
//     confirmPassword?: string;
//     phoneNumber?: string;
//   };
//   message?: string | null;
// };

// export type SignInState = {
//   success?: boolean;
//   error?: string;
//   message?: string | null;
//   errors?: {
//     email?: string;
//     password?: string;
//   };
// };

const SignUpSchema = z.object({
  email:
    z.string({required_error: 'Email is required', invalid_type_error: 'Invalid email address'}).email(),
  password:
    z.string({required_error: 'Password is required'}).min(6),
  confirmPassword:
    z.string({required_error: 'Confirm password is required'}).min(6),
  fullName:
    z.string({required_error: 'Full name is required!'}).min(6),
  phoneNumber: z.string(),
});

export const signUpAction = async (
  _state: {error: string} | undefined,
  formData: FormData): Promise<{ error: string } | undefined> => {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirmPassword') as string;
  const fullName = formData.get('fullName') as string;
  const phoneNumber = formData.get('phoneNumber') as string;

  SignUpSchema.parse({ email, password, confirmPassword, fullName, phoneNumber });

  if (password !== confirmPassword) {
    throw new Error('Passwords do not match.');
  }
  try {
    await createUser(email, password, fullName, confirmPassword, phoneNumber);

  } catch (error) {
    console.error('Registration error:', error);
    if (error instanceof AuthError) {
      return { error: 'Authentication failed' };
    }
    if (error instanceof z.ZodError) {
      return { error: 'Invalid input data' };
    }
    return { error: error instanceof Error ? error.message : 'An unexpected error occurred' };
  }
};


export async function loginAction(
  _state: { error: string } | undefined,
  formData: FormData
): Promise<{ error: string } | undefined> {
  const password = formData.get('password') as string;
  const email = formData.get('email') as string;
  try {
    await login('credentials', { email, password });

  } catch (error) {
    console.error('Login error:', error);
    if (error instanceof AuthError) {
      return { error: 'Authentication failed' };
    }
    if (error instanceof z.ZodError) {
      return { error: 'Invalid input data' };
    }
    return { error: error instanceof Error ? error.message : 'An unexpected error occurred' };
  }
}

