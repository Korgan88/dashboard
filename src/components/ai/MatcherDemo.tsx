"use client";
import React, { useState } from "react";
import { useDemo } from "@/lib/useDemo";

export default function MatcherDemo() {
  const [query, setQuery] = useState("");
  const { loading, data, error, run } = useDemo<{ content: string }>("matcher");

  return (
    <div>
      <input
        className="bg-gray-800 p-2 w-full"
        placeholder="Descrivi il look…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={() => query && run({ query })}
        className="btn-primary w-full mt-2"
      >
        Trova match
      </button>

      {loading && <p className="mt-2 text-xs">Calcolo…</p>}
      {error   && <p className="mt-2 text-xs text-red-400">{error}</p>}
      {data && (
        <pre className="mt-2 text-xs whitespace-pre-wrap text-gray-300">
          {data.content}
        </pre>
      )}
    </div>
  );
}
