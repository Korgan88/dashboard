import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { query } = await req.json();
  if (!query) {
    return NextResponse.json({ error: "Param 'query' required" }, { status: 400 });
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
        {
          role: "system",
          content:
            "Sei un AI stylist. Suggerisci 3 prodotti luxury che combaciano con la richiesta utente. Output puntato, massimo 60 parole totali.",
        },
        { role: "user", content: query },
      ],
    }),
  });

  const data = await res.json();
  if (!res.ok) return NextResponse.json({ error: data.error }, { status: 400 });

  return NextResponse.json({ content: data.choices[0].message.content });
}
