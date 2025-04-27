// src/app/layout.tsx
import "./global.css";  // ← ora punta al file src/app/global.css

import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <head>…</head>
      <body>{children}</body>
    </html>
  );
}
