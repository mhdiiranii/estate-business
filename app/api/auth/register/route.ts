import { NextRequest, NextResponse } from "next/server";

// type ResponseData = {
//   message: string
// }

export async function POST(req: NextRequest) {
  const { name, password, email } = await req.json();
  const que = req.nextUrl.searchParams;
  const header = req.headers.get("Authorization");
  console.log("header", header);
  console.log("password", password);
  console.log("name", name);
  console.log("email", email);
  console.log("que", que);
  return NextResponse.json(
    { data: "okkkkkk" },
    {
      status: 300,
      headers: { "X-Custom-Header": "test" },
    }
  );
}
