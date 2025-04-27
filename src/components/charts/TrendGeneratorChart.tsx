"use client";
import { Pie } from "react-chartjs-2";

export function TrendGeneratorChart() {
  const data = {
    labels: ["Blockchain","AI/ML","AR/VR","Sostenibilità"],
    datasets: [{
      data: [28,42,18,12],
      backgroundColor: [
        "var(--accent-primary)",
        "var(--accent-secondary)",
        "#bb86fc",
        "#03dac6"
      ]
    }]
  };
  const options = {
    plugins: {
      legend: { labels: { color: "var(--text-light)" } },
      tooltip: { backgroundColor: "#222" }
    }
  };
  return <Pie data={data} options={options} />;
}
