import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div style={{
    fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    backgroundColor: '#0a0a0a',
    color: '#ffffff',
    padding: '40px',
    borderRadius: '16px',
    maxWidth: '600px',
    margin: '0 auto',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    border: '1px solid #262626'
  }}>
    <h1 style={{ 
      fontSize: '24px', 
      marginBottom: '20px', 
      background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 'bold'
    }}>
      New Inquiry from Portfolio
    </h1>
    
    <div style={{ marginBottom: '24px' }}>
      <p style={{ margin: '0 0 8px 0', color: '#a3a3a3', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>From</p>
      <p style={{ margin: '0', fontSize: '18px', fontWeight: '500' }}>{name} ({email})</p>
    </div>

    <div style={{ padding: '24px', backgroundColor: '#171717', borderRadius: '12px', border: '1px solid #262626' }}>
      <p style={{ margin: '0 0 8px 0', color: '#a3a3a3', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Message</p>
      <p style={{ margin: '0', lineHeight: '1.6', color: '#e5e5e5' }}>{message}</p>
    </div>

    <div style={{ marginTop: '30px', textAlign: 'center' }}>
      <a href={`mailto:${email}`} style={{
        display: 'inline-block',
        padding: '12px 24px',
        backgroundColor: '#3b82f6',
        color: '#ffffff',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        fontSize: '14px'
      }}>
        Reply to {name}
      </a>
    </div>
  </div>
);
