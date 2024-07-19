import { SignUpDataType } from "@/types/auth";
import fs from "fs";
import path from "path";

const filePath = path.resolve("./src/data/mockData.json");

export async function POST(request: Request) {
  const newUser: SignUpDataType = await request.json();

  const data = fs.readFileSync(filePath, "utf8");
  const users = JSON.parse(data);

  const emailExists = users.some(
    (user: SignUpDataType) => user.email === newUser.email
  );

  if (!emailExists) {
    users.push(newUser);

    fs.writeFileSync(filePath, JSON.stringify(users, null, 2), "utf8");
    return new Response(
      JSON.stringify({
        message: "User is successfully sign up",
        token: "encrypted token",
      }),
      { status: 201 }
    );
  }
  return new Response(JSON.stringify({ message: "User is already exists!!" }), {
    status: 400,
  });
}
