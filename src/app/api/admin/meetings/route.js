// app/api/admin/meetings/route.js
import { NextResponse } from "next/server";
import pool from "@/lib/mysql";
import { verifyAdminToken } from "@/lib/auth";

/**
 * GET with query params:
 * ?page=1&pageSize=20&search=abc&state=xyz&status=pending
 */
export async function GET(req) {
  try {
    const auth = req.headers.get("authorization");
    const admin = await verifyAdminToken(auth);
    if (!admin)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page") || "1", 10);
    const pageSize = parseInt(url.searchParams.get("pageSize") || "20", 10);
    const search = url.searchParams.get("search") || "";
    const state = url.searchParams.get("state") || "";
    const status = url.searchParams.get("status") || "";

    const offset = (page - 1) * pageSize;

    let where = [];
    let params = [];

    if (search) {
      where.push("(full_name LIKE ? OR phone LIKE ? OR investment LIKE ?)");
      params.push(`%${search}%`, `%${search}%`, `%${search}%`);
    }
    if (state) {
      where.push("state = ?");
      params.push(state);
    }
    if (status) {
      where.push("status = ?");
      params.push(status);
    }

    const whereSQL = where.length ? "WHERE " + where.join(" AND ") : "";

    // total count
    const [countRows] = await pool.execute(
      `SELECT COUNT(*) as cnt FROM franchise_meetings ${whereSQL}`,
      params
    );
    const total = countRows[0].cnt;

    // data
    const sql = `SELECT id, full_name, phone, state, investment, meeting_date, meeting_time, status, created_at
                 FROM franchise_meetings
                 ${whereSQL}
                 ORDER BY created_at DESC
                 LIMIT ? OFFSET ?`;
    const paramsWithLimit = params.concat([pageSize, offset]);
    const [rows] = await pool.execute(sql, paramsWithLimit);

    return NextResponse.json({
      success: true,
      data: rows,
      total,
      page,
      pageSize,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// --- POST route for creating a new meeting ---
export async function POST(req) {
  try {
    const auth = req.headers.get("authorization");
    const admin = await verifyAdminToken(auth);
    if (!admin)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const { fullName, phone, state, investment, meetingDate, meetingTime } =
      body;

    if (
      !fullName ||
      !phone ||
      !state ||
      !investment ||
      !meetingDate ||
      !meetingTime
    ) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const [result] = await pool.execute(
      `INSERT INTO franchise_meetings 
       (full_name, phone, state, investment, meeting_date, meeting_time) 
       VALUES (?, ?, ?, ?, ?, ?)`,
      [fullName, phone, state, investment, meetingDate, meetingTime]
    );

    return NextResponse.json({
      success: true,
      meetingId: result.insertId,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
