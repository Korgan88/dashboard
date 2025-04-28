/* src/components/ai/AssistantDemo.tsx */
"use client";
import React, { useState } from "react";
import { fetchAI } from "@/lib/fetchAI";

export default function AssistantDemo() {
  const [prompt, setPrompt]   = useState("");
  const [answer, setAnswer]   = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRun() {
    if (!prompt.trim()) return;
    setLoading(true);
    setAnswer("…");
    try {
      const { data } = await fetchAI({ service: "assistant", prompt });
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
        placeholder="Esempio: consigliami un outfit da cocktail primaverile"
        className="w-full bg-gray-800 text-xs p-2 rounded"
      />
      <button
        onClick={handleRun}
        className="btn-primary w-full disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Loading…" : "Ask"}
      </button>
      <pre className="text-[11px] whitespace-pre-wrap mt-2 max-h-48 overflow-y-auto">
        {answer}
      </pre>
    </div>
  );
}
