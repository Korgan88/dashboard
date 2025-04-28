'use client';

import React, { useState } from 'react';

export default function AssistantDemo() {
  const [msg,     setMsg]     = useState('');
  const [answer,  setAnswer]  = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function askAssistant() {
    if (!msg.trim()) return;
    setLoading(true);
    setAnswer(null);

    try {
      const url  = `/api/ai?service=assistant&prompt=${encodeURIComponent(msg)}`;
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
        value={msg}
        onChange={e => setMsg(e.target.value)}
        placeholder="Chiedi qualcosa all’assistente…"
        className="w-full bg-gray-800 p-2 rounded text-sm mb-2"
      />
      <button
        onClick={askAssistant}
        disabled={loading}
        className="btn-primary w-full mb-2"
      >
        {loading ? 'Rispondo…' : 'Invia'}
      </button>

      {answer && (
        <div className="mt-2 text-sm whitespace-pre-wrap text-gray-300">
          {answer}
        </div>
      )}
    </>
  );
}
