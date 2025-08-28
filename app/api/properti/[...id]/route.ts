import dbConnect from "@/app/lib/mongoClient";
import Properti from "@/app/models/mongoose/Properti";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, { params }: { params: Promise<{id:string}> }) {
  await dbConnect();
  const { id } = await params;

  const methodIs = req.method;

  if (methodIs != "POST") {
    return NextResponse.json({}, { status: 405 });
  }
  
  try {
    const detail = await Properti.findOne({ properties_code: id[0] });
    if (!detail) {
      return NextResponse.json({ message: "not-found" }, { status: 404 });
    }

    return NextResponse.json({ data: detail }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "there are a problem in server!",
        operation: false,
        error:error
      },
      {
        status: 500,
      }
    );
  }
}
