import React, { useEffect, useState } from "react";
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
import useWindowDimension from "../../hooks/useWindowDimension";

type Props = {};

const SearchFindComponent = (props: Props) => {
  // const { height, width } = useWindowDimensions();
  const router = useRouter();
  const { data } = useWindowDimension();

  console.log(router.query);
  return (
    <SearchFindContainer>
      <HeadingContainer
        $applyStyle={false}
        $applyPadding={false}
        $changeMargin={data > 1024 ? true : false}
      >
        <ControlHorizontalScrollDetail>
          {data > 1024 ? (
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
          ) : (
            ""
          )}
          <OptionsChart isApplyStyle={false} />
        </ControlHorizontalScrollDetail>
      </HeadingContainer>
    </SearchFindContainer>
  );
};

export default SearchFindComponent;
