import { NextRequest } from "next/server";
import { jsonRoute } from "../_deepseek";

export async function POST(req: NextRequest) {
  return jsonRoute(req, async ({ question }) => ({
    sys: "You are a helpful luxury shopping assistant.",
    usr: question ?? "How can I authenticate a vintage Hermès bag?",
  }));
}
