import { Invoice } from "@/types/bills";
import fs from "fs";
import path from "path";

const filePath = path.resolve("./src/data/mockBills.json");

export async function POST(request: Request) {
  const bill: Invoice = await request.json();

  const data = fs.readFileSync(filePath, "utf8");
  const bills: Invoice[] = JSON.parse(data);

  bills.push(bill);

  fs.writeFileSync(filePath, JSON.stringify(bills, null, 2), "utf8");
  return new Response(
    JSON.stringify({
      message: "Bill is successfully created",
    }),
    { status: 201 }
  );
}
