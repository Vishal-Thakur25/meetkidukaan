import { NextResponse } from "next/server";
import { validateAdminCredentials, signAdminToken } from "@/lib/auth.js";

export async function POST(req) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: "Missing username or password" },
        { status: 400 }
      );
    }

    const admin = await validateAdminCredentials(username, password);
    if (!admin) {
      return NextResponse.json(
        { error: "Invalid username or password" },
        { status: 401 }
      );
    }

    const token = signAdminToken(admin);

    return NextResponse.json(
      {
        success: true,
        token,
        admin: {
          id: admin.id,
          username: admin.username,
          name: admin.name,
        },
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Login API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
