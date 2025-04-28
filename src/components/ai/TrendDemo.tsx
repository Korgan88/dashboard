/* src/components/ai/TrendDemo.tsx */
"use client";
import React, { useState } from "react";
import { fetchAI } from "@/lib/fetchAI";

export default function TrendDemo() {
  const [prompt, setPrompt]   = useState("");
  const [answer, setAnswer]   = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRun() {
    if (!prompt.trim()) return;
    setLoading(true);
    setAnswer("…");
    try {
      const { data } = await fetchAI({ service: "trend", prompt });
      setAnswer(data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-2">
      <input
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        placeholder="Esempio: suggerisci 3 micro-trend gioielleria 2025"
        className="w-full bg-gray-800 text-xs p-2 rounded"
      />
      <button
        onClick={handleRun}
        className="btn-primary w-full disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Loading…" : "Generate"}
      </button>
      <pre className="text-[11px] whitespace-pre-wrap mt-2 max-h-48 overflow-y-auto">
        {answer}
      </pre>
    </div>
  );
}
