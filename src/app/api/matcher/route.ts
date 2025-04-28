import { NextRequest } from "next/server";
import { jsonRoute } from "../_deepseek";

export async function POST(req: NextRequest) {
  return jsonRoute(req, async ({ query }) => ({
    sys: "You are a fashion stylist AI.",
    usr: `Suggest three luxury items that match this description. Format: name — reason. Description: ${query}`,
  }));
}
