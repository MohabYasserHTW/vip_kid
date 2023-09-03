import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3000;
const dbUrl = process.env.DB_URL || "";
const jwtSecret = process.env.JWT_SECRET || "";

export default { port, dbUrl, jwtSecret };
