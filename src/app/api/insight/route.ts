import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { segment } = await req.json();
  if (!segment) {
    return NextResponse.json({ error: "Param 'segment' required" }, { status: 400 });
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
            "Sei un analista luxury fashion. Fornisci insight sintetici (max 120 parole) sul segmento indicato.",
        },
        { role: "user", content: `Segmento: ${segment}` },
      ],
    }),
  });

  const data = await res.json();
  if (!res.ok) return NextResponse.json({ error: data.error }, { status: 400 });

  return NextResponse.json({ content: data.choices[0].message.content });
}
