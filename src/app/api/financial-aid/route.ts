import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const financialAidSchema = z.object({
  name: z.string().min(1, "Name is required"),
  reason: z.string().min(1, "Reason is required"),
  employment: z.enum(["fulltime", "parttime", "nojob"]),
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

const employmentLabels: Record<string, string> = {
  fulltime: "Full-time Job",
  parttime: "Part-time Job",
  nojob: "Not Currently Employed",
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = financialAidSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { ok: false, error: "Validation failed", details: result.error.issues },
        { status: 400 }
      );
    }

    const data = result.data;
    const employmentLabel = employmentLabels[data.employment];

    const subject = `[Tahawiyyah Institute] Financial Aid Application — ${data.name}`;

    const htmlBody = `
      <!DOCTYPE html>
      <html>
        <head><meta charset="utf-8"><title>Financial Aid Application</title></head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #f9fafb; border-radius: 8px; padding: 24px; border: 1px solid #e5e7eb;">
            <h1 style="color: #1f2937; margin-top: 0; margin-bottom: 24px; font-size: 24px; font-weight: 600;">
              Financial Aid Application Received
            </h1>
            <div style="background-color: #ffffff; border-radius: 6px; padding: 20px; margin-bottom: 20px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #4b5563; width: 160px;">Name:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${escapeHtml(data.name)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #4b5563; vertical-align: top;">Reason:</td>
                  <td style="padding: 8px 0; color: #1f2937; white-space: pre-wrap;">${escapeHtml(data.reason)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #4b5563;">Employment:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${escapeHtml(employmentLabel)}</td>
                </tr>
              </table>
            </div>
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              This email was sent from the Tahawiyyah Institute financial aid form.
            </p>
          </div>
        </body>
      </html>
    `;

    const textBody = `
Financial Aid Application Received

Name: ${data.name}
Reason: ${data.reason}
Employment: ${employmentLabel}

This email was sent from the Tahawiyyah Institute financial aid form.
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
    console.error("Financial aid submission error:", error);
    return NextResponse.json(
      { ok: false, error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
