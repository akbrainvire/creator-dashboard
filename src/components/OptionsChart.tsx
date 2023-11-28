import React, { useState } from "react";
import Button from "./Button";
import { buttons } from "../constants/index";
import { HeadingContainer } from "@/styles/indexStyle";
import DatePickerComponent from "./DatePickerComponent";
import useWindowDimension from "../../hooks/useWindowDimension";
// import RangeDatePicker from "./RangeDatePicker";
type Props = {
  isApplyStyle: boolean;
};

const OptionsChart = (props: Props) => {
  const [selected, setSelected] = useState("");
  const [show, setShow] = useState(false);
  const { data } = useWindowDimension();

  const onChangeHandler = (value: string) => {
    if (value == "") console.log(value);
    setSelected(value);
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
      <DatePickerComponent selectValueFromtoTo={selected} />
      {/* <RangeDatePicker /> */}
    </HeadingContainer>
  );
};

export default OptionsChart;
