// app/api/admin/meetings/[id]/route.js
import { NextResponse } from "next/server";
import pool from "@/lib/mysql";
import { verifyAdminToken } from "@/lib/auth";

export async function PATCH(req, { params }) {
  try {
    const auth = req.headers.get("authorization");
    const admin = await verifyAdminToken(auth);
    if (!admin)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;
    const body = await req.json();

    if (!body.status) {
      return NextResponse.json({ error: "Missing status" }, { status: 400 });
    }
    const allowed = ["pending", "confirmed", "cancelled"];
    if (!allowed.includes(body.status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    const [result] = await pool.execute(
      "UPDATE franchise_meetings SET status = ? WHERE id = ?",
      [body.status, id]
    );

    return NextResponse.json({
      success: true,
      affectedRows: result.affectedRows,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const auth = req.headers.get("authorization");
    const admin = await verifyAdminToken(auth);
    if (!admin)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;
    const [result] = await pool.execute(
      "DELETE FROM franchise_meetings WHERE id = ?",
      [id]
    );
    return NextResponse.json({
      success: true,
      affectedRows: result.affectedRows,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
