"use client";

import React, { useState } from "react";

export default function AssistantDemo() {
  const [q, setQ] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [image, setImage]   = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const run = async () => {
    setLoading(true);
    const res = await fetch(`/api/ai?service=assistant&prompt=${encodeURIComponent(q)}`);
    const js  = await res.json(); // { result:"...", image?: "https://..." }
    setAnswer(js.result);
    setImage(js.image ?? null);
    setLoading(false);
  };

  return (
    <div className="space-y-3">
      <textarea
        rows={3}
        value={q}
        onChange={e => setQ(e.target.value)}
        placeholder="Chiedi qualsiasi cosa su moda luxury..."
        className="w-full px-2 py-1 bg-gray-800 border border-gray-700 rounded"
      />
      <button onClick={run} className="btn-primary w-full">{loading ? "…" : "Chiedi"}</button>

      {answer && <p className="text-sm text-gray-300 whitespace-pre-wrap">{answer}</p>}
      {image  && <img src={image} alt="AI generated" className="w-full h-40 object-cover rounded" />}
    </div>
  );
}
