import { Invoice } from "@/types/bills";
import fs from "fs";
import path from "path";

const filePath = path.resolve("./src/data/mockData.json");

export async function GET(request: Request) {
  const data = fs.readFileSync(filePath, "utf8");
  const customers: Invoice[] = JSON.parse(data);

  return new Response(
    JSON.stringify({
      customers,
    }),
    { status: 200 }
  );
}
