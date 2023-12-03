import React, { Fragment, useEffect, useState } from "react";
import OptionsChart from "./OptionsChart";
import Graph from "./Graph";

type Props = {};

const GraphAndHeader = (props: Props) => {
  var date = new Date();
  const [startDate, setStartDate] = useState(
    new Date(date.getFullYear(), date.getMonth(), 1)
  );
  const [endDate, setendDate] = useState(
    new Date(date.getFullYear(), date.getMonth() + 1, 0)
  );

  const [selectedDate, setSelectedDate] = useState<any>({
    startDate,
    endDate,
  });

  const getSelectedDate = (startDate: any, endDate: any) => {
    console.log(startDate, endDate);
    setStartDate(startDate);
    setendDate(endDate);
  };

  useEffect(() => {
    setSelectedDate((prev: any) => {
      return { ...prev, startDate, endDate };
    });
  }, [endDate, startDate]);
  return (
    <Fragment>
      <div className="options of chart">
        <OptionsChart
          isApplyStyle={false}
          getSelectedDateValue={getSelectedDate}
        />
      </div>
      <div className="graph">
        <Graph selectedDate={selectedDate} />
      </div>
    </Fragment>
  );
};

export default GraphAndHeader;
