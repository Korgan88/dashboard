export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

// handler unico
export async function POST(req: Request) {
  const { cmd, prompt } = await req.json();

  /* ① Configura correttamente l’SDK */
  const OpenAI  = (await import("openai")).default;
  const openai  = new OpenAI({
    apiKey : process.env.DEEPSEEK_API_KEY,          // chiave DeepSeek
    baseURL: process.env.DEEPSEEK_BASE_URL ??       // endpoint DeepSeek
             "https://api.deepseek.com/v1",
    // → se il provider richiede intestazione custom, usa “baseURL”
    //   e OpenAI SDK aggiungerà Authorization: Bearer <apiKey>
  });

  /* ② Scegli il modello in base al comando */
  const model =
    cmd === "image"
      ? "deepseek-v"      // vision
      : "deepseek-chat";  // solo testo

  /* ③ Chiama la chat completions */
  try {
    const completion = await openai.chat.completions.create({
      model,
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens : 512
    });

    return NextResponse.json({ ok: true, data: completion.choices[0].message });
  } catch (err: any) {
    console.error("[AI-route]", err);
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
