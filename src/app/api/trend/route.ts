import { NextResponse } from "next/server";

export async function POST() {
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
        {
          role: "system",
          content:
            "Sei un Trend Forecaster. Genera 2 micro-trend fashion luxury per la SS26, numerati, massimo 80 parole ciascuno.",
        },
        { role: "user", content: "Genera ora." },
      ],
    }),
  });

  const data = await res.json();
  if (!res.ok) return NextResponse.json({ error: data.error }, { status: 400 });

  return NextResponse.json({ content: data.choices[0].message.content });
}
