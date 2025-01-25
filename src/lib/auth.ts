import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { z } from 'zod';
import { query } from '@/config/db';

declare module 'next-auth' {
  interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
  }

  interface Session {
    user: User;
  }
}

const getUserByEmail = async (email: string) => {
  const result = await query('SELECT * FROM users WHERE email = $1', [email]);
  return result.rows[0];
};

export const createUser = async (
  email: string,
  password: string,
  fullName: string,
  confirmPassword: string,
  phoneNumber: string
) => {
  if (password !== confirmPassword) {
    throw new Error('Passwords do not match.');
  }

  // Check if the email or phone number already exists in the database
  const emailExists = await query('SELECT * FROM users WHERE email = $1', [email]);
  if (emailExists.rows.length > 0) {
    throw new Error('Email is already registered.');
  }

  const phoneExists = await query('SELECT * FROM users WHERE phone_number = $1', [phoneNumber]);
  if (phoneExists.rows.length > 0) {
    throw new Error('Phone number is already registered.');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const [firstName, lastName] = fullName.split(' ');

  await query(
    `INSERT INTO users (email, password, first_name, last_name, phone_number) 
     VALUES ($1, $2, $3, $4, $5)`,
    [email, hashedPassword, firstName, lastName, phoneNumber]
  );
};


export const { auth, login, signOut } = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'email@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const parsed = z
          .object({
            email: z.string().email(),
            password: z.string().min(6),
          })
          .safeParse(credentials);

        if (!parsed.success) {
          throw new Error('Invalid credentials format.');
        }

        const { email, password } = parsed.data;
        const user = await getUserByEmail(email);

        if (user && (await bcrypt.compare(password, user.password))) {
          return user;
        }

        throw new Error('Invalid credentials.');
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        session.user = { ...session.user, id: token.id };
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});