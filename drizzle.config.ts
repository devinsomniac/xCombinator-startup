import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./Database/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url : "postgresql://neondb_owner:FYifPJB4U8XS@ep-icy-thunder-a1rn3q2z.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
  }
});