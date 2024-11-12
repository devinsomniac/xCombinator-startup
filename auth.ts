import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { db } from "./Database";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { users, accounts } from "./Database/schema"; // Import the schema
import { eq } from "drizzle-orm"; // Import eq for filtering

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
  }),
  callbacks: {
    async session({ session, user }) {
      // Check if the user exists in the database
      const existingUser = await db.select().from(users).where(eq(users.email, user.email));

      if (!existingUser.length) {
        // If user doesn't exist, insert them
        await db.insert(users).values([{
          id: crypto.randomUUID(), // Ensure you pass the generated UUID for the 'id'
          name: user.name || '', // Handle case where user.name might be undefined
          email: user.email,
          emailVerified: null, // Can be null for now if the user hasn't verified their email
          image: user.image || '', // Handle case where user.image might be undefined
        }]);
      }

      return session;
    },
  },
});
