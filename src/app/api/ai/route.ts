/**
 * Unified AI route:  /api/ai?service=insight|matcher|trend|assistant&prompt=...
 * 1. prova DeepSeek
 * 2. se DeepSeek → "Insufficient Balance", passa a OpenAI gpt-3.5-turbo
 */

import type { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';
const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;
const OPENAI_API_KEY   = process.env.OPENAI_API_KEY; // opzionale fallback

function sysPrompt(service: string) {
  switch (service) {
    case 'insight':
      return 'Sei un analista del mercato luxury: fornisci insight sintetici e dati.';
    case 'matcher':
      return 'Sei un personal shopper: consiglia prodotti in base allo stile.';
    case 'trend':
      return 'Sei un trend forecaster: genera tendenze future in breve.';
    case 'assistant':
    default:
      return 'Sei un assistente aziendale cordiale.';
  }
}

async function callDeepSeek(modelPrompt: string) {
  const res = await fetch('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
      model : 'deepseek-chat',
      messages: [{ role: 'user', content: modelPrompt }],
      temperature: 0.7
    })
  });
  return res;
}

async function callOpenAI(modelPrompt: string) {
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: modelPrompt }],
      temperature: 0.7
    })
  });
  return res;
}

export async function GET(req: NextRequest) {
  const prompt  = req.nextUrl.searchParams.get('prompt')   ?? '';
  const service = req.nextUrl.searchParams.get('service')  ?? 'assistant';

  if (!prompt.trim()) {
    return Response.json({ error: 'Prompt mancante' }, { status: 400 });
  }

  const fullPrompt = `${sysPrompt(service)}\n\nUtente: ${prompt}`;

  /* ---------- 1. DeepSeek ---------- */
  try {
    const deep = await callDeepSeek(fullPrompt);
    const dj   = await deep.json();

    if (deep.ok) {
      const msg = dj.choices?.[0]?.message?.content ?? 'Risposta vuota';
      return Response.json({ answer: msg });
    }

    // Se l’errore è “Insufficient Balance” ma esiste un fallback
    const code = dj?.error?.code;
    if (code === 'invalid_request_error' && dj.error?.message?.includes('Balance') && OPENAI_API_KEY) {
      // passiamo a OpenAI
    } else {
      return Response.json({ error: dj?.error?.message ?? 'DeepSeek error' }, { status: 500 });
    }
  } catch (e) {
    /* continua su OpenAI se configurato */
  }

  /* ---------- 2. Fallback OpenAI ---------- */
  if (!OPENAI_API_KEY) {
    return Response.json({ error: 'DeepSeek senza credito e OPENAI_API_KEY non definita' }, { status: 502 });
  }

  try {
    const open = await callOpenAI(fullPrompt);
    const oj   = await open.json();

    if (open.ok) {
      const msg = oj.choices?.[0]?.message?.content ?? 'Risposta vuota';
      return Response.json({ answer: msg });
    }
    return Response.json({ error: oj?.error?.message ?? 'OpenAI error' }, { status: 500 });
  } catch (err) {
    return Response.json({ error: 'Errore di rete verso OpenAI' }, { status: 502 });
  }
}
