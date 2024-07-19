import { SignInDataType, SignUpDataType } from "@/types/auth";
import fs from "fs";
import path from "path";

const filePath = path.resolve("./src/data/mockData.json");

export async function POST(request: Request) {
  const user: SignInDataType = await request.json();

  const data = fs.readFileSync(filePath, "utf8");
  const users: SignUpDataType[] = JSON.parse(data);

  const existUser = users.find((u: SignUpDataType) => u.email === user.email);

  if (existUser?.email) {
    if (user.password === existUser.password)
      return new Response(
        JSON.stringify({
          message: "Sign In is successful.",
          token: "encrypted token",
        }),
        { status: 200 }
      );
    else
      return new Response(
        JSON.stringify({ message: "Password is incorrect." }),
        {
          status: 400,
        }
      );
  } else
    return new Response(JSON.stringify({ message: "User is not exists." }), {
      status: 400,
    });
}
