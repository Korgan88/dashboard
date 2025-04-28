"use client";
import { useState } from "react";

export function useDemo<T>(endpoint: string) {
  const [loading, setLoading] = useState(false);
  const [data,    setData]    = useState<T | null>(null);
  const [error,   setError]   = useState<string | null>(null);

  async function run(payload = {}) {
    try {
      setLoading(true); setError(null);
      const r = await fetch(`/api/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error || "API error");
      setData(j);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return { loading, data, error, run };
}
