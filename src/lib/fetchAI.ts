// src/lib/fetchAI.ts
export async function fetchAI(payload: unknown) {
  const res = await fetch("/api/ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    throw new Error(`API error (${res.status}) ${txt}`);
  }

  return res.json() as Promise<{ ok: boolean; data: string }>;
}
