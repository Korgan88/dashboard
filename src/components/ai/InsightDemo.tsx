"use client";

import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, BarElement, CategoryScale, LinearScale } from "chart.js";
import { CardDescription, Button } from "@/components/ui/card";

Chart.register(BarElement, CategoryScale, LinearScale);

export default function InsightDemo() {
  const [loading, setLoading] = useState(false);
  const [labels, setLabels]   = useState<string[]>([]);
  const [values, setValues]   = useState<number[]>([]);

  const handleClick = async () => {
    setLoading(true);
    const r  = await fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify({ type: "insight" }),
    });
    const { data } = await r.json();
    /* data = { topBrands:[{name,score}, …] } */
    setLabels(data.topBrands.map((b: any) => b.name));
    setValues(data.topBrands.map((b: any) => b.score));
    setLoading(false);
  };

  return (
    <>
      <CardDescription>
        Scopri i brand più “caldi” secondo DeepSeek.
      </CardDescription>

      {labels.length > 0 && (
        <Bar
          options={{ plugins: { legend: { display: false } } }}
          data={{
            labels,
            datasets: [
              {
                data: values,
                borderWidth: 1,
              },
            ],
          }}
        />
      )}

      <Button onClick={handleClick} disabled={loading}>
        {loading ? "Carico…" : "Genera insight"}
      </Button>
    </>
  );
}
