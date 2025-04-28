"use client";

import React, { useState } from "react";
import { CardDescription } from "@/components/ui/card";

type Point = { x: number; y: number };

const TinyLine = ({ data }: { data: Point[] }) => {
  // line in un <svg> 100×40
  const path = data
    .map(
      (p, i) =>
        `${i === 0 ? "M" : "L"}${(p.x * 100).toFixed(2)} ${
          40 - p.y * 35 /* invert y */
        }`
    )
    .join(" ");
  return (
    <svg width={100} height={40} viewBox="0 0 100 40" className="mx-auto">
      <path d={path} fill="none" stroke="#4ade80" strokeWidth={2} />
    </svg>
  );
};

export default function TrendDemo() {
  const [loading, setLoading] = useState(false);
  const [trend, setTrend] = useState<Point[]>([]);

  const run = async () => {
    setLoading(true);
    setTrend([]);
    const r = await fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify({ mode: "trend" })
    });
    const json = (await r.json()) as { numbers: number[] };
    // normalizza i valori 0-1 per lo spark
    const max = Math.max(...json.numbers);
    const pts = json.numbers.map((n, i) => ({
      x: i / (json.numbers.length - 1),
      y: n / max
    }));
    setTrend(pts);
    setLoading(false);
  };

  return (
    <div className="space-y-2">
      <button
        className="btn-primary w-full"
        onClick={run}
        disabled={loading}
      >
        {loading ? "…" : "Genera trend"}
      </button>

      {trend.length > 0 && (
        <>
          <TinyLine data={trend} />
          <CardDescription className="text-center">
            Proiezione percentuale dei prossimi 12 mesi
          </CardDescription>
        </>
      )}
    </div>
  );
}
