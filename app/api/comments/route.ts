import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const methodIs = req.method;

  if (methodIs != "GET") {
    return NextResponse.json({}, { status: 405 });
  }

  return NextResponse.json({}, { status: 405 });
}
