import React from "react";

import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale, //x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Title
);

type Props = {};

const ChartComponent = (props: Props) => {
  {
    console.log(props, "Varun");
  }
  const data = {
    labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT"],
    datasets: [
      {
        label: "Sales of the Week",
        data: [1, 2, 3, 4, 5, 7, 8, 9],
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "rgb(255, 99, 132)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  return (
    <div>
      {/* {console.log("varun")} */}
      <Line data={data} options={options}></Line>
    </div>
  );
};

export default ChartComponent;

// export async function getServerSideProps() {
//   return {
//     props: {
//       id: Math.random(),
//     },
//   };
// }
