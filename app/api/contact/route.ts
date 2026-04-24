import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstName, lastName, email, company, service, message, honeypot } = body;

  // Bot trap
  if (honeypot) return NextResponse.json({ ok: true });

  if (!email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Krylox Contact Form <hello@krylox.ai>",
    to: "hello@krylox.ai",
    replyTo: email,
    subject: `New enquiry from ${firstName} ${lastName} — ${company || "unknown company"}`,
    text: [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Company: ${company || "—"}`,
      `Service: ${service || "—"}`,
      ``,
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
