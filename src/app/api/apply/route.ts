import { NextRequest, NextResponse } from "next/server";
import { applySchema } from "@/lib/apply-schema";
import { Resend } from "resend";
// import nodemailer from "nodemailer";

// Nodemailer fallback configuration (uncomment if Resend is unavailable)
// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: parseInt(process.env.SMTP_PORT || "587"),
//   secure: process.env.SMTP_SECURE === "true",
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASSWORD,
//   },
// });

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Server-side validation
    const validationResult = applySchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { ok: false, error: "Validation failed", details: validationResult.error.issues },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Format email subject
    const subject = `[Tahawiyyah Institute] New Application - ${data.firstName} ${data.lastName}`;

    // Format availability
    const availabilityMap: Record<string, string> = {
      mon: "Monday",
      wed: "Wednesday",
    };
    const availabilityText = data.availability
      .map((a) => availabilityMap[a])
      .join(", ");

    // Format preferred track
    const trackMap: Record<string, string> = {
      online: "Online",
      "not-sure": "Not sure",
    };
    const trackText = trackMap[data.preferredTrack];

    // HTML email body
    const htmlBody = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
                  <td style="padding: 8px 0; font-weight: 600; color: #4b5563; width: 140px;">Name:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${data.firstName} ${data.lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #4b5563;">Email:</td>
                  <td style="padding: 8px 0; color: #1f2937;"><a href="mailto:${data.email}" style="color: #d4af37; text-decoration: none;">${data.email}</a></td>
                </tr>
                ${data.phone ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #4b5563;">Phone:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${data.phone}</td>
                </tr>
                ` : ""}
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #4b5563;">Preferred Track:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${trackText}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #4b5563;">Availability:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${availabilityText}</td>
                </tr>
                ${data.notes ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #4b5563; vertical-align: top;">Notes:</td>
                  <td style="padding: 8px 0; color: #1f2937; white-space: pre-wrap;">${data.notes
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#x27;")
                    .replace(/\n/g, "<br>")}</td>
                </tr>
                ` : ""}
              </table>
            </div>
            
            <p style="color: #6b7280; font-size: 14px; margin-top: 24px; margin-bottom: 0;">
              This email was sent from the Tahawiyyah Institute application form.
            </p>
          </div>
        </body>
      </html>
    `;

    // Plain text version
    const textBody = `
New Application Received

Applicant Information:
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}\n` : ""}Preferred Track: ${trackText}
Availability: ${availabilityText}
${data.notes ? `Notes: ${data.notes}\n` : ""}

This email was sent from the Tahawiyyah Institute application form.
    `.trim();

    // Try Resend first
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || "noreply@example.com",
          to: "Darultahawiyyah@gmail.com",
          subject,
          html: htmlBody,
          text: textBody,
        });

        return NextResponse.json({ ok: true });
      } catch (resendError) {
        console.error("Resend error:", resendError);
        // Fall through to Nodemailer if configured
      }
    }

    // Nodemailer fallback (uncomment and configure if needed)
    // if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
    //   try {
    //     await transporter.sendMail({
    //       from: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER,
    //       to: "Darultahawiyyah@gmail.com",
    //       subject,
    //       html: htmlBody,
    //       text: textBody,
    //     });
    //
    //     return NextResponse.json({ ok: true });
    //   } catch (nodemailerError) {
    //     console.error("Nodemailer error:", nodemailerError);
    //   }
    // }

    // If both fail or are not configured
    return NextResponse.json(
      {
        ok: false,
        error: "Email service not configured. Please set RESEND_API_KEY or SMTP credentials.",
      },
      { status: 500 }
    );
  } catch (error) {
    console.error("Application submission error:", error);
    return NextResponse.json(
      {
        ok: false,
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}

