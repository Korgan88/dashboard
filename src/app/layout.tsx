import React from "react";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <head>
        <title>LUXAI Dashboard</title>
        <meta name="description" content="Dashboard interattiva per il business plan LUXAI" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Helvetica:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
