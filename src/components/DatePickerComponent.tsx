import React, { useEffect, useState } from "react";
import format from "date-fns/format";

import "react-datepicker/dist/react-datepicker.css";
import {
  CaretLeftImage,
  DatePickerContainer,
  DatePickerCustomHeader,
  DatePickerWrapper,
} from "@/styles/indexStyle";
import Image from "next/image";
type Props = {
  selectValueFromtoTo: string;
  getSelectedDate: (value: any, value2: any) => void;
  doesDateChange: () => void;
};

const DatePickerComponent = ({
  selectValueFromtoTo,
  getSelectedDate,
  doesDateChange,
}: Props) => {
  var date = new Date();
  var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const [datee, setDate] = useState({
    firstDay,
    lastDay,
  });

  useEffect(() => {
    const updateDateRange = (start: any, end: any) => {
      console.log(start, end, "start-end");
      setDate((prevDate) => ({
        ...prevDate,
        firstDay: start,
        lastDay: end,
      }));
    };

    switch (selectValueFromtoTo) {
      case "Yesterday": {
        //for demo purpose only

        // const currentDate = new Date();

        // Calculate the date of yesterday
        // const dayBeforeYesterday = new Date(currentDate);
        // dayBeforeYesterday.setDate(currentDate.getDate() - 2);
        // const yesterday = new Date(Date.now() - 864e5);

        // updateDateRange(yesterday, currentDate);
        // break;

        //real code:
        const yesterday = new Date(Date.now() - 864e5);
        updateDateRange(yesterday, yesterday);
        break;
      }
      case "This Week": {
        const curr = new Date();
        const firstdayWeek = new Date(
          curr.setDate(curr.getDate() - curr.getDay())
        );
        const lastdayWeek = new Date(
          curr.setDate(curr.getDate() - curr.getDay() + 6)
        );
        updateDateRange(firstdayWeek, lastdayWeek);
        break;
      }
      case "Last Week": {
        const curr = new Date();
        const firstdayWeek = new Date(
          curr.setDate(curr.getDate() - curr.getDay() - 7)
        );
        const lastdayWeek = new Date(
          curr.setDate(curr.getDate() - curr.getDay() + 6)
        );
        updateDateRange(firstdayWeek, lastdayWeek);
        break;
      }
      case "Last Month": {
        const date = new Date();
        const firstDay = new Date(date.getFullYear(), date.getMonth() - 1, 1);
        const lastDay = new Date(date.getFullYear(), date.getMonth(), 0);
        updateDateRange(firstDay, lastDay);
        break;
      }
      default:
    }
  }, [selectValueFromtoTo]);

  const renderCustomHeader = ({ date, decreaseMonth, increaseMonth }: any) => {
    return (
      <DatePickerCustomHeader>
        <div onClick={decreaseMonth}>
          <CaretLeftImage
            src="/caretright.svg"
            width={15}
            height={15}
            alt="Left"
          />
        </div>
        <div className="custom-month">{format(date, "MMMM")}</div>
        <div onClick={increaseMonth}>
          <Image
            src="/caretright.svg"
            alt="caretrightarrow"
            width={15}
            height={15}
          />
        </div>
      </DatePickerCustomHeader>
    );
  };

  useEffect(() => {
    getSelectedDate(datee.firstDay, datee.lastDay);
  }, [datee.firstDay, datee.lastDay, doesDateChange, getSelectedDate]);

  return (
    <DatePickerWrapper>
      <DatePickerContainer
        selectsRange={true}
        startDate={datee.firstDay}
        endDate={datee.lastDay}
        value={`${format(datee.firstDay, "do LLL")} - ${
          datee.lastDay ? format(datee.lastDay, "do LLL") : ""
        }`}
        formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 3)}
        renderCustomHeader={renderCustomHeader}
        onChange={(update: any) => {
          setDate({
            firstDay: update[0],
            lastDay: update[1],
          });
        }}
      />
    </DatePickerWrapper>
  );
};

export default DatePickerComponent;
