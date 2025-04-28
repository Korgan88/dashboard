"use client";

import React, { useState } from "react";
import { CardDescription } from "@/components/ui/card";
import { Sparklines, SparklinesLine } from "react-sparklines";

export default function TrendDemo() {
  const [data, setData] = useState<number[]>([]);

  const handleRun = async () => {
    const res = await fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify({ type: "trend", prompt: "trend fashion 2025" })
    });
    const json = await res.json();
    setData(json.values ?? []);
  };

  return (
    <div className="space-y-3">
      <CardDescription>Previsione vendite next-12 mesi</CardDescription>

      <button onClick={handleRun} className="btn-primary w-full">
        Genera
      </button>

      {data.length > 0 && (
        <Sparklines data={data} height={60}>
          <SparklinesLine style={{ fill: "none" }} />
        </Sparklines>
      )}
    </div>
  );
}
