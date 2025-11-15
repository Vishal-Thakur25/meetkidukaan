import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import pool from "./mysql";

const JWT_SECRET =
  process.env.JWT_SECRET ||
  "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTc2MzE1MDQ2OSwiaWF0IjoxNzYzMTUwNDY5fQ.7FD9rN2wowlg04Q6Y4Rg9I4IFSfDX6dShMw1YM4dFto";
const JWT_EXPIRES_IN = "8h";

export async function verifyAdminToken(authHeader) {
  if (!authHeader) return null;
  const token = authHeader.replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    // optionally verify admin still exists
    const [rows] = await pool.execute(
      "SELECT id, username FROM admins WHERE id = ?",
      [payload.id]
    );
    if (!rows || rows.length === 0) return null;
    return rows[0];
  } catch (err) {
    return null;
  }
}

export function signAdminToken(admin) {
  const payload = { id: admin.id, username: admin.username };
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export async function validateAdminCredentials(username, password) {
  const [rows] = await pool.execute(
    "SELECT * FROM admins WHERE username = ? LIMIT 1",
    [username]
  );
  if (!rows || rows.length === 0) return null;
  const admin = rows[0];
  const ok = await bcrypt.compare(password, admin.password_hash);
  if (!ok) return null;
  return { id: admin.id, username: admin.username, name: admin.name };
}
