import React, { use, useEffect, useState } from "react";

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

type Props = {
  selectedValue: any;
  selectedDate: any;
};

const ChartComponent = (props: Props) => {
  //   const [graphDataset, setGraphDataSet] = useState(props.selectedValue.data);
  //   const [graphLabeldata, setGraphLabeldata] = useState(
  //     props.selectedValue.labels
  //   );

  // console.log(props.selectedValue, "selectedValue");
  // useEffect(() => {
  //   // console.log(props.selectedDate);

  //   if (props.selectedDate) {
  //     const valueS = props.selectedDate.split(" ");
  //     // const findIndexofSecondSpace = valueS.indexOf('-');
  //     const startDate = valueS[0] + valueS[1];
  //     const endDate = valueS[3] + valueS[4];
  //     const date = startDate + " " + endDate;
  //     // console.log(startDate, endDate, valueS);

  //     if (valueS[1] === "Nov") {
  //       const setLabels = props.selectedValue.labels.splice(
  //         30 + valueS[0],
  //         30 + valueS[3]
  //       );
  //       const setData = props.selectedValue.data.splice(
  //         30 + valueS[0],
  //         30 + valueS[3]
  //       );

  //       setGraphDataSet(setData);
  //       setGraphLabeldata(setLabels);
  //     } else if (valueS[1] === "Oct") {
  //       const setLabels = props.selectedValue.labels.splice(
  //         valueS[0],
  //         valueS[3]
  //       );
  //       const setData = props.selectedValue.data.splice(valueS[0], valueS[3]);

  //       setGraphDataSet(setData);
  //       setGraphLabeldata(setLabels);
  //     }
  //   }
  //   // const indexOfStartDate = graphD[0].labels.indexOf(startDate);
  //   // const indexOfEndDate = graphD[0].labels.indexOf(endDate);

  //   // const splicedData = graphD.splice(startDate, )
  // }, [props.selectedDate]);
  // console.log(graphDataset, graphLabeldata);
  const data = {
    labels: props.selectedValue.labels,
    datasets: [
      {
        label: "Sales of the Week",
        data: props.selectedValue.data,
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "rgb(255, 99, 132)",
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: false, // Hide x-axis
      },
      y: {
        display: false, // Hide y-axis
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false, // Hide the title
      },
    },
    maintainAspectRatio: false,
    height: 150,
  };

  return (
    <div style={{ transition: "none", padding: "1.5rem 0" }}>
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
