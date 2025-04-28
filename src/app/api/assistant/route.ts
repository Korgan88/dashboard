import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `Sei l'assistente AI di LUXAI. Rispondi in italiano, tono premium.`;

export async function POST(req: NextRequest) {
  const { question } = await req.json();

  if (!question) {
    return NextResponse.json(
      { error: "Param 'question' required" },
      { status: 400 }
    );
  }

  const apiKey = process.env.DEEPSEEK_API_KEY!;
  const res = await fetch("https://api.deepseek.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: question },
      ],
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    return NextResponse.json({ error: data.error }, { status: 400 });
  }

  return NextResponse.json({ content: data.choices[0].message.content });
}
