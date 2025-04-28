import React from "react";
import { cn } from "@/lib/utils";

/* ----------  CARD CONTAINER ---------- */
interface CardProps {
  className?: string;
  children: React.ReactNode;
}
export function Card({ className, children }: CardProps) {
  return <div className={cn("dashboard-card", className)}>{children}</div>;
}

/* ----------  CARD HEADER ---------- */
export function CardHeader({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("p-4 border-b border-gray-800", className)}>
      {children}
    </div>
  );
}

/* ----------  CARD TITLE ---------- */
export function CardTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <h3 className={cn("text-lg font-semibold", className)}>{children}</h3>;
}

/* ----------  CARD DESCRIPTION  (NEW) ---------- */
export function CardDescription({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={cn("text-xs text-gray-400 leading-relaxed", className)}>
      {children}
    </p>
  );
}

/* ----------  CARD CONTENT ---------- */
export function CardContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("p-4 space-y-3", className)}>{children}</div>;
}

/* ----------  BUTTON  (simple utility) ---------- */
export function Button({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      className={cn(
        "w-full bg-white text-black rounded-md py-2 px-4 text-sm font-medium transition",
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-gray-200 active:scale-[0.98]"
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

