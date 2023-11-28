import { SpanContainer } from "@/styles/CardComponentStyles";
import { SCEarningBoxContainer } from "@/styles/GraphStyles";
import React from "react";

type Props = {
  title: string;
  earning: string;
};

const SCEarning = (props: Props) => {
  return (
    <SCEarningBoxContainer>
      <SpanContainer $bold={true}>{props.title}</SpanContainer>
      <SpanContainer $bold={true}>{props.earning}</SpanContainer>
    </SCEarningBoxContainer>
  );
};

export default SCEarning;
