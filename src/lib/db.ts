import { createClient } from '@libsql/client';

// Use environment variables for Turso (Cloud) or fallback to local SQLite file
const url = process.env.TURSO_DATABASE_URL || 'file:portfolio.db';
const authToken = process.env.TURSO_AUTH_TOKEN;

// Initialize the database client
const db = createClient({
  url: url,
  authToken: authToken,
});

// Create the messages table if it doesn't exist
// Note: In @libsql/client, we use execute() for queries.
// We wrap this in an async init function or just execute it if it's the top level (Next.js handles this during build/runtime)
const initDb = async () => {
  try {
    await db.execute(`
      CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  } catch (error) {
    console.error('Database initialization error:', error);
  }
};

initDb();

export default db;
