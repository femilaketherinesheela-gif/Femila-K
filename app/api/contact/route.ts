import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactRequest = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > 10_000) {
    return NextResponse.json({ error: "Your message is too large." }, { status: 413 });
  }

  let parsed: unknown;
  try {
    parsed = await request.json();
  } catch {
    return NextResponse.json({ error: "Please submit a valid message." }, { status: 400 });
  }

  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    return NextResponse.json({ error: "Please submit a valid message." }, { status: 400 });
  }

  const body = parsed as ContactRequest;
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (
    name.length < 2 ||
    name.length > 100 ||
    /[\r\n]/.test(name) ||
    email.length > 254 ||
    !emailPattern.test(email) ||
    message.length < 10 ||
    message.length > 5000
  ) {
    return NextResponse.json(
      { error: "Please check your name, email, and message, then try again." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) {
    console.error("Contact form is unavailable: Resend environment variables are not configured.");
    return NextResponse.json(
      { error: "The contact form is temporarily unavailable. Please email me directly instead." },
      { status: 503 },
    );
  }

  let response: Response;
  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [process.env.CONTACT_EMAIL || "femilakatherinesheela@gmail.com"],
        reply_to: email,
        subject: "New portfolio contact form message",
        text: `From: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });
  } catch (error) {
    console.error("Contact email delivery request failed.", error);
    return NextResponse.json(
      { error: "Your message could not be sent right now. Please try again later." },
      { status: 502 },
    );
  }

  if (!response.ok) {
    console.error("Resend rejected a contact email.", { status: response.status });
    return NextResponse.json(
      { error: "Your message could not be sent right now. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
