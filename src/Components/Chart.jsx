import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";

const fillGradient = {
  fill: true,
  backgroundColor: "rgba(90,10,255, 0.5)",
  gradient: {
    id: "fillGradient",
  },
};

const labels = ["Views", "Total Views", "Post Shared", "Total Earnings "];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Your Graph",
      data: [30, 20, 40, 20],
      ...fillGradient,
      tension: 0.4,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  return (
    <div style={{ width: "100%", height: "300px" }}>
      <Line
        data={data}
        options={options}
        className="shadow-lg shadow-slate-200"
      />
    </div>
  );
};

export default Chart;
