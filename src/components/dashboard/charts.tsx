"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar, Pie, Radar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend
);

/*═════════════  GRAFICI STATICI  ═════════════*/
export const MarketGrowthChart = () => (
  <div className="flex h-full items-center justify-center">
    <div className="w-full h-64 bg-gradient-to-r from-blue-900 to-blue-600 rounded-lg flex flex-col items-center justify-center">
      <div className="text-xl font-bold text-white mb-2">Crescita del Mercato Luxury</div>
      <div className="text-sm text-white">2025 533 M → 2030 1188 M USD</div>
      <div className="text-lg font-bold text-white mt-2">CAGR 17.4 %</div>
    </div>
  </div>
);

export const GenerationalDistributionChart = () => (
  <div className="grid grid-cols-4 gap-4 w-full h-full items-center">
    {[
      { p: "22", l: "Gen Z", c: "bg-pink-900/50" },
      { p: "38", l: "Millennials", c: "bg-blue-900/50" },
      { p: "25", l: "Gen X", c: "bg-yellow-900/50" },
      { p: "15", l: "Boomers", c: "bg-green-900/50" },
    ].map((v) => (
      <div key={v.l} className={`${v.c} p-4 rounded-lg text-center`}>
        <div className="text-xl font-bold text-white">{v.p}%</div>
        <div className="text-sm text-white">{v.l}</div>
      </div>
    ))}
  </div>
);

/*═════════════  DEMO AI (nuovi)  ═════════════*/
export const InsightFashionChart = () => (
  <Line
    data={{
      labels: ["Gen Z", "Millennials", "Gen X", "Boomers"],
      datasets: [
        {
          label: "Engagement AI Insight",
          data: [65, 75, 50, 40],
          borderColor: "var(--accent-primary)",
          backgroundColor: "rgba(0,229,255,.25)",
          tension: 0.4,
          pointRadius: 4,
        },
      ],
    }}
    options={{
      plugins: { legend: { labels: { color: "var(--text-light)" } }, tooltip: { backgroundColor: "#222" } },
      scales: { x: { ticks: { color: "var(--text-light)" }, grid: { color: "#222" } },
                y: { ticks: { color: "var(--text-light)" }, grid: { color: "#222" } } },
      responsive: true,
    }}
  />
);

export const ProductMatcherChart = () => (
  <Bar
    data={{
      labels: ["Look 1", "Look 2", "Look 3", "Look 4", "Look 5"],
      datasets: [{ label: "Match %", data: [88, 76, 92, 64, 80], backgroundColor: "var(--accent-secondary)" }],
    }}
    options={{
      plugins: { legend: { display: false }, tooltip: { backgroundColor: "#222" } },
      scales: { x: { ticks: { color: "var(--text-light)" }, grid: { color: "#222" } },
                y: { ticks: { color: "var(--text-light)" }, grid: { color: "#222" } } },
      maintainAspectRatio: false,
    }}
  />
);

export const TrendGeneratorChart = () => (
  <Pie
    data={{
      labels: ["Blockchain", "AI/ML", "AR/VR", "Sostenibilità"],
      datasets: [
        {
          data: [28, 42, 18, 12],
          backgroundColor: [
            "var(--accent-primary)",
            "var(--accent-secondary)",
            "#bb86fc",
            "#03dac6",
          ],
        },
      ],
    }}
    options={{ plugins: { legend: { labels: { color: "var(--text-light)" } }, tooltip: { backgroundColor: "#222" } } }}
  />
);

export const AssistantAIChart = () => (
  <Radar
    data={{
      labels: ["Velocità", "Precisione", "Personalizzazione", "Scalabilità", "UX"],
      datasets: [
        {
          label: "Assistant AI",
          data: [85, 90, 80, 75, 88],
          borderColor: "var(--accent-primary)",
          backgroundColor: "rgba(0,229,255,.3)",
          pointBackgroundColor: "var(--accent-secondary)",
        },
      ],
    }}
    options={{
      scales: {
        r: {
          grid: { color: "#222" },
          pointLabels: { color: "var(--text-light)" },
          ticks: { display: false },
        },
      },
      plugins: { legend: { labels: { color: "var(--text-light)" } }, tooltip: { backgroundColor: "#222" } },
    }}
  />
);

/*═════════════  FINANCE (mancanti)  ═════════════*/
export const FinancialProjectionsChart = () => (
  <Bar
    data={{
      labels: ["Ricavi", "Costi", "Profitto"],
      datasets: [
        {
          label: "K CHF",
          data: [900, 390, 510],
          backgroundColor: ["#10b981", "#ef4444", "#3b82f6"],
        },
      ],
    }}
    options={{
      plugins: { legend: { display: false }, tooltip: { backgroundColor: "#222" } },
      scales: { x: { ticks: { color: "var(--text-light)" } }, y: { ticks: { color: "var(--text-light)" } } },
      maintainAspectRatio: false,
    }}
  />
);

export const GrowthScenariosChart = () => (
  <Line
    data={{
      labels: ["2025", "2026", "2027", "2028", "2029", "2030"],
      datasets: [
        {
          label: "Ottimistico",
          data: [0, 35, 78, 125, 190, 280],
          borderColor: "#10b981",
          tension: 0.4,
        },
        {
          label: "Realistico",
          data: [0, 25, 55, 90, 140, 215],
          borderColor: "#3b82f6",
          tension: 0.4,
        },
        {
          label: "Conservativo",
          data: [0, 15, 32, 55, 80, 150],
          borderColor: "#facc15",
          tension: 0.4,
        },
      ],
    }}
    options={{
      plugins: { legend: { labels: { color: "var(--text-light)" } }, tooltip: { backgroundColor: "#222" } },
      scales: { x: { ticks: { color: "var(--text-light)" }, grid: { color: "#222" } },
                y: { ticks: { color: "var(--text-light)" }, grid: { color: "#222" } } },
    }}
  />
);

