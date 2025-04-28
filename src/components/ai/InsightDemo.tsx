'use client';

import React, { useState } from 'react';

export default function InsightDemo() {
  const [query, setQuery]     = useState('');
  const [answer, setAnswer]   = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function askInsight() {
    if (!query.trim()) return;
    setLoading(true);
    setAnswer(null);

    try {
      const url  = `/api/ai?service=insight&prompt=${encodeURIComponent(query)}`;
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
      <textarea
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Chiedi un insight sul mercato luxury…"
        className="w-full bg-gray-800 p-2 rounded text-sm mb-2"
        rows={3}
      />
      <button
        onClick={askInsight}
        disabled={loading}
        className="btn-primary w-full mb-2"
      >
        {loading ? 'Analizzo…' : 'Ottieni Insight'}
      </button>

      {answer && (
        <div className="mt-2 text-sm whitespace-pre-wrap text-gray-300">
          {answer}
        </div>
      )}
    </>
  );
}
