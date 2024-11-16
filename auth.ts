import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
// import { db } from "./Database";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { users, accounts } from "./Database/schema"; // Import the schema
import { eq } from "drizzle-orm"; // Import eq for filtering
import { drizzle } from 'drizzle-orm/neon-http';
import { neon} from '@neondatabase/serverless';
import * as schema from './Database/schema'
import GoogleProvider from 'next-auth/providers/google'

const db = drizzle(neon(process.env.DATABASE_URL!),{schema});
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GoogleProvider({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    authorization: {
      params: {
        prompt: "consent",
        access_type: "offline",
        response_type: "code"
      }
    }
  })],
  secret: process.env.NEXTAUTH_SECRET,
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
  }),
  callbacks: {
    async session({ session, user }) {
      const existingUser = await db.select().from(users).where(eq(users.email, user.email));

      if (!existingUser.length) {
        await db.insert(users).values([{
          id: crypto.randomUUID(), 
          name: user.name || '', 
          email: user.email,
          emailVerified: null, 
          image: user.image || '', 
        }]);
      }

      return session;
    },
  },
});
