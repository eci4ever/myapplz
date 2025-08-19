import { db } from "./db.ts";

console.log("Inserting 25 fake users into the database...");

try {
  for (let i = 0; i < 25; i++) {
    const username = `user${i + 1}`;
    const email = `user${i + 1}@example.com`; // Fixed email generation
    const passwordHash = `hash${i + 1}`; // Simulated password hash

    db.query(
      "INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)",
      [username, email, passwordHash]
    );
  }

  console.log("25 fake users inserted successfully.");
} catch (error) {
  console.error("Failed to insert fake users:", error);
}