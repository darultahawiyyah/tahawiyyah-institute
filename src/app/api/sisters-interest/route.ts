import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  previousStudies: z.string().min(1, "Please describe your previous studies"),
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\n/g, "<br>");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = schema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { ok: false, error: "Validation failed", details: result.error.issues },
        { status: 400 }
      );
    }

    const data = result.data;

    const subject = `[Tahawiyyah Institute] Sisters' Class Interest — ${data.name}`;

    const htmlBody = `
      <!DOCTYPE html>
      <html>
        <head><meta charset="utf-8"><title>Sisters' Class Interest</title></head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #f9fafb; border-radius: 8px; padding: 24px; border: 1px solid #e5e7eb;">
            <h1 style="color: #1f2937; margin-top: 0; margin-bottom: 24px; font-size: 24px; font-weight: 600;">
              Sisters' Class Pre-Registration
            </h1>
            <div style="background-color: #ffffff; border-radius: 6px; padding: 20px; margin-bottom: 20px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #4b5563; width: 160px;">Name:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${escapeHtml(data.name)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #4b5563;">Email:</td>
                  <td style="padding: 8px 0; color: #1f2937;"><a href="mailto:${escapeHtml(data.email)}" style="color: #d4af37;">${escapeHtml(data.email)}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #4b5563;">Phone:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${escapeHtml(data.phone)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #4b5563; vertical-align: top;">Previous Studies:</td>
                  <td style="padding: 8px 0; color: #1f2937; white-space: pre-wrap;">${escapeHtml(data.previousStudies)}</td>
                </tr>
              </table>
            </div>
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              This email was sent from the Tahawiyyah Institute sisters' interest form.
            </p>
          </div>
        </body>
      </html>
    `;

    const textBody = `
Sisters' Class Pre-Registration

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Previous Studies: ${data.previousStudies}

This email was sent from the Tahawiyyah Institute sisters' interest form.
    `.trim();

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
          { ok: false, error: "Failed to send email." },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      { ok: false, error: "Email service not configured." },
      { status: 500 }
    );
  } catch (error) {
    console.error("Sisters interest submission error:", error);
    return NextResponse.json(
      { ok: false, error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
