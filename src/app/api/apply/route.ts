import { NextRequest, NextResponse } from "next/server";
import { applySchema, individualCourseOptions } from "@/lib/apply-schema";
import nodemailer from "nodemailer";

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

    const validationResult = applySchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { ok: false, error: "Validation failed", details: validationResult.error.issues },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    const genderLabel = data.gender === "male" ? "Brother" : "Sister";

    const trackLabel =
      data.trackType === "madani"
        ? "Madani Track (All Courses)"
        : "Individual Courses";

    const coursesLabel =
      data.trackType === "madani"
        ? "All courses (Madani Track)"
        : (data.selectedCourses ?? [])
            .map(
              (v) =>
                individualCourseOptions.find((o) => o.value === v)?.label ?? v
            )
            .join(", ");

    const subject = `[Tahawiyyah Institute] New Application — ${data.firstName} ${data.lastName}`;

    const htmlBody = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Application</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #f9fafb; border-radius: 8px; padding: 24px; border: 1px solid #e5e7eb;">
            <h1 style="color: #1f2937; margin-top: 0; margin-bottom: 24px; font-size: 24px; font-weight: 600;">
              New Application Received
            </h1>

            <div style="background-color: #ffffff; border-radius: 6px; padding: 20px; margin-bottom: 20px;">
              <h2 style="color: #374151; font-size: 18px; font-weight: 600; margin-top: 0; margin-bottom: 16px; border-bottom: 2px solid #f3f4f6; padding-bottom: 8px;">
                Applicant Information
              </h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #4b5563; width: 160px;">Name:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}</td>
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
                  <td style="padding: 8px 0; font-weight: 600; color: #4b5563;">Gender:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${escapeHtml(genderLabel)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #4b5563; vertical-align: top;">Previous Studies:</td>
                  <td style="padding: 8px 0; color: #1f2937; white-space: pre-wrap;">${escapeHtml(data.previousStudies)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #4b5563;">Track:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${escapeHtml(trackLabel)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #4b5563; vertical-align: top;">Courses:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${escapeHtml(coursesLabel)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #4b5563;">Price Acknowledged:</td>
                  <td style="padding: 8px 0; color: #1f2937;">Yes</td>
                </tr>
                ${data.notes ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #4b5563; vertical-align: top;">Notes:</td>
                  <td style="padding: 8px 0; color: #1f2937; white-space: pre-wrap;">${escapeHtml(data.notes)}</td>
                </tr>` : ""}
              </table>
            </div>

            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              This email was sent from the Tahawiyyah Institute application form.
            </p>
          </div>
        </body>
      </html>
    `;

    const textBody = `
New Application Received

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Gender: ${genderLabel}
Previous Studies: ${data.previousStudies}
Track: ${trackLabel}
Courses: ${coursesLabel}
Price Acknowledged: Yes
${data.notes ? `Notes: ${data.notes}\n` : ""}

This email was sent from the Tahawiyyah Institute application form.
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
          { ok: false, error: "Failed to send email. Please check your SMTP configuration." },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      { ok: false, error: "Email service not configured. Please set SMTP credentials in your .env.local file." },
      { status: 500 }
    );
  } catch (error) {
    console.error("Application submission error:", error);
    return NextResponse.json(
      { ok: false, error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
