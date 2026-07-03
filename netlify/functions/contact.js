import nodemailer from "nodemailer";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { Allow: "POST" },
      body: JSON.stringify({ error: "Method not allowed." }),
    };
  }

  const { EMAIL_USER, EMAIL_PASS } = process.env;

  if (!EMAIL_USER || !EMAIL_PASS) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Email service is not configured." }),
    };
  }

  let payload;

  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid request body." }),
    };
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  if (!name) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Name is required." }),
    };
  }

  if (!emailPattern.test(email)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Please enter a valid email address." }),
    };
  }

  if (message.length < 10) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Message must be at least 10 characters." }),
    };
  }

  const submittedAt = new Date().toISOString();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${EMAIL_USER}>`,
      replyTo: email,
      to: EMAIL_USER,
      subject: `Portfolio Contact - ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Message: ${message}`,
        `Submission Time: ${submittedAt}`,
      ].join("\n"),
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Unable to send your message right now." }),
    };
  }
}
