import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import format from "date-fns/format";

import "react-datepicker/dist/react-datepicker.css";
import { DatePickerContainer } from "@/styles/indexStyle";
type Props = {
  selectValueFromtoTo: string;
};

const DatePickerComponent = ({ selectValueFromtoTo }: Props) => {
  var date = new Date();
  var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const [startDate, setStartDate] = useState(firstDay);
  const [endDate, setEndDate] = useState(lastDay);

  let calculateValue =
    format(startDate, "do LLL") +
    " - " +
    (endDate ? format(endDate, "do LLL") : +"");
  const [calculatedDate, setCalculatedDate] = useState(calculateValue);

  useEffect(() => {
    if (selectValueFromtoTo === "Yesterday") {
      var yesterday = new Date(Date.now() - 864e5);
      setStartDate(yesterday);
      setEndDate(yesterday);
      setCalculatedDate(() => {
        let returnDate =
          format(yesterday, "do LLL") + " - " + format(yesterday, "do LLL");
        return returnDate;
      });
    } else if (selectValueFromtoTo === "This Week") {
      var curr = new Date();
      var firstdayWeek = new Date(curr.setDate(curr.getDate() - curr.getDay()));
      var lastdayWeek = new Date(
        curr.setDate(curr.getDate() - curr.getDay() + 6)
      );

      setStartDate(firstdayWeek);
      setEndDate(lastdayWeek);
      setCalculatedDate(() => {
        let returnDate =
          format(firstdayWeek, "do LLL") +
          " - " +
          format(lastdayWeek, "do LLL");
        return returnDate;
      });
    } else if (selectValueFromtoTo === "Last Week") {
      var curr = new Date();
      var firstdayWeek = new Date(
        curr.setDate(curr.getDate() - curr.getDay() - 7)
      );
      var lastdayWeek = new Date(
        curr.setDate(curr.getDate() - curr.getDay() + 6)
      );

      setStartDate(firstdayWeek);
      setEndDate(lastdayWeek);
      setCalculatedDate(() => {
        let returnDate =
          format(firstdayWeek, "do LLL") +
          " - " +
          format(lastdayWeek, "do LLL");
        return returnDate;
      });
    } else if (selectValueFromtoTo === "Last Month") {
      var date = new Date();
      var firstDay = new Date(date.getFullYear(), date.getMonth() - 1, 1);
      var lastDay = new Date(date.getFullYear(), date.getMonth(), 0);

      setStartDate(firstDay);
      setEndDate(lastDay);
      setCalculatedDate(() => {
        let returnDate =
          format(firstDay, "do LLL") + " - " + format(lastDay, "do LLL");
        return returnDate;
      });
    }
  }, [selectValueFromtoTo]);

  return (
    <DatePickerContainer
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      value={calculatedDate}
      onChange={(update: any) => {
        const d = new Date(update);
        console.log(update, "update");
        setStartDate(update[0]);
        setEndDate(update[1]);

        setCalculatedDate(() => {
          const startDate = new Date(update[0]);
          const endDate = new Date(update[1]);
          let returnDate =
            format(startDate, "do LLL") + " - " + format(endDate, "do LLL");
          return returnDate;
        });
        // setDateRange(update);
      }}
      // value={calculatedDate}
    />
  );
};

export default DatePickerComponent;
