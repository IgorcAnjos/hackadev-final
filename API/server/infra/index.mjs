import * as dotenv from "dotenv";
dotenv.config();

import pgp from "pg-promise";
const PGP = pgp();
export const bancoDeDados = PGP({
  user: process.env.BD_USER,
  password: process.env.BD_PASSWORD,
  host: process.env.BD_HOST,
  port: process.env.BD_PORT,
  database: process.env.BD_NAME,
});
