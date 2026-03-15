import nodemailer from "nodemailer";

const hasEmailConfig = process.env.EMAIL_HOST && process.env.EMAIL_PORT && process.env.EMAIL_USER && process.env.EMAIL_PASS;

const transporter = hasEmailConfig
  ? nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false,
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    })
  : null;

export const sendMail = async ({ to, subject, html }) => {
  if (!transporter) {
    console.warn("Email transport not configured; skipping sendMail");
    return;
  }
  await transporter.sendMail({ from: `"AMAS Zone" <${process.env.EMAIL_USER}>`, to, subject, html });
};
