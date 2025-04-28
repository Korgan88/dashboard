'use client';

import React, { useState } from 'react';

export default function MatcherDemo() {
  const [query, setQuery]     = useState('');
  const [answer, setAnswer]   = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function askMatcher() {
    if (!query.trim()) return;
    setLoading(true);
    setAnswer(null);

    try {
      const url  = `/api/ai?service=matcher&prompt=${encodeURIComponent(query)}`;
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
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Descrivi lo stile del cliente…"
        className="w-full bg-gray-800 p-2 rounded text-sm mb-2"
      />
      <button
        onClick={askMatcher}
        disabled={loading}
        className="btn-primary w-full mb-2"
      >
        {loading ? 'Cerco…' : 'Trova Match'}
      </button>

      {answer && (
        <div className="mt-2 text-sm whitespace-pre-wrap text-gray-300">
          {answer}
        </div>
      )}
    </>
  );
}

