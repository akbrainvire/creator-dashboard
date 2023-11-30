import React, { useState } from "react";
import Button from "./Button";
import { buttons } from "../constants/index";
import { HeadingContainer } from "@/styles/indexStyle";
import DatePickerComponent from "./DatePickerComponent";
import useWindowDimension from "../../hooks/useWindowDimension";
import format from "date-fns/format";
// import RangeDatePicker from "./RangeDatePicker";
type Props = {
  isApplyStyle: boolean;
  getSelectedValue: (value: string) => void;
  getSelectedDateValue: (value: any) => void;
};

const OptionsChart = (props: Props) => {
  const [selected, setSelected] = useState("");
  const [selectedDate, setSelectedDate] = useState<any>([]);
  const { data } = useWindowDimension();

  const onChangeHandler = (value: string) => {
    if (value == "") console.log(value);
    setSelected(value);
  };

  props.getSelectedValue(selected);

  const getSelectedDate = (dateSelected: any) => {
    // console.log(dateSelected);
    // props.getSelectedValue(dateSelected);

    props.getSelectedDateValue(dateSelected);
    // setSelectedDate([format(startDate, "do LLL"), format(endDate, "do LLL")]);
  };

  const doesDateChange = () => {
    setSelected("");
  };

  return (
    <HeadingContainer
      $applyStyle={props.isApplyStyle}
      $applyPadding={data < 425 ? true : false}
    >
      {buttons.map((buttonDetails: any, index: number) => {
        return (
          <Button
            key={index}
            name={buttonDetails.name}
            id={buttonDetails.id}
            onChangeHandler={onChangeHandler}
            currentSelectedValue={selected}
          />
        );
      })}
      <DatePickerComponent
        selectValueFromtoTo={selected}
        getSelectedDate={getSelectedDate}
        doesDateChange={doesDateChange}
      />
      {/* <RangeDatePicker /> */}
    </HeadingContainer>
  );
};

export default OptionsChart;
