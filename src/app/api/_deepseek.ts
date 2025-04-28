import { NextRequest, NextResponse } from "next/server";

const ENDPOINT = "https://api.deepseek.com/v1/chat/completions";
const MODEL    = "deepseek-chat-r1";

// chiamata base -------------------------------------------------
export async function callDeepseek(
  systemPrompt: string,
  userPrompt:   string,
  max_tokens = 256
) {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) throw new Error("Missing DEEPSEEK_API_KEY");

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user",   content: userPrompt },
      ],
    }),
  });

  if (!res.ok) throw new Error(`Deepseek ${res.status}: ${await res.text()}`);
  const json = await res.json();
  return (json.choices?.[0]?.message?.content as string) ?? "";
}

// helper per creare route JSON ---------------------------------
export async function jsonRoute(
  req: NextRequest,
  buildPrompt: (body: any) => Promise<{ sys: string; usr: string }>
) {
  try {
    const body = await req.json();
    const { sys, usr } = await buildPrompt(body);
    const content = await callDeepseek(sys, usr);
    return NextResponse.json({ content });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
