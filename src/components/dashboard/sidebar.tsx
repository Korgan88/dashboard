import React from "react";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <div className="dashboard-sidebar w-64 h-screen flex-shrink-0 hidden md:block overflow-y-auto">
      <div className="p-6">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold">LUXAI</span>
        </Link>
      </div>
      <nav className="px-4 py-2">
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard" className="nav-item flex items-center px-4 py-3 text-gray-300 hover:text-white">
              <span>Overview</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/market" className="nav-item flex items-center px-4 py-3 text-gray-300 hover:text-white">
              <span>Analisi di Mercato</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/demographics" className="nav-item flex items-center px-4 py-3 text-gray-300 hover:text-white">
              <span>Demografia</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/competitors" className="nav-item flex items-center px-4 py-3 text-gray-300 hover:text-white">
              <span>Benchmarking Competitor</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/finance" className="nav-item flex items-center px-4 py-3 text-gray-300 hover:text-white">
              <span>Piano Finanziario</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/expansion" className="nav-item flex items-center px-4 py-3 text-gray-300 hover:text-white">
              <span>Strategia di Espansione</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/ai-services" className="nav-item flex items-center px-4 py-3 text-gray-300 hover:text-white">
              <span>Servizi AI</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
