import { DB } from "https://deno.land/x/sqlite/mod.ts";

let db: DB
try {
 db = new DB("myapp.db");
 console.log("Connected to the database successfully.");

 // Create users table if it doesn't exist
db.execute(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    last_login DATETIME
  )
`);

}catch (error) {
  console.error("Failed to connect to the database:", error);
};

export { db };