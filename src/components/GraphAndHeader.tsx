import React, { Fragment, useState } from "react";
import OptionsChart from "./OptionsChart";
import Graph from "./Graph";

type Props = {};

const GraphAndHeader = (props: Props) => {
  const [selectedvalue, setSelectedValue] = useState<any>("This Month");
  const [selectedDate, setSelectedDate] = useState<any>();

  const getSelected = (value: any) => {
    setSelectedValue(value);
  };

  const getSelectedDate = (value: any) => {
    console.log(value);

    setSelectedDate(value);
    // setFromTo([startDate, endDate]);
  };
  //   console.log(selectedvalue);
  return (
    <Fragment>
      <div className="options of chart">
        <OptionsChart
          isApplyStyle={false}
          getSelectedValue={getSelected}
          getSelectedDateValue={getSelectedDate}
        />
      </div>
      <div className="graph">
        <Graph selectedValue={selectedvalue} selectedDate={selectedDate} />
      </div>
    </Fragment>
  );
};

export default GraphAndHeader;
