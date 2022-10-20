import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";
import { SMTP_CONFIG } from "../smtpConfig/index.mjs";

export const transporter = nodemailer.createTransport({
  host: SMTP_CONFIG.host,
  port: SMTP_CONFIG.port,
  tls: true,
  auth: {
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass,
  },
});
