import Companies from "@/app/models/mongoose/Companies";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams;

  try {
    const page = parseInt(query.get("page") as string);
    const limit = parseInt(query.get("limit") as string);
    const skip = (page - 1) * limit;

    const lengthCompanies = await Companies.find({});
    console.log(lengthCompanies.length);
    const count = lengthCompanies.length / limit;
    const companies = await Companies.find({}).skip(skip).limit(limit).lean();

    if (!companies) {
      return NextResponse.json({ message: "not found data" }, { status: 404 });
    }
    return NextResponse.json({ data: companies, length: count }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
