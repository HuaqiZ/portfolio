import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Work and School Experience",
    },
  },
};

const labels = ["2018-2022", "2022-2023"];

const data = {
  labels,
  datasets: [
    {
      label: "School",
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data: [4],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Work",
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data: [1, 2],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function Experience() {
  return <Bar options={options} data={data} />;
}

export default Experience;
