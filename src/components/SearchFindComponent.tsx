import React, { useState } from "react";
import OptionsChart from "./OptionsChart";
import {
  ButtonStyled,
  CaretLeftImage,
  CaretRightandLinkContainer,
  ControlHorizontalScrollDetail,
  HeadingContainer,
  LinkStyle,
  SearchFindContainer,
  SearchFindLinkContainer,
} from "@/styles/indexStyle";
import { useRouter } from "next/router";

type Props = {};

const SearchFindComponent = (props: Props) => {
  const router = useRouter();

  console.log(router.query);
  return (
    <SearchFindContainer>
      <HeadingContainer $applyStyle={false}>
        <ControlHorizontalScrollDetail>
          <CaretRightandLinkContainer>
            <LinkStyle href="/dashboard">
              <CaretLeftImage
                src="/caretright.svg"
                alt="caretrightarrow"
                width={15}
                height={15}
              />
            </LinkStyle>

            <SearchFindLinkContainer>
              <ButtonStyled
                $padding={true}
                $isSelected={"topproducts" === router.query.category}
              >
                <LinkStyle href="/topproducts">Top products</LinkStyle>
              </ButtonStyled>
              <ButtonStyled
                $padding={true}
                $isSelected={"topposts" === router.query.category}
              >
                <LinkStyle href="/topposts">Top posts</LinkStyle>
              </ButtonStyled>
              <ButtonStyled
                $padding={true}
                $isSelected={"topstores" === router.query.category}
              >
                <LinkStyle href="/topstores">Top stores</LinkStyle>
              </ButtonStyled>
            </SearchFindLinkContainer>
          </CaretRightandLinkContainer>
          <OptionsChart isApplyStyle={false} />
        </ControlHorizontalScrollDetail>
      </HeadingContainer>
    </SearchFindContainer>
  );
};

export default SearchFindComponent;
