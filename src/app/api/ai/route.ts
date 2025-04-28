// src/app/api/ai/route.ts
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";          // bundle leggerissimo
export const dynamic = "force-dynamic";

type Body =
  | { service: "insight"; prompt: string }
  | { service: "matcher"; prompt: string; items: string[] }
  | { service: "trend";   prompt: string }
  | { service: "assistant"; prompt: string };

export async function POST(req: NextRequest) {
  const body = (await req.json()) as Body;

  // 1. import dinamico: openai non finisce nel bundle edge
  const OpenAI = (await import("openai")).default;
  const openai   = new OpenAI({ apiKey: process.env.DEEPSEEK_API_KEY });
  const model    = "deepseek-chat";

  // 2. costruiamo il messaggio in base al servizio
  const messages = (() => {
    switch (body.service) {
      case "insight":
        return [
          { role: "system",  content: "Sei un analista fashion-luxury." },
          { role: "user",    content: body.prompt }
        ];
      case "matcher":
        return [
          { role: "system",  content: "Sei un product-matcher per il lusso." },
          { role: "user",    content:
            `Trova la corrispondenza migliore per "${body.prompt}" in ${JSON.stringify(body.items)}`
          }
        ];
      case "trend":
        return [
          { role: "system",  content: "Sei un generatore di trend nel luxury." },
          { role: "user",    content: body.prompt }
        ];
      case "assistant":
      default:
        return [
          { role: "system", content: "Sei un assistente shopping di lusso." },
          { role: "user",   content: body.prompt }
        ];
    }
  })();

  // 3. chiamata DeepSeek (OpenAI-compatibile)
  const completion = await openai.chat.completions.create({
    model,
    messages,
    temperature: 0.7,
  });

  return NextResponse.json({ ok: true, data: completion.choices[0].message.content });
}
