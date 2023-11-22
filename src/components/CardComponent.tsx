import { OneCardComponent } from "@/styles/CardComponentStyles";
import { BoxShadowContainer } from "@/styles/indexStyle";
import React from "react";

type Props = {};

const CardComponent = (props: Props) => {
  return (
    <BoxShadowContainer>
      <OneCardComponent>CardComponent</OneCardComponent>
    </BoxShadowContainer>
  );
};

export default CardComponent;
