import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/app/lib/mongoClient";
import ToLike from "@/app/models/mongoose/ToLike";

export async function POST(req: NextRequest) {
  await dbConnect();
  const { liked, userId, propertiId } = await req.json();
  const methodIs = req.method;

  if (methodIs != "POST") {
    return NextResponse.json({}, { status: 405 });
  }

  try {
    const toLike = await ToLike.findOne({ userId, propertiId });

    if (toLike) {
      return NextResponse.json({ operation: false, message: "you like this" }, { status: 400 });
    }

    const newLike = await ToLike.insertOne({
      userId,
      propertiId,
      liked,
    });

    if (!newLike) {
      return NextResponse.json(
        {
          operation: false,
          message: "dont like!",
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      {
        operation: true,
        message: "liked!",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        operation: false,
        message: "problem!",
        error:error
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(req: NextRequest) {
  await dbConnect();

  const { userId, propertiId } = await req.json();
  const methodIs = req.method;

  if (methodIs != "DELETE") {
    return NextResponse.json({}, { status: 405 });
  }

  if (!userId && !propertiId) {
    return NextResponse.json({}, { status: 400 });
  }

  try {
    const rmLike = await ToLike.findOne({ userId, propertiId });
    if (!rmLike) {
      return NextResponse.json({ message: "not found properti!" }, { status: 404 });
    }
    const isRm = await ToLike.deleteOne({ userId, propertiId });
    console.log(isRm.acknowledged)
    if (isRm.acknowledged) {
      return NextResponse.json({}, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: "server have pproblem!" }, { status: 501 });
  }
}
