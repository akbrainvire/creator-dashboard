import React, { use, useEffect, useState } from "react";
import graphData from "../constants/GraphDataNov.json";

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
import { LineGraphContainer } from "@/styles/GraphStyles";

ChartJS.register(
  LineElement,
  CategoryScale, //x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Title
);

type Props = {
  selectedDate: any;
};

const ChartComponent = (props: Props) => {
  const [graphDataset, setGraphDataSet] = useState(graphData);

  useEffect(() => {
    if (props.selectedDate.startDate && props.selectedDate.endDate) {
      // console.log(stringStart.indexOf("-"), typeof stringEnd);

      const startDatee = new Date(props.selectedDate.startDate);
      const endDatee = new Date(props.selectedDate.endDate);

      const filtered = graphData.filter((item) => {
        // const date = item.date;
        // const split = date.indexOf("-");
        // const splitEnd = stringEnd.indexOf("-");
        // const splitStart = stringStart.indexOf("-");
        // let data = date.slice(0, split);
        // let start = stringStart.slice(0, splitStart);
        // let end = stringEnd.slice(0, splitEnd);

        // let startMon = stringStart.slice(splitStart + 1, splitStart + 2);
        // let endMon = stringEnd.slice(splitEnd + 1, splitEnd + 2);
        // console.log(data, start, end, "data");
        // console.log(data >= start && date <= end);
        // console.log(graphDataset, " graphdataset");
        // if (data >= start && date <= end) {
        //   return data >= start && date <= end;
        // }

        // return;

        function convertDateFormat(dateString: string) {
          const [day, month, year] = dateString.split("-");
          return `${year}-${month}-${day}`;
        }
        const currentDate = new Date(convertDateFormat(item.date));
        console.log(
          currentDate >= startDatee && currentDate <= endDatee,
          console.log(startDatee),
          console.log(endDatee),
          console.log(currentDate),
          "currentDate"
        );
        //Testing code
        // I have to use this to get the yesterday value in Graph
        const oneDayBefore = new Date(startDatee);
        oneDayBefore.setDate(startDatee.getDate() - 1);

        const oneDayAfter = new Date(endDatee);
        oneDayAfter.setDate(endDatee.getDate() + 1);

        return currentDate >= oneDayBefore && currentDate <= oneDayAfter;

        //Main Code
        // return currentDate >= startDatee && currentDate <= endDatee;
      });
      console.log(filtered, "filtered");
      setGraphDataSet(filtered);
    }
  }, [props.selectedDate]);

  const data = {
    labels: graphDataset.map((item) => item.date),
    datasets: [
      {
        label: "Earnings",
        data: graphDataset.map((item) => item.value),
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
        beginAtZero: true,
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
    <LineGraphContainer>
      <Line data={data} options={options}></Line>
    </LineGraphContainer>
  );
};

export default ChartComponent;
