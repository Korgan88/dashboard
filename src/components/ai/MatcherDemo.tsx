/* src/components/ai/MatcherDemo.tsx */
"use client";
import React, { useState } from "react";
import { fetchAI } from "@/lib/fetchAI";

export default function MatcherDemo() {
  const [query, setQuery]     = useState("");
  const [answer, setAnswer]   = useState("");
  const [loading, setLoading] = useState(false);

  // mock prodotti demo
  const items = [
    "Borsa Chanel 2.55",
    "Sneakers Balenciaga Triple-S",
    "Rolex Submariner",
    "Foulard Hermès carré 90"
  ];

  async function handleRun() {
    if (!query.trim()) return;
    setLoading(true);
    setAnswer("…");
    try {
      const { data } = await fetchAI({
        service: "matcher",
        prompt : query,
        items
      });
      setAnswer(data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-2">
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Esempio: borsa in pelle trapuntata nera"
        className="w-full bg-gray-800 text-xs p-2 rounded"
      />
      <button
        onClick={handleRun}
        className="btn-primary w-full disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Loading…" : "Match"}
      </button>
      <pre className="text-[11px] whitespace-pre-wrap mt-2 max-h-48 overflow-y-auto">
        {answer}
      </pre>
    </div>
  );
}
