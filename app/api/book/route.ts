import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import OpenAI from "openai";

const resend = new Resend(process.env.RESEND_API_KEY);
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const booking = await req.json();
    const { name, email, phone, reason, notes, date, time } = booking;

    // Try OpenAI — if it fails (quota, network, etc.), fall back gracefully
    let emailBody = "";
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are an assistant for Lakhani Law, PLLC, a boutique law firm in Houston, Texas. Write a concise, professional attorney intake email summarizing a new consultation booking. Use a formal but warm tone. Do not use bullet points — write in clean paragraphs.",
          },
          {
            role: "user",
            content: `A new consultation has been booked. Here are the details:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Date: ${date}
- Time: ${time}
- Area of Interest: ${reason}
- Additional Notes: ${notes || "None provided"}

Write a professional intake summary email for the attorney, Karim Lakhani, summarizing this booking and any relevant context about the client's area of interest.`,
          },
        ],
      });
      emailBody = completion.choices[0].message.content ?? "";
    } catch (aiError) {
      console.warn("OpenAI unavailable, sending email without AI summary:", aiError);
    }

    // Send email via Resend regardless of whether OpenAI succeeded
    await resend.emails.send({
      from: "Lakhani Law <onboarding@resend.dev>",
      to: ["klakhani93@gmail.com"],
      subject: `New Consultation Booking — ${name} on ${date} at ${time}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #0A1628;">
          <div style="background-color: #0A1628; padding: 24px 32px; margin-bottom: 32px;">
            <h1 style="color: white; font-size: 20px; margin: 0; letter-spacing: 0.02em;">
              Lakhani Law, PLLC
            </h1>
            <p style="color: rgba(255,255,255,0.6); font-size: 12px; margin: 4px 0 0; letter-spacing: 0.1em; text-transform: uppercase;">
              New Consultation Booking
            </p>
          </div>

          <div style="padding: 0 32px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 32px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(10,22,40,0.1); font-size: 13px; color: #666; width: 140px;">Client Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(10,22,40,0.1); font-size: 13px; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(10,22,40,0.1); font-size: 13px; color: #666;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(10,22,40,0.1); font-size: 13px;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(10,22,40,0.1); font-size: 13px; color: #666;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(10,22,40,0.1); font-size: 13px;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(10,22,40,0.1); font-size: 13px; color: #666;">Date & Time</td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(10,22,40,0.1); font-size: 13px; font-weight: 600;">${date} at ${time}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(10,22,40,0.1); font-size: 13px; color: #666;">Area of Interest</td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(10,22,40,0.1); font-size: 13px;">${reason}</td>
              </tr>
              ${notes ? `<tr>
                <td style="padding: 10px 0; font-size: 13px; color: #666; vertical-align: top;">Notes</td>
                <td style="padding: 10px 0; font-size: 13px;">${notes}</td>
              </tr>` : ""}
            </table>

            ${emailBody ? `
            <div style="background-color: #f8f7f4; border-left: 3px solid #0A1628; padding: 20px 24px; margin-bottom: 32px;">
              <p style="font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 12px;">AI Intake Summary</p>
              <div style="font-size: 14px; line-height: 1.8; color: #0A1628;">
                ${emailBody.replace(/\n/g, "<br/>")}
              </div>
            </div>
            ` : ""}

            <p style="font-size: 12px; color: #999; border-top: 1px solid rgba(10,22,40,0.1); padding-top: 24px;">
              This notification was generated automatically by lakhaniatlaw.com. The client booked this consultation through the website's scheduling system.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json({ success: false, error: "Failed to send notification" }, { status: 500 });
  }
}
