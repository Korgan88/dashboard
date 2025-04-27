"use client";
import { Radar } from "react-chartjs-2";

export function AssistantAIChart() {
  const data = {
    labels: ["Velocità","Precisione","Personalizzazione","Scalabilità","UX"],
    datasets: [{
      label: "Assistant AI Score",
      data: [85,90,80,75,88],
      borderColor: "var(--accent-primary)",
      backgroundColor: "rgba(0,229,255,0.3)",
      pointBackgroundColor: "var(--accent-secondary)"
    }]
  };
  const options = {
    scales: {
      r: {
        grid: { color: "#222" },
        pointLabels: { color: "var(--text-light)" },
        ticks: { display: false }
      }
    },
    plugins: {
      tooltip: { backgroundColor: "#222" },
      legend: { labels: { color: "var(--text-light)" } }
    }
  };
  return <Radar data={data} options={options} />;
}
