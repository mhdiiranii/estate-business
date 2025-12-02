import dbConnect from "@/app/lib/mongoClient";
import Properti from "@/app/models/mongoose/Properti";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await dbConnect();
  const city = await Properti.distinct("city");
  const property_type = await Properti.distinct("property_type");
  try {
    return NextResponse.json({ message: "ok", data: { city, property_type } }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "fail", error }, { status: 500 });
  }
}
