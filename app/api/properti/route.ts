import DynamicFilter from "@/app/lib/dynamicFilter";
import dbConnect from "@/app/lib/mongoClient";
import Properti from "@/app/models/mongoose/Properti";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await dbConnect();
  const methodIs = req.method;

  if (methodIs != "POST") {
    return NextResponse.json({}, { status: 405 });
  }

  const data = await req.json();

  if (!data) {
    return NextResponse.json({}, { status: 400 });
  }

  const filter = DynamicFilter(data);
  const filterItem = await Properti.find(filter);

  try {
    return NextResponse.json(
      {
        message: "ok",
        data: filterItem,
        length: filterItem.length,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "there are a problem in server!",
        operation: false,
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(req: NextRequest) {
  await dbConnect();

  const methodIs = req.method;

  if (methodIs != "GET") {
    return NextResponse.json({}, { status: 405 });
  }

  try {
    const properti = await Properti.find({});
    if (properti.length != 0) {
      return NextResponse.json({ data: properti, length: properti.length, operation: true }, { status: 200 });
    }
    return NextResponse.json({ operation: false }, { status: 404 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "there are a problem in server!",
        operation: false,
      },
      {
        status: 500,
      }
    );
  }
}
