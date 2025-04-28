"use client";

import React, { useState } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { Button, CardDescription } from "@/components/ui/card";

export default function TrendDemo() {
  const [data, setData] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  async function run() {
    setLoading(true);
    const r = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cmd: "trend",
        prompt: "12-month growth forecast for Swiss luxury market %"
      })
    }).then(r => r.json());
    setLoading(false);

    try {
      setData(JSON.parse(r.data.content));
    } catch {
      alert("bad json");
    }
  }

  return (
    <div className="space-y-4">
      <Button onClick={run} disabled={loading}>
        {loading ? "..." : "Generate trend"}
      </Button>

      {data.length === 12 && (
        <>
          <CardDescription>Monthly growth %</CardDescription>
          <Sparklines data={data}>
            <SparklinesLine style={{ strokeWidth: 3 }} />
          </Sparklines>
        </>
      )}
    </div>
  );
}
