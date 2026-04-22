import { NextResponse } from 'next/server';
import db, { ensureMessagesTable } from '@/lib/db';

export const dynamic = 'force-dynamic';

// Verify the admin password from headers
const verifyAdmin = (req: Request) => {
  const password = req.headers.get('x-admin-password');
  return password === process.env.ADMIN_PASSWORD;
};

export async function GET(req: Request) {
  if (!verifyAdmin(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await ensureMessagesTable();
    const result = await db.execute('SELECT * FROM messages ORDER BY createdAt DESC');
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Failed to fetch messages:', error);
    return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  if (!verifyAdmin(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await ensureMessagesTable();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID required' }, { status: 400 });
    }

    await db.execute({
      sql: 'DELETE FROM messages WHERE id = ?',
      args: [id],
    });

    return NextResponse.json({ message: 'Deleted successfully' });
  } catch (error) {
    console.error('Failed to delete message:', error);
    return NextResponse.json({ error: 'Failed to delete message' }, { status: 500 });
  }
}
