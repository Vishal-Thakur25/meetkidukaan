// app/api/meetings/route.js
import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

// read DB config from env
const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT = "3306",
} = process.env;

// create pool and reuse across reloads in dev
let pool;
if (!globalThis.__mysqlPool) {
  globalThis.__mysqlPool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: Number(DB_PORT),
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    charset: "utf8mb4",
  });
}
pool = globalThis.__mysqlPool;

/**
 * Server-side validation helper
 */
function validatePayload(payload) {
  const errors = {};
  if (!payload.fullName || !payload.fullName.toString().trim()) {
    errors.fullName = "Full name is required";
  }
  if (!payload.phone || !/^\d{10,15}$/.test(payload.phone.toString())) {
    errors.phone = "Phone must be 10-15 digits";
  }
  if (!payload.state) errors.state = "State is required";
  if (!payload.investment) errors.investment = "Investment is required";
  if (!payload.meetingDate) errors.meetingDate = "Meeting date is required";
  if (!payload.meetingTime) errors.meetingTime = "Meeting time is required";
  return errors;
}

export async function POST(request) {
  try {
    const body = await request.json();

    // normalize keys if your client uses different names
    const payload = {
      fullName: body.fullName ?? body.name ?? "",
      phone: (body.phone ?? body.mobile ?? "").toString(),
      state: body.state ?? "",
      investment: body.investment ?? "",
      meetingDate: body.meetingDate ?? body.date ?? "", // expect "YYYY-MM-DD"
      meetingTime: body.meetingTime ?? body.time ?? "",
    };

    // validate
    const errors = validatePayload(payload);
    if (Object.keys(errors).length) {
      return NextResponse.json({ success: false, errors }, { status: 422 });
    }

    // ensure meetingDate is in YYYY-MM-DD (if user sent Date object string)
    let meetingDateStr = payload.meetingDate;
    // if it's an ISO datetime, extract date part
    if (meetingDateStr.includes("T")) {
      meetingDateStr = meetingDateStr.split("T")[0];
    }

    const sql = `INSERT INTO franchise_meetings
      (full_name, phone, state, investment, meeting_date, meeting_time)
      VALUES (?, ?, ?, ?, ?, ?)`; // prepared statement

    const [result] = await pool.execute(sql, [
      payload.fullName.trim(),
      payload.phone.trim(),
      payload.state,
      payload.investment,
      meetingDateStr,
      payload.meetingTime,
    ]);

    const insertId = result.insertId ?? null;

    return NextResponse.json(
      { success: true, id: insertId, message: "Saved successfully" },
      { status: 201 }
    );
  } catch (err) {
    console.error("API /api/meetings error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
