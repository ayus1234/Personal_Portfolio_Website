import { NextResponse } from 'next/server';
import db, { ensureMessagesTable } from '@/lib/db';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    await ensureMessagesTable();
    const body = await req.json();
    const { name, email, message } = body;

    // 1. Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // 2. Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // 3. Message Length Validation
    if (message.length < 5) {
      return NextResponse.json(
        { error: 'Message must be at least 5 characters long' },
        { status: 400 }
      );
    }

    // 4. Save to SQLite database (Async with @libsql/client)
    await db.execute({
      sql: 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)',
      args: [name, email, message],
    });

    // 5. Send Email Notification via Resend (only if API key exists)
    console.log('Checking for RESEND_API_KEY...', process.env.RESEND_API_KEY ? 'Present' : 'Not found');
    if (process.env.RESEND_API_KEY) {
      try {
        console.log('Attempting to send email to:', process.env.NOTIFICATION_EMAIL || email);
        const data = await resend.emails.send({
          from: 'Portfolio Inquiries <onboarding@resend.dev>',
          to: [process.env.NOTIFICATION_EMAIL || email],
          subject: `New Message from ${name}`,
          react: <EmailTemplate name={name} email={email} message={message} />,
        });
        console.log('Email sent successfully:', data);
      } catch (emailError) {
        console.error('Email notification failed:', emailError);
      }
    }

    // 6. Respond with Success
    return NextResponse.json(
      { message: 'Message sent successfully! Stored in cloud-ready database.' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
