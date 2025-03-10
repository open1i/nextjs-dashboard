import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

// When seeding your database, you used a package called bcrypt to hash the user's password before storing it in the database. You will use it again later in this chapter to compare that the password entered by the user matches the one in the database. However, you will need to create a separate file for the bcrypt package. This is because bcrypt relies on Node.js APIs not available in Next.js Middleware.

// Create a new file called auth.ts that spreads your authConfig object:
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
});