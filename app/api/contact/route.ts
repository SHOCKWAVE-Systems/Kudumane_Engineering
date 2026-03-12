import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSubmissionSchema } from "@/lib/contact-schema";
import { businessName } from "@/lib/site";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = contactSubmissionSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: "Please check the form and try again." },
        { status: 400 },
      );
    }

    const data = parsed.data;

    if (data.website) {
      return NextResponse.json({
        success: true,
        message: "Thank you. Your message has been received.",
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const defaultRecipient =
      data.serviceInterestedIn === "Brake Testing" ? "gp@kbrakes.co.za" : "reception@kbrakes.co.za";
    const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || defaultRecipient;

    if (apiKey) {
      const resend = new Resend(apiKey);

      await resend.emails.send({
        from: `${businessName} <onboarding@resend.dev>`,
        to: [toEmail],
        subject: `New Contact Form Submission: ${data.serviceInterestedIn}`,
        replyTo: data.email,
        text: [
          `Name: ${data.name}`,
          `Company: ${data.company || "N/A"}`,
          `Phone: ${data.phone}`,
          `Email: ${data.email}`,
          `Service: ${data.serviceInterestedIn}`,
          "",
          "Message:",
          data.message,
        ].join("\n"),
      });
    } else {
      console.log(`Contact form submission (email not configured, intended recipient: ${toEmail}):`, data);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you. Your message has been received.",
    });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return NextResponse.json({ success: false, message: "Failed to process your request." }, { status: 500 });
  }
}
