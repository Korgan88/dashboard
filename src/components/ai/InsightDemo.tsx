"use client";
import React from "react";
import { useDemo } from "@/lib/useDemo";

export default function InsightDemo() {
  const { loading, data, error, run } = useDemo<{ content: string }>("insight");

  return (
    <div>
      <select
        className="bg-gray-800 p-2 w-full"
        defaultValue=""
        onChange={(e) => e.target.value && run({ segment: e.target.value })}
      >
        <option value="" disabled>
          Segmento…
        </option>
        <option>Gen Z</option>
        <option>Millennials</option>
        <option>Gen X</option>
        <option>Boomers</option>
      </select>

      {loading && <p className="mt-2 text-xs text-gray-400">Analisi…</p>}
      {error   && <p className="mt-2 text-xs text-red-400">{error}</p>}
      {data && (
        <pre className="mt-2 text-xs whitespace-pre-wrap text-gray-300">
          {data.content}
        </pre>
      )}
    </div>
  );
}
