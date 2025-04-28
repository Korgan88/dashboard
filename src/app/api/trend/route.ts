import { NextRequest } from "next/server";
import { jsonRoute } from "../_deepseek";

export async function POST(req: NextRequest) {
  return jsonRoute(req, async () => ({
    sys: "You are a market forecaster for luxury fashion.",
    usr: "List the top 4 emerging trends for the next season. One short line each.",
  }));
}
