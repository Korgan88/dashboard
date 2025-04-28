// app/api/ai/route.ts
import type { NextRequest } from "next/server";

export const runtime  = "edge";         // obbliga Vercel a crearti la Function
export const dynamic  = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { cmd = "chat", prompt = "" } = await req.json();

    if (!process.env.DEEPSEEK_API_KEY)
      throw new Error("Missing DEEPSEEK_API_KEY");

    // import dinamico: il bundle edge resta leggero
    const OpenAI = (await import("openai")).default;
    const openai = new OpenAI({ apiKey: process.env.DEEPSEEK_API_KEY });

    const model = cmd === "trend" ? "deepseek-chat" : "deepseek-chat";

    /* ---------- messaggi ---------- */
    let messages = [{ role: "user", content: prompt }];

    if (cmd === "trend") {
      messages = [
        {
          role: "system",
          content:
            "You are a data engine. Return ONLY a valid JSON array of 12 numbers " +
            "(no objects, no text). The numbers represent monthly growth rates " +
            "in percent, rounded to one decimal."
        },
        { role: "user", content: prompt }
      ];
    }

    const completion = await openai.chat.completions.create({
      model,
      messages,
      temperature: 0.4,
      max_tokens : 400
    });

    return Response.json(
      { ok: true, data: completion.choices[0].message },
      { status: 200 }
    );
  } catch (err: any) {
    return Response.json(
      { ok: false, error: err.message || "Unknown error" },
      { status: 500 }
    );
  }
}

