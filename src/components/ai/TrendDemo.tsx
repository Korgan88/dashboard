/*  src/components/ai/TrendDemo.tsx
 *  DEMO: Trend Generator – output numerico strutturato
 */
"use client";

import React, { useState } from "react";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import { CardContent } from "@/components/ui/card";

export default function TrendDemo() {
  const [loading,   setLoading]   = useState(false);
  const [points,    setPoints]    = useState<number[] | null>(null);
  const [errorMsg,  setErrorMsg]  = useState<string | null>(null);

  /** Chiede al backend 12 valori mensili */
  const runDemo = async () => {
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/ai", {
        method : "POST",
        headers: { "Content-Type": "application/json" },
        body   : JSON.stringify({
          cmd   : "trend",
          prompt: "Generate monthly growth data for the luxury fashion market in Switzerland for the next 12 months."
        })
      });

      const json = await res.json();
      if (!json.ok) throw new Error(json.error || "Unknown error");

      // json.data.content = "[3.1, 3.4, 4.0 …]"
      const arr: number[] = JSON.parse(json.data.content);
      setPoints(arr);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  /** media semplice per visualizzare una metrica sintetica */
  const avg =
    points && points.length
      ? (points.reduce((s, v) => s + v, 0) / points.length).toFixed(1)
      : null;

  return (
    <CardContent className="space-y-4">
      <button
        onClick={runDemo}
        disabled={loading}
        className="btn-primary w-full"
      >
        {loading ? "Attendere…" : "Genera trend"}
      </button>

      {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}

      {points && (
        <div className="space-y-2">
          <Sparklines data={points} limit={12} svgWidth={120} svgHeight={40}>
            <SparklinesLine style={{ stroke: "#4ade80", fill: "none" }} />
            <SparklinesSpots size={3} />
          </Sparklines>
          <p className="text-xs text-gray-400">
            Crescita media&nbsp;
            <span className="font-semibold text-green-400">{avg}%</span>
            &nbsp; sui prossimi 12&nbsp;mesi
          </p>
        </div>
      )}
    </CardContent>
  );
}
