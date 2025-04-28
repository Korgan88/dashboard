/* ------------------------------------------------------------------
 * /app/api/ai/route.ts        (Next-13 “app router” – Edge Runtime)
 * ------------------------------------------------------------------
 * Gestisce 4 micro-servizi demo (insight, matcher, trend, assistant) 
 * che parlano con DeepSeek AI.  Restituisce sempre JSON:
 *   { result: … , image?: "https://..." }
 * È progettato per rimanere snello nel bundle edge – per questo 
 * importiamo dinamicamente la SDK openai/axios solo dentro la route.
 * ------------------------------------------------------------------ */

import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";            // obbligatorio per funzioni Edge
export const dynamic = "force-dynamic";   // disattiva la cache Vercel Edge

// ---------------------------------------------------------------------
// Helper di basso livello: chiamata completions/chat a DeepSeek
// ---------------------------------------------------------------------
const chat = async (system: string, user: string) => {
  // 1. import dinamico (OpenAI node client rimane fuori dal bundle edge)
  const OpenAI = (await import("openai")).default;
  const openai  = new OpenAI({ apiKey: process.env.DEEPSEEK_API_KEY });
  const model   = "deepseek-chat";

  const resp = await openai.chat.completions.create({
    model,
    temperature: 0.7,
    messages: [
      { role: "system", content: system },
      { role: "user",   content: user   },
    ],
  });

  const content = resp.choices[0].message.content?.trim() ?? "";
  return { result: content };
};

// Variante che può richiedere anche una immagine (DeepSeek-V)
const chatWithImage = async (prompt: string) => {
  const OpenAI = (await import("openai")).default;
  const openai = new OpenAI({ apiKey: process.env.DEEPSEEK_API_KEY });

  /* ① testo */
  const textResp = await openai.chat.completions.create({
    model: "deepseek-chat",
    messages: [{ role: "user", content: prompt }],
  });
  const answer = textResp.choices[0].message.content?.trim() ?? "";

  /* ② immagine (facoltativa) */
  const imgResp = await openai.images.generate({
    model:  "deepseek-image",
    prompt: `Fashion luxury style: ${prompt}`,
    size:   "512x512",
  });
  const url = imgResp.data?.[0]?.url ?? null;

  return { result: answer, image: url };
};

// ---------------------------------------------------------------------
// Route handler principale
// ---------------------------------------------------------------------
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const service = searchParams.get("service");  // insight|matcher|trend|assistant
  const prompt  = searchParams.get("prompt") ?? "";

  if (!service) {
    return NextResponse.json({ error: "missing service" }, { status: 400 });
  }

  try {
    switch (service) {
      /* ------------------------------------------------------------ */
      case "insight": {
        // chiediamo 5 keyword JSON ← il front-end disegnerà il bar-chart.
        const { result } = await chat(
          "Restituisci ESATTAMENTE un array JSON di 5 oggetti {keyword,score} (score 0-100).",
          prompt
        );
        return NextResponse.json({ result: JSON.parse(result) });
      }

      /* ------------------------------------------------------------ */
      case "matcher": {
        const { result } = await chat(
          "Restituisci un singolo prodotto luxury in JSON {name,price,image,why}. Immagine URL reale o placeholder Unsplash.",
          prompt
        );
        return NextResponse.json({ result: JSON.parse(result) });
      }

      /* ------------------------------------------------------------ */
      case "trend": {
        const { result } = await chat(
          "Fornisci 12 valori mensili di interesse (0-100) in un array JSON (solo numeri).",
          prompt
        );
        return NextResponse.json({ result: JSON.parse(result) });
      }

      /* ------------------------------------------------------------ */
      case "assistant": {
        /* testo + potenziale immagine generata  */
        const { result, image } = await chatWithImage(prompt);
        return NextResponse.json({ result, image });
      }

      /* ------------------------------------------------------------ */
      default:
        return NextResponse.json({ error: "unknown service" }, { status: 400 });
    }
  } catch (err: any) {
    console.error("AI-route error", err);
    return NextResponse.json(
      { error: err?.message ?? "server error" },
      { status: 500 }
    );
  }
}
