import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const methodIs = req.method;
  const propertyId = req.nextUrl;
  console.log(propertyId);

  if (methodIs != "GET") {
    return NextResponse.json({}, { status: 405 });
  }

  return NextResponse.json({}, { status: 405 });
}
