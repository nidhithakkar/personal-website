"use server";

import { Resend } from "resend";

export type ContactState = {
  ok: boolean;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || name.length < 2) {
    return { ok: false, message: "Please enter your name." };
  }
  if (!email || !isValidEmail(email)) {
    return { ok: false, message: "Please enter a valid email." };
  }
  if (!message || message.length < 10) {
    return { ok: false, message: "Please write a bit more in your message." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL");
    return {
      ok: false,
      message: "Contact form is temporarily unavailable. Please try again later.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const from =
      process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from,
      to: toEmail,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        ok: false,
        message: "Something went wrong sending your message. Please try again.",
      };
    }

    return {
      ok: true,
      message: "Thanks — your message is on its way. I’ll get back to you soon.",
    };
  } catch (err) {
    console.error("Contact form error:", err);
    return {
      ok: false,
      message: "Something went wrong sending your message. Please try again.",
    };
  }
}
