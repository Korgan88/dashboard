"use client";
import React from "react";
import { useDemo } from "@/lib/useDemo";

export default function TrendDemo() {
  const { loading, data, error, run } = useDemo<{ content: string }>("trend");

  return (
    <div>
      <button onClick={() => run()} className="btn-primary w-full">
        Genera Trend
      </button>

      {loading && <p className="mt-2 text-xs">Analisi…</p>}
      {error   && <p className="mt-2 text-xs text-red-400">{error}</p>}
      {data && (
        <pre className="mt-2 text-xs whitespace-pre-wrap text-gray-300">
          {data.content}
        </pre>
      )}
    </div>
  );
}
