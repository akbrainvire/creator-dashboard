import React, { useState } from "react";
import Button from "./Button";
import { buttons } from "../constants/index";
import { HeadingContainer } from "@/styles/allStyles";
import DatePickerComponent from "./DatePickerComponent";
type Props = {};

const OptionsChart = (props: Props) => {
  const [selected, setSelected] = useState("");
  const [show, setShow] = useState(false);

  const onChangeHandler = (value: string) => {
    console.log(value);
    setSelected(value);
  };

  return (
    <HeadingContainer>
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
      <DatePickerComponent />
    </HeadingContainer>
  );
};

export default OptionsChart;
