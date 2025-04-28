'use client';

import React, { useState } from 'react';

export default function TrendDemo() {
  const [topic,  setTopic]    = useState('');
  const [answer, setAnswer]   = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function askTrend() {
    if (!topic.trim()) return;
    setLoading(true);
    setAnswer(null);

    try {
      const url  = `/api/ai?service=trend&prompt=${encodeURIComponent(topic)}`;
      const res  = await fetch(url);
      const json = await res.json();
      setAnswer(json.answer ?? json.error ?? 'Errore sconosciuto');
    } catch (err) {
      setAnswer('Network error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <input
        type="text"
        value={topic}
        onChange={e => setTopic(e.target.value)}
        placeholder="Tema (es. streetwear 2026)…"
        className="w-full bg-gray-800 p-2 rounded text-sm mb-2"
      />
      <button
        onClick={askTrend}
        disabled={loading}
        className="btn-primary w-full mb-2"
      >
        {loading ? 'Genero…' : 'Genera Trend'}
      </button>

      {answer && (
        <div className="mt-2 text-sm whitespace-pre-wrap text-gray-300">
          {answer}
        </div>
      )}
    </>
  );
}
