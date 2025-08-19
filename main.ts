import { db } from "./db.ts";


// Query all users and display them
try {
  const users = db.query("SELECT id, username, email, created_at FROM users");
  console.log("Users in the database:");
  for (const [id, username, email, createdAt] of users) {
    console.log(`ID: ${id}, Username: ${username}, Email: ${email}, Created At: ${createdAt}`);
  }
} catch (error) {
  console.error("Failed to fetch users:", error);
}

