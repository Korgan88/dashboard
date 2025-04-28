"use client";

import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

export default function InsightDemo() {
  const [data, setData] = useState<{ labels: string[]; values: number[] } | null>(null);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt]   = useState("");

  const run = async () => {
    setLoading(true);
    const res = await fetch(`/api/ai?service=insight&prompt=${encodeURIComponent(prompt)}`);
    const json = await res.json();
    /** json.result dovrebbe essere un array: [{keyword:"streetwear",score:42}, …] */
    const labels = json.result.map((k: any) => k.keyword);
    const values = json.result.map((k: any) => k.score);
    setData({ labels, values });
    setLoading(false);
  };

  return (
    <div className="space-y-3">
      <input
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        placeholder="Tema (es. luxury sneakers 2025)"
        className="w-full px-2 py-1 bg-gray-800 border border-gray-700 rounded"
      />
      <button onClick={run} className="btn-primary w-full">{loading ? "…" : "Genera"}</button>

      {data && (
        <Bar
          data={{
            labels: data.labels,
            datasets: [{ data: data.values, backgroundColor: "#00d1ff99" }],
          }}
          options={{
            plugins: { legend: { display: false } },
            scales: { x: { ticks: { color: "#ccc" } }, y: { ticks: { color: "#ccc" } } },
          }}
        />
      )}
    </div>
  );
}
