import { createClient } from '@libsql/client';

// Use environment variables for Turso (Cloud) or fallback to local SQLite file
const url = process.env.TURSO_DATABASE_URL || 'file:portfolio.db';
const authToken = process.env.TURSO_AUTH_TOKEN;

// Initialize the database client
const db = createClient({
  url: url,
  authToken: authToken,
});

// Note: We'll ensure table creation happens during the first request to avoid build-time issues
export const ensureMessagesTable = async () => {
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

export default db;
