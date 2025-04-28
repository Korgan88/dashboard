"use client";

import React, { useState } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { CardDescription, Button } from "@/components/ui/card";

export default function TrendDemo() {
  const [loading, setLoading] = useState(false);
  const [trend, setTrend]     = useState<number[]>([]);
  const [error, setError]     = useState<string | null>(null);

  const fetchTrend = async () => {
    setLoading(true);
    setError(null);

    const res = await fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify({ type: "trend" }),
    });

    if (!res.ok) {
      const { error } = await res.json();
      setError(error);
      setLoading(false);
      return;
    }

    const { data } = await res.json();
    const arr = Array.isArray(data) ? data : data.points ?? [];
    setTrend(arr);
    setLoading(false);
  };

  return (
    <>
      <CardDescription>
        Proiezione mensile di interesse per “quiet luxury”.
      </CardDescription>

      {error && <p className="text-red-500 text-xs">{error}</p>}

      {trend.length > 0 && (
        <Sparklines data={trend} height={60}>
          <SparklinesLine style={{ stroke: "#4ade80", fill: "none" }} />
        </Sparklines>
      )}

      <Button onClick={fetchTrend} disabled={loading}>
        {loading ? "Carico…" : "Genera trend"}
      </Button>
    </>
  );
}
