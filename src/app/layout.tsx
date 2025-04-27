// src/app/layout.tsx

import "./globals.css";  // ← importa qui il globals.css spostato in src/app

import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <head>
        <title>LUXAI Dashboard</title>
        <meta
          name="description"
          content="Dashboard interattiva per il business plan LUXAI"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Helvetica:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
