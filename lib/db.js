import 'dotenv/config';
console.log('dotenv loaded:', process.env.DATABASE_URL);
import pkg from 'pg';
const { Pool } = pkg;
console.log(process.env.DATABASE_URL)
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false } // Necessary for Neon.tech connection
});

const createTable = async () => {
    const client = await pool.connect();
    try {
        await client.query(
            `CREATE TABLE IF NOT EXISTS users (
             id SERIAL PRIMARY KEY,
             name VARCHAR(100) NOT NULL,
             email VARCHAR(100) UNIQUE NOT NULL,  -- Corrected typo here
             image VARCHAR(100) UNIQUE NOT NULL 
            )`
        );
        console.log("User table created successfully");
    } catch (err) {
        console.log("Error in creating table:", err);
    } finally {
        client.release();
    }
};

createTable()
    .then(() => {
        console.log("Table creation script completed");
        pool.end();
    })
    .catch((error) => {
        console.error("Script failed", error);
        pool.end();
    });
