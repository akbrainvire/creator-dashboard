import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { MonthByNumber } from "@/constants";

import "react-datepicker/dist/react-datepicker.css";
import { getMonthName } from "@/utility";
type Props = {};

const DatePickerComponent = (props: Props) => {
  var date = new Date();
  var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const [dateRange, setDateRange] = useState([firstDay, lastDay]);
  const [startDate, endDate]: any = dateRange;

  console.log(startDate, endDate?.toLocaleDateString());

  const month = getMonthName(date.getMonth()).slice(0, 3);
  return (
    <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update: any) => {
        const d = new Date(update).toLocaleDateString("fr-FR");
        console.log(d);
        // console.log(update);
        setDateRange(update);
      }}
    />
  );
};

export default DatePickerComponent;
