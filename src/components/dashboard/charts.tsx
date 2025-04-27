// src/components/dashboard/charts.tsx
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

// Registriamo tutti i componenti di Chart.js che ci servono
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

// ——————————————————————————————————————————
//        GRAFICI STATICI ESISTENTI
// ——————————————————————————————————————————

export const MarketGrowthChart = () => {
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <div className="w-full h-64 bg-gradient-to-r from-blue-900 to-blue-600 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl font-bold text-white mb-2">
            Crescita del Mercato Luxury
          </div>
          <div className="text-sm text-white">
            2025: 533.39M USD → 2030: 1187.7M USD
          </div>
          <div className="text-lg font-bold text-white mt-2">CAGR 17.4%</div>
        </div>
      </div>
    </div>
  );
};

export const GenerationalDistributionChart = () => {
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <div className="grid grid-cols-4 gap-4 w-full">
        <div className="bg-pink-900/50 p-4 rounded-lg text-center">
          <div className="text-xl font-bold text-white">22%</div>
          <div className="text-sm text-white">Gen Z</div>
        </div>
        <div className="bg-blue-900/50 p-4 rounded-lg text-center">
          <div className="text-xl font-bold text-white">38%</div>
          <div className="text-sm text-white">Millennials</div>
        </div>
        <div className="bg-yellow-900/50 p-4 rounded-lg text-center">
          <div className="text-xl font-bold text-white">25%</div>
          <div className="text-sm text-white">Gen X</div>
        </div>
        <div className="bg-green-900/50 p-4 rounded-lg text-center">
          <div className="text-xl font-bold text-white">15%</div>
          <div className="text-sm text-white">Boomers</div>
        </div>
      </div>
    </div>
  );
};

export const PositioningChart = () => {
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <div className="relative w-full h-64 border border-gray-700 rounded-lg p-4">
        <div className="absolute top-2 left-2 text-xs text-gray-400">
          Esperienza Utente
        </div>
        <div className="absolute bottom-2 right-2 text-xs text-gray-400">
          Innovazione Tecnologica
        </div>

        {/* Assi */}
        <div className="absolute left-0 top-0 w-full h-full flex items-center">
          <div className="w-full h-px bg-gray-700"></div>
        </div>
        <div className="absolute left-0 top-0 w-full h-full flex justify-center">
          <div className="h-full w-px bg-gray-700"></div>
        </div>

        {/* Punti */}
        <div className="absolute" style={{ left: "85%", top: "20%" }}>
          <div
            className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center"
            title="LUXAI"
          >
            <span className="text-xs text-white">LX</span>
          </div>
        </div>
        <div className="absolute" style={{ left: "72%", top: "32%" }}>
          <div
            className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center"
            title="Competitor A"
          >
            <span className="text-xs text-white">A</span>
          </div>
        </div>
        <div className="absolute" style={{ left: "58%", top: "15%" }}>
          <div
            className="w-5 h-5 rounded-full bg-yellow-600 flex items-center justify-center"
            title="Competitor B"
          >
            <span className="text-xs text-white">B</span>
          </div>
        </div>
        <div className="absolute" style={{ left: "87%", top: "47%" }}>
          <div
            className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center"
            title="Competitor C"
          >
            <span className="text-xs text-white">C</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FinancialProjectionsChart = () => {
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <div className="w-full space-y-4">
        {/* Ricavi */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm">Ricavi (K CHF)</span>
            <span className="text-sm text-green-400">900K</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div
              className="bg-green-600 h-2.5 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>
        {/* Costi */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm">Costi (K CHF)</span>
            <span className="text-sm text-red-400">390K</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div
              className="bg-red-600 h-2.5 rounded-full"
              style={{ width: "32%" }}
            ></div>
          </div>
        </div>
        {/* Profitto */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm">Profitto (K CHF)</span>
            <span className="text-sm text-blue-400">510K</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: "43%" }}
            ></div>
          </div>
        </div>
        <div className="text-center mt-4">
          <div className="text-sm text-gray-400">Break-even: Mese 14</div>
          <div className="text-sm text-green-400">ROI: 215% a 24 mesi</div>
        </div>
      </div>
    </div>
  );
};

export const GrowthScenariosChart = () => {
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <div className="w-full space-y-6">
        {/* Ottimistico */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-green-400">
              Scenario Ottimistico
            </span>
            <span className="text-sm text-green-400">+35% annuo</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div
              className="bg-green-600 h-2.5 rounded-full"
              style={{ width: "85%" }}
            ></div>
          </div>
          <div className="text-xs text-gray-400 mt-1">
            ROI: 280% a 24 mesi
          </div>
        </div>
        {/* Realistico */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-blue-400">
              Scenario Realistico
            </span>
            <span className="text-sm text-blue-400">+25% annuo</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: "65%" }}
            ></div>
          </div>
          <div className="text-xs text-gray-400 mt-1">
            ROI: 215% a 24 mesi
          </div>
        </div>
        {/* Conservativo */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-yellow-400">
              Scenario Conservativo
            </span>
            <span className="text-sm text-yellow-400">+15% annuo</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div
              className="bg-yellow-600 h-2.5 rounded-full"
              style={{ width: "45%" }}
            ></div>
          </div>
          <div className="text-xs text-gray-400 mt-1">
            ROI: 150% a 24 mesi
          </div>
        </div>
      </div>
    </div>
  );
};

// ——————————————————————————————————————————
//        NUOVE DEMO AI INTERATTIVE (Chart.js)
// ——————————————————————————————————————————

export const InsightFashionChart = () => {
  const data = {
    labels: ["Gen Z", "Millennials", "Gen X", "Boomers"],
    datasets: [
      {
        label: "Engagement AI Insight",
        data: [65, 75, 50, 40],
        borderColor: "var(--accent-primary)",
        backgroundColor: "rgba(0,229,255,0.2)",
        tension: 0.4,
        pointRadius: 4,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { labels: { color: "var(--text-light)" } },
      tooltip: { backgroundColor: "#222" },
    },
    scales: {
      x: { ticks: { color: "var(--text-light)" }, grid: { color: "#222" } },
      y: { ticks: { color: "var(--text-light)" }, grid: { color: "#222" } },
    },
  };
  return <Line data={data} options={options} />;
};

export const ProductMatcherChart = () => {
  const data = {
    labels: ["Look 1", "Look 2", "Look 3", "Look 4", "Look 5"],
    datasets: [
      {
        label: "Match Confidence %",
        data: [88, 76, 92, 64, 80],
        backgroundColor: "var(--accent-secondary)",
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { backgroundColor: "#222" },
    },
    scales: {
      x: { ticks: { color: "var(--text-light)" }, grid: { color: "#222" } },
      y: { ticks: { color: "var(--text-light)" }, grid: { color: "#222" } },
    },
  };
  return (
    <div style={{ height: 300 }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export const TrendGeneratorChart = () => {
  const data = {
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
  };
  const options = {
    plugins: {
      legend: { labels: { color: "var(--text-light)" } },
      tooltip: { backgroundColor: "#222" },
    },
  };
  return <Pie data={data} options={options} />;
};

export const AssistantAIChart = () => {
  const data = {
    labels: ["Velocità", "Precisione", "Personalizzazione", "Scalabilità", "UX"],
    datasets: [
      {
        label: "Assistant AI Score",
        data: [85, 90, 80, 75, 88],
        borderColor: "var(--accent-primary)",
        backgroundColor: "rgba(0,229,255,0.3)",
        pointBackgroundColor: "var(--accent-secondary)",
      },
    ],
  };
  const options = {
    scales: {
      r: {
        grid: { color: "#222" },
        pointLabels: { color: "var(--text-light)" },
        ticks: { display: false },
      },
    },
    plugins: {
      tooltip: { backgroundColor: "#222" },
      legend: { labels: { color: "var(--text-light)" } },
    },
  };
  return <Radar data={data} options={options} />;
};
