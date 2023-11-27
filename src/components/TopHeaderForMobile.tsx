import { NormalTitleContainer } from "@/styles/CardComponentStyles";
import {
  CaretLeftImage,
  CaretRightandLinkContainer,
  LinkStyle,
} from "@/styles/indexStyle";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  title: string;
};

const TopHeaderForMobile = (props: Props) => {
  const router = useRouter();
  return (
    <NormalTitleContainer>
      <LinkStyle href="/dashboard">
        <CaretLeftImage
          src="/caretright.svg"
          alt="caretrightarrow"
          width={15}
          height={15}
        />
      </LinkStyle>

      <span>{props.title}</span>

      <LinkStyle href="/dashboard">
        <CaretLeftImage src="/cross.svg" alt="cross" width={15} height={15} />
      </LinkStyle>
    </NormalTitleContainer>
  );
};

export default TopHeaderForMobile;
