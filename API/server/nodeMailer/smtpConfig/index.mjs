import dotenv from "dotenv";
dotenv.config();

export const SMTP_CONFIG = {
  host: process.env.NODEMAILER_HOST,
  port: process.env.NODEMAILER_PORT,
  user: process.env.NODEMAILER_USER,
  pass: process.env.NODEMAILER_PASS,
};
