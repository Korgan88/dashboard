"use client";

import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { CardDescription, Button } from "@/components/ui/card";

export default function InsightDemo() {
  const [labels, setLabels] = useState<string[]>([]);
  const [values, setValues] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  async function run() {
    setLoading(true);
    const r = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cmd: "chat",
        prompt:
          "Give me a JSON array of top-5 growing luxury categories 2025 with % growth"
      })
    }).then(r => r.json());
    setLoading(false);

    try {
      const json = JSON.parse(r.data.content);
      setLabels(json.map((x: any) => x.category));
      setValues(json.map((x: any) => x.growth));
    } catch {
      alert("Parsing error");
    }
  }

  return (
    <div className="space-y-4">
      <Button onClick={run} disabled={loading}>
        {loading ? "..." : "Generate insight"}
      </Button>

      {values.length > 0 && (
        <>
          <CardDescription>Top growth categories</CardDescription>
          <Bar
            data={{
              labels,
              datasets: [
                {
                  label: "% growth",
                  data: values
                }
              ]
            }}
            options={{
              plugins: { legend: { display: false } },
              scales: { y: { beginAtZero: true } }
            }}
          />
        </>
      )}
    </div>
  );
}
