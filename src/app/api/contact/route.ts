import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import nodemailer from "nodemailer";

// SMTP configuration for direct email sending
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Server-side validation
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { ok: false, error: "Validation failed", details: validationResult.error.issues },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Format email subject
    const subject = `[Tahawiyyah Institute] Contact Form: ${data.subject}`;

    // HTML email body
    const htmlBody = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Form Submission</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #f9fafb; border-radius: 8px; padding: 24px; border: 1px solid #e5e7eb;">
            <h1 style="color: #1f2937; margin-top: 0; margin-bottom: 24px; font-size: 24px; font-weight: 600;">
              New Contact Form Submission
            </h1>
            
            <div style="background-color: #ffffff; border-radius: 6px; padding: 20px; margin-bottom: 20px;">
              <h2 style="color: #374151; font-size: 18px; font-weight: 600; margin-top: 0; margin-bottom: 16px; border-bottom: 2px solid #f3f4f6; padding-bottom: 8px;">
                Contact Information
              </h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #4b5563; width: 140px;">Name:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${data.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #4b5563;">Email:</td>
                  <td style="padding: 8px 0; color: #1f2937;"><a href="mailto:${data.email}" style="color: #d4af37; text-decoration: none;">${data.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #4b5563;">Subject:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${data.subject}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #4b5563; vertical-align: top;">Message:</td>
                  <td style="padding: 8px 0; color: #1f2937; white-space: pre-wrap;">${data.message
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#x27;")
                    .replace(/\n/g, "<br>")}</td>
                </tr>
              </table>
            </div>
            
            <p style="color: #6b7280; font-size: 14px; margin-top: 24px; margin-bottom: 0;">
              This email was sent from the Tahawiyyah Institute contact form.
            </p>
          </div>
        </body>
      </html>
    `;

    // Plain text version
    const textBody = `
New Contact Form Submission

Contact Information:
Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}
Message: ${data.message}

This email was sent from the Tahawiyyah Institute contact form.
    `.trim();

    // Send email using SMTP
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
      try {
        await transporter.sendMail({
          from: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER,
          to: "Darultahawiyyah@gmail.com",
          subject,
          html: htmlBody,
          text: textBody,
        });

        return NextResponse.json({ ok: true });
      } catch (smtpError) {
        console.error("SMTP error:", smtpError);
        return NextResponse.json(
          {
            ok: false,
            error: "Failed to send email. Please check your SMTP configuration.",
          },
          { status: 500 }
        );
      }
    }

    // If SMTP is not configured
    return NextResponse.json(
      {
        ok: false,
        error: "Email service not configured. Please set SMTP credentials in your .env.local file.",
      },
      { status: 500 }
    );
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      {
        ok: false,
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}

