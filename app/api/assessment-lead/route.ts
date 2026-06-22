import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, company, level, levelName, scores } = body;

  if (!email) {
    return NextResponse.json({ error: "Missing email." }, { status: 400 });
  }

  const scoreLines = scores
    ? Object.entries(scores as Record<string, number>)
        .map(([dim, score]) => `  ${dim}: L${score}`)
        .join("\n")
    : "—";

  const { error } = await resend.emails.send({
    from: "Krylox Assessment <hello@krylox.ai>",
    to: "hello@krylox.ai",
    replyTo: email,
    subject: `MLOps Assessment lead — ${name} scored Level ${level} (${levelName})`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "—"}`,
      ``,
      `Result: Level ${level} — ${levelName}`,
      ``,
      `Scores by dimension:`,
      scoreLines,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
  }

  // Always return ok — don't block the user from seeing results
  return NextResponse.json({ ok: true });
}
