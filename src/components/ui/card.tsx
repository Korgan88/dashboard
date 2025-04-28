import React from "react";
import { cn } from "@/lib/utils";

interface BaseProps {
  className?: string;
  children: React.ReactNode;
}

/* ---------- contenitore ---------- */
export function Card({ className, children }: BaseProps) {
  return (
    <div className={cn("dashboard-card", className)}>
      {children}
    </div>
  );
}

/* ---------- header ---------- */
export function CardHeader({ className, children }: BaseProps) {
  return (
    <div className={cn("p-4 border-b border-gray-800", className)}>
      {children}
    </div>
  );
}

/* ---------- titolo ---------- */
export function CardTitle({ className, children }: BaseProps) {
  return (
    <h3 className={cn("text-lg font-semibold", className)}>
      {children}
    </h3>
  );
}

/* ---------- NUOVO: descrizione ---------- */
export function CardDescription({ className, children }: BaseProps) {
  return (
    <p className={cn("mt-1 text-sm text-gray-400", className)}>
      {children}
    </p>
  );
}

/* ---------- contenuto ---------- */
export function CardContent({ className, children }: BaseProps) {
  return (
    <div className={cn("p-4", className)}>
      {children}
    </div>
  );
}
