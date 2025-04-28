/* src/app/api/ai/route.ts
   Runtime Edge — no external OpenAI SDK               */
import { NextRequest, NextResponse } from 'next/server';

export const runtime  = 'edge';
export const dynamic  = 'force-dynamic';      // ← Vercel Edge FN
const ENDPOINT        = 'https://api.deepseek.com/v1/chat/completions';
const MODEL           = 'deepseek-chat';      // default model name

type Role = 'system' | 'user' | 'assistant';

interface DeepSeekMessage { role: Role; content: string }

/*------------------------------------------------------------------
  Helper for the 4 demo end-points
------------------------------------------------------------------*/
async function callDeepSeek(prompt: string, system: string) {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Missing DEEPSEEK_API_KEY' },
      { status: 500 }
    );
  }

  const body = {
    model : MODEL,
    messages: [
      { role: 'system', content: system }      as DeepSeekMessage,
      { role: 'user',   content: prompt }      as DeepSeekMessage
    ]
  };

  const resp = await fetch(ENDPOINT, {
    method : 'POST',
    headers: {
      'Content-Type' : 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(body)
  });

  if (!resp.ok) {
    const text = await resp.text();
    return NextResponse.json({ error: text }, { status: resp.status });
  }

  const json = await resp.json();
  const answer = json.choices?.[0]?.message?.content ?? '';
  return NextResponse.json({ answer });
}

/*------------------------------------------------------------------
  Edge route /api/ai?service=insight|matcher|trend|assistant&prompt=...
------------------------------------------------------------------*/
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const prompt   = searchParams.get('prompt')   ?? '';
  const service  = searchParams.get('service')  ?? '';

  if (!prompt) {
    return NextResponse.json({ error: 'Missing prompt' }, { status: 400 });
  }

  switch (service) {
    case 'insight':
      return callDeepSeek(
        prompt,
        'You are a luxury-fashion market analyst. Answer with concise insights.'
      );

    case 'matcher':
      return callDeepSeek(
        `Find the best luxury product match for: ${prompt}`,
        'You recommend luxury fashion items.'
      );

    case 'trend':
      return callDeepSeek(
        `Generate a future trend scenario for: ${prompt}`,
        'You forecast upcoming trends in luxury fashion.'
      );

    case 'assistant':
      return callDeepSeek(
        prompt,
        'You are LUXAI shopping assistant. Reply friendly and short.'
      );

    default:
      return NextResponse.json(
        { error: 'Unknown service' },
        { status: 400 }
      );
  }
}

