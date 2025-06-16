import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }


        // TODO: Implement actual email sending with SendGrid
        // console.log('Received contact form submission:', body);
    // Prepare email content
    const msg = {
      to: process.env.CONTACT_EMAIL || 'your-email@example.com', // Replace with your email
      from: process.env.FROM_EMAIL || 'noreply@fivesixfive.com', // Replace with your verified sender
      subject: `New Contact Form Submission from ${body.name}`,
      text: `
Name: ${body.name}
Email: ${body.email}
Message: ${body.message}
Discovery Call Requested: ${body.wantsDiscoveryCall ? 'Yes' : 'No'}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${body.name}</p>
<p><strong>Email:</strong> ${body.email}</p>
<p><strong>Message:</strong> ${body.message}</p>
<p><strong>Discovery Call Requested:</strong> ${body.wantsDiscoveryCall ? 'Yes' : 'No'}</p>
      `,
    };

    // Send email
    await sgMail.send(msg);

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
} 