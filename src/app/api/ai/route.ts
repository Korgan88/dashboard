import type { NextRequest } from "next/server";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { cmd = "chat", prompt = "" } = await req.json();

    const key = process.env.DEEPSEEK_API_KEY;
    if (!key) throw new Error("missing DEEPSEEK_API_KEY");

    const OpenAI = (await import("openai")).default;
    const openai = new OpenAI({ apiKey: key });

    const messages =
      cmd === "trend"
        ? [
            {
              role: "system",
              content:
                "Return ONLY a JSON array of 12 numbers (monthly growth)." +
                "No text, no keys."
            },
            { role: "user", content: prompt }
          ]
        : [{ role: "user", content: prompt }];

    const completion = await openai.chat.completions.create({
      model: "deepseek-chat",
      temperature: 0.4,
      max_tokens: 500,
      messages
    });

    return Response.json({ ok: true, data: completion.choices[0].message });
  } catch (e: any) {
    return Response.json(
      { ok: false, error: e?.message ?? "unknown" },
      { status: 500 }
    );
  }
}
