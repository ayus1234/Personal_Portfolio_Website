
const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.resolve(__dirname, 'portfolio.db');
const db = new Database(dbPath);

try {
    const messages = db.prepare('SELECT * FROM messages ORDER BY createdAt DESC').all();
    console.log('--- Messages in Database ---');
    if (messages.length === 0) {
        console.log('No messages found.');
    } else {
        messages.forEach(msg => {
            console.log(`ID: ${msg.id}`);
            console.log(`Name: ${msg.name}`);
            console.log(`Email: ${msg.email}`);
            console.log(`Message: ${msg.message}`);
            console.log(`Date: ${msg.createdAt}`);
            console.log('---------------------------');
        });
    }
} catch (error) {
    console.error('Error reading messages:', error.message);
} finally {
    db.close();
}
