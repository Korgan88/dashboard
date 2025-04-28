"use client";

import React, { useState } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

export default function TrendDemo() {
  const [topic, setTopic] = useState("");
  const [series, setSeries] = useState<number[] | null>(null);
  const [loading, setLoading] = useState(false);

  const run = async () => {
    setLoading(true);
    const r   = await fetch(`/api/ai?service=trend&prompt=${encodeURIComponent(topic)}`);
    const js  = await r.json();   // { result: [14,18,25, …] }
    setSeries(js.result);
    setLoading(false);
  };

  return (
    <div className="space-y-3">
      <input
        value={topic}
        onChange={e => setTopic(e.target.value)}
        placeholder="Trend topic (es. handbag)"
        className="w-full px-2 py-1 bg-gray-800 border border-gray-700 rounded"
      />
      <button onClick={run} className="btn-primary w-full">{loading ? "…" : "Trend"}</button>

      {series && (
        <Sparklines data={series} width={100} height={30}>
          <SparklinesLine style={{ stroke: "#ff00e0", fill: "none" }} />
        </Sparklines>
      )}
    </div>
  );
}
