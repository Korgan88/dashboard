"use client";

import React, { useState } from "react";

interface Match {
  name: string;
  image: string;  // URL
  price: string;
  why:  string;
}

export default function MatcherDemo() {
  const [input, setInput] = useState("");
  const [match, setMatch] = useState<Match | null>(null);
  const [loading, setLoading] = useState(false);

  const run = async () => {
    setLoading(true);
    const res  = await fetch(`/api/ai?service=matcher&prompt=${encodeURIComponent(input)}`);
    const json = await res.json();   // { result: Match }
    setMatch(json.result);
    setLoading(false);
  };

  return (
    <div className="space-y-3">
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Descrivi lo stile o l'occasione"
        className="w-full px-2 py-1 bg-gray-800 border border-gray-700 rounded"
      />
      <button onClick={run} className="btn-primary w-full">{loading ? "…" : "Trova prodotto"}</button>

      {match && (
        <div className="mt-3 text-sm text-gray-300 space-y-2">
          <img src={match.image} alt={match.name} className="w-full h-40 object-cover rounded" />
          <div className="font-semibold">{match.name}</div>
          <div className="text-green-400">{match.price}</div>
          <p className="text-xs">{match.why}</p>
        </div>
      )}
    </div>
  );
}
