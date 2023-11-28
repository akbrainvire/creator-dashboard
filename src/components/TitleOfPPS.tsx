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
  return (
    <>
      {props.show ? (
        data > 426 ? (
          ""
        ) : (
          <TopHeaderForMobile title={props.title} link={"/"} crosslink={"/"} />
        )
      ) : data > 1024 ? (
        <NormalTitleContainer $marginBottom={true}>
          <SpanContainer $bold={true}>{props.title}</SpanContainer>
        </NormalTitleContainer>
      ) : (
        <TopHeaderForMobile
          title={props.title}
          link={"/dashboard"}
          crosslink={"/dashboard"}
        />
      )}
    </>
  );
};

export default TitleOfPPS;
