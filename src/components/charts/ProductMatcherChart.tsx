"use client";
import { Bar } from "react-chartjs-2";

export function ProductMatcherChart() {
  const data = {
    labels: ["Look 1","Look 2","Look 3","Look 4","Look 5"],
    datasets: [{
      label: "Match Confidence %",
      data: [88,76,92,64,80],
      backgroundColor: "var(--accent-secondary)"
    }]
  };
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { backgroundColor: "#222" }
    },
    scales: {
      x: { ticks: { color: "var(--text-light)" }, grid: { color: "#222" } },
      y: { ticks: { color: "var(--text-light)" }, grid: { color: "#222" } }
    }
  };
  return <div style={{ height: 300 }}><Bar data={data} options={options} /></div>;
}
