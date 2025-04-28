"use client";

import React, { useState } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { CardDescription, Button } from "@/components/ui/card";

export default function TrendDemo() {
  const [loading, setLoading] = useState(false);
  const [trend, setTrend]     = useState<number[]>([]);

  const handleClick = async () => {
    setLoading(true);
    const r  = await fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify({ type: "trend" }),
    });
    const { data } = await r.json(); /* data = { points:[…] } */
    setTrend(data.points);
    setLoading(false);
  };

  return (
    <>
      <CardDescription>
        Proiezione di popolarità (0-100) per “quiet luxury”.
      </CardDescription>

      {trend.length > 0 && (
        <Sparklines data={trend} height={60}>
          <SparklinesLine style={{ stroke: "#4ade80", fill: "none" }} />
        </Sparklines>
      )}

      <Button onClick={handleClick} disabled={loading}>
        {loading ? "Carico…" : "Genera trend"}
      </Button>
    </>
  );
}
