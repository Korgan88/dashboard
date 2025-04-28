import { NextRequest } from "next/server";
import OpenAI from "openai";

export const runtime = "edge";
export const dynamic = "force-dynamic";

const openai = new OpenAI({ apiKey: process.env.DEEPSEEK_API_KEY! });
const model  = "deepseek-chat";

/* Utilità comune */
type Msg = { role: "user" | "assistant" | "system"; content: string };

export async function POST(req: NextRequest) {
  const { type } = await req.json();

  /* prompt diversificati */
  let prompt = "";
  if (type === "insight") prompt = "Top 5 luxury fashion brands 2025 with score 0-100 JSON";
  if (type === "trend")   prompt = "Give 12 monthly numbers (0-100) predicting 'quiet luxury' search interest JSON array";

  const completion = await openai.chat.completions.create({
    model,
    temperature: 0.4,
    max_tokens: 500,
    messages: [{ role: "user", content: prompt }] as Msg[],
  });

  /* Cerchiamo di fare parsing sicuro */
  let parsed: any = {};
  try {
    parsed = JSON.parse(completion.choices[0].message.content || "{}");
  } catch {
    parsed = { raw: completion.choices[0].message.content };
  }

  return Response.json({ ok: true, data: parsed });
}
