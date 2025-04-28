import { NextRequest } from "next/server";
import { jsonRoute } from "../_deepseek";

export async function POST(req: NextRequest) {
  return jsonRoute(req, async ({ segment }) => ({
    sys: "You are an analyst of luxury-fashion consumer behaviour.",
    usr: `Give me a 5-bullet insight about ${segment ?? "Millennials"} shopping habits in luxury fashion.`,
  }));
}
