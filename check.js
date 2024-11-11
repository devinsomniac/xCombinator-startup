import dotenv from 'dotenv';
const result = dotenv.config(); // Check the result of dotenv.config()
if (result.error) {
  console.error("Failed to load .env file:", result.error);
} else {
  console.log("Loaded .env file successfully");
}

console.log(process.env.DATABASE_URL); // Check if the variable is loaded
