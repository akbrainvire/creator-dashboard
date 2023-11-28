import { NormalTitleContainer } from "@/styles/CardComponentStyles";
import { CaretLeftImage, LinkStyle } from "@/styles/indexStyle";
import React from "react";

type Props = {
  title: string;
  link: string;
  crosslink: string;
};

const TopHeaderForMobile = (props: Props) => {
  return (
    <NormalTitleContainer $marginBottom={false}>
      <LinkStyle href={props.link}>
        <CaretLeftImage
          src="/caretright.svg"
          alt="caretrightarrow"
          width={15}
          height={15}
        />
      </LinkStyle>

      <span>{props.title}</span>

      <LinkStyle href={props.crosslink}>
        <CaretLeftImage src="/cross.svg" alt="cross" width={15} height={15} />
      </LinkStyle>
    </NormalTitleContainer>
  );
};

export default TopHeaderForMobile;
