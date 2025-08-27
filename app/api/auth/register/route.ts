import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/mongoose/User";
import bcrypt from "bcryptjs";
import dbConnect from "@/app/lib/mongoClient";
import CreateUserCode from "@/app/lib/userCode";

export async function POST(req: NextRequest) {
  await dbConnect();
  const formData = await req.formData();
  const methodIs = req.method;

  if (methodIs != "POST") {
    return NextResponse.json({}, { status: 405 });
  }

  try {
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password")?.toString();

    if (!username && !email && !password) {
      return NextResponse.json({}, { status: 400 });
    }

    const user = await User.findOne({ $or: [{ username }, { email }] });
    if (user) {
      return NextResponse.json({ message: "user already exists", operation: false }, { status: 409 });
    }

    if (password) {
      let userCode: string = "";
      let exists: null | boolean = true;
      while (exists) {
        userCode = CreateUserCode();
        exists = await User.findOne({ userCode });
      }
      const hashPass = await bcrypt.hash(password, 10);
      await User.create({
        username,
        email,
        password: hashPass,
        userCode,
      });
      return NextResponse.json(
        {
          message: "user was created",
          operation: true,
        },
        {
          status: 200,
        }
      );
    }
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
