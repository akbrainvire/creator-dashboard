import OptionsChart from "@/components/OptionsChart";
import React from "react";

type Props = {};

const EarningChart = (props: Props) => {
  return (
    <>
      <div className="options of chart">
        <OptionsChart />
      </div>
      <div className="graph"></div>
    </>
  );
};

export default EarningChart;
