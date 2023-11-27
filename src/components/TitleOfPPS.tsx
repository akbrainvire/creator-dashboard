import {
  NormalTitleContainer,
  SpanContainer,
} from "@/styles/CardComponentStyles";
import React from "react";
import useWindowDimension from "../../hooks/useWindowDimension";
import TopHeaderForMobile from "./TopHeaderForMobile";

type Props = {
  title: string;
  show?: boolean;
};

const TitleOfPPS = (props: Props) => {
  const { data } = useWindowDimension();
  console.log(data);
  return (
    <>
      {props.show ? (
        data > 425 ? (
          ""
        ) : (
          <TopHeaderForMobile title={props.title} />
        )
      ) : data > 1024 ? (
        <NormalTitleContainer>
          <SpanContainer $bold={true}>{props.title}</SpanContainer>
        </NormalTitleContainer>
      ) : (
        <TopHeaderForMobile title={props.title} />
      )}
    </>
  );
};

export default TitleOfPPS;
