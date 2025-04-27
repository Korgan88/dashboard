"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export function InsightFashionChart() {
  const data = {
    labels: ["Gen Z", "Millennials", "Gen X", "Boomers"],
    datasets: [{
      label: "Engagement AI Insight",
      data: [65,75,50,40],
      borderColor: "var(--accent-primary)",
      backgroundColor: "rgba(0,229,255,0.2)",
      tension: 0.4,
      pointRadius: 4
    }]
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { labels: { color: "var(--text-light)" } },
      tooltip: { backgroundColor: "#222" }
    },
    scales: {
      x: { ticks: { color: "var(--text-light)" }, grid: { color: "#222" } },
      y: { ticks: { color: "var(--text-light)" }, grid: { color: "#222" } }
    }
  };
  return <Line data={data} options={options} />;
}
