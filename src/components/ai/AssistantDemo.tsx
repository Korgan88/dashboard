"use client";
import React, { useState } from "react";
import { useDemo } from "@/lib/useDemo";

export default function AssistantDemo() {
  const [question, setQuestion] = useState("");
  const { loading, data, error, run } = useDemo<{ content: string }>("assistant");

  return (
    <div>
      <textarea
        className="bg-gray-800 p-2 w-full h-20 resize-none"
        placeholder="Fai una domanda di shopping di lusso…"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button
        onClick={() => question && run({ question })}
        className="btn-primary w-full mt-2"
      >
        Chiedi
      </button>

      {loading && <p className="mt-2 text-xs">Assistant sta scrivendo…</p>}
      {error   && <p className="mt-2 text-xs text-red-400">{error}</p>}
      {data && (
        <pre className="mt-2 text-xs whitespace-pre-wrap text-gray-300">
          {data.content}
        </pre>
      )}
    </div>
  );
}
