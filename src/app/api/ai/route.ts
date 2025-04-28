import { NextRequest } from "next/server";
import OpenAI from "openai";

export const runtime = "edge";
export const dynamic = "force-dynamic";

const openai = new OpenAI({ apiKey: process.env.DEEPSEEK_API_KEY! });
const model  = "deepseek-chat";

type Msg = { role: "user" | "assistant" | "system"; content: string };

export async function POST(req: NextRequest) {
  try {
    const { type = "insight" } = await req.json();

    /* prompt */
    const prompt =
      type === "trend"
        ? "Give 12 monthly integers (0-100) predicting future search interest for 'quiet luxury' as JSON array."
        : "Return top 5 luxury fashion brands for 2025 with a popularity score 0-100 as JSON [{name,score}].";

    const chat = await openai.chat.completions.create({
      model,
      temperature: 0.4,
      max_tokens: 512,
      messages: [{ role: "user", content: prompt }] as Msg[],
    });

    const raw = chat.choices[0].message.content?.trim() || "";
    let data: any;
    try {
      data = JSON.parse(raw);
    } catch {
      data = { raw }; // fallback per vedere cosa arriva realmente
    }

    return Response.json({ ok: true, data });
  } catch (err: any) {
    return Response.json(
      { ok: false, error: err.message ?? "unknown" },
      { status: 500 }
    );
  }
}
