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
  const [error, setError]     = useState<string | null>(null);

  const fetchInsight = async () => {
    setLoading(true);
    setError(null);

    const res = await fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify({ type: "insight" }),
    });

    if (!res.ok) {
      const { error } = await res.json();
      setError(error);
      setLoading(false);
      return;
    }

    const { data } = await res.json(); // sempre valido
    const arr = Array.isArray(data) ? data : data.topBrands ?? [];

    setLabels(arr.map((b: any) => b.name));
    setValues(arr.map((b: any) => b.score));
    setLoading(false);
  };

  return (
    <>
      <CardDescription>
        Scopri i brand più “caldi” secondo DeepSeek.
      </CardDescription>

      {error && <p className="text-red-500 text-xs">{error}</p>}

      {labels.length > 0 && (
        <Bar
          options={{ plugins: { legend: { display: false } } }}
          data={{
            labels,
            datasets: [{ data: values, borderWidth: 1 }],
          }}
        />
      )}

      <Button onClick={fetchInsight} disabled={loading}>
        {loading ? "Carico…" : "Genera insight"}
      </Button>
    </>
  );
}
