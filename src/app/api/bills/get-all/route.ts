import { Invoice } from "@/types/bills";
import fs from "fs";
import path from "path";

const filePath = path.resolve("./src/data/mockBills.json");

export async function GET(request: Request) {
  const data = fs.readFileSync(filePath, "utf8");
  const bills: Invoice[] = JSON.parse(data);

  return new Response(
    JSON.stringify({
      bills,
    }),
    { status: 200 }
  );
}
