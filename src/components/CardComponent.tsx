import {
  ColumFlexContainerCard,
  EachCardItemContainer,
  LinkStyleTitleContainer,
  NamePercentContainer,
  NamePercentTypeContainer,
  OneCardComponent,
  OneContainerTabHeight,
  ImageStyled,
  ProductPercentAndType,
  SpanContainer,
} from "@/styles/CardComponentStyles";
import Image from "next/image";
import React from "react";
import defaultProductImage from "../../public/defaultProductImage.png";
import { Data } from "@/types";
import useWindowDimension from "../../hooks/useWindowDimension";

interface PostDataProps {
  data: Data[];
  title: string;
}

interface StoresDataProps {
  data: Data[];
  title: string;
}

interface ProductDataProps {
  data: Data[];
  title: string;
}

type PropsData = StoresDataProps | PostDataProps | ProductDataProps;

////////////TYPE GUARD/////////////////
const isString = (value: any): value is string =>
  typeof value === "string" || value === undefined;

const isPostData = (data: any): data is PostDataProps => {
  return isString(data.data.length > 0 ? data.data[0]?.image : null);
};

const isStoresData = (data: any): data is StoresDataProps => {
  // console.log(data);
  return isString(data.data.length > 0 ? data.data[0]?.image : null);
};

const isProductData = (data: any): data is ProductDataProps => {
  return isString(data.data.length > 0 ? data.data[0]?.image : null);
};

const CardComponent = (props: PropsData) => {
  const { data } = useWindowDimension();
  if (props.title === "Top products" && isProductData(props)) {
    return (
      // <BoxShadowContainer>
      <OneCardComponent
        $height="433px"
        $overflowY={true}
        $isheightChange={true}
        $flexBasis={data > 983 ? false : true}
      >
        <>
          <LinkStyleTitleContainer href="/topproducts">
            <SpanContainer $bold={true}>{props.title}</SpanContainer>
            <Image
              src="/caretright.svg"
              alt="caretrightarrow"
              width={20}
              height={16}
            />
          </LinkStyleTitleContainer>

          {props.data.map((item: Data) => {
            const itemName = `${item.name}`;
            return (
              <EachCardItemContainer key={item.id}>
                <NamePercentTypeContainer
                  $width="7%"
                  $mobileW="7%"
                  $applyTWidth={true}
                >
                  <ImageStyled
                    src={item.image || defaultProductImage}
                    alt={item.name}
                    width={25}
                    height={25}
                  />
                </NamePercentTypeContainer>
                <NamePercentContainer $width="68%">
                  <OneContainerTabHeight $width="100%">
                    <SpanContainer
                      $bold={true}
                      $applyItemNameStyle={true}
                      $widthWrap={true}
                    >
                      {itemName}
                    </SpanContainer>
                  </OneContainerTabHeight>
                  <ProductPercentAndType>
                    <SpanContainer
                      $background="#f4f0ec"
                      $bold={true}
                      $padding={true}
                    >
                      {item.percent + "%"}
                    </SpanContainer>
                    <SpanContainer>{" " + item.type}</SpanContainer>
                  </ProductPercentAndType>
                </NamePercentContainer>

                <ColumFlexContainerCard $width="10%">
                  <SpanContainer $bold={true} $nowrap={true}>
                    SEK {item.price}
                  </SpanContainer>
                  <SpanContainer $nowrap={true}>
                    CSV {item.cvrPercent}
                  </SpanContainer>
                </ColumFlexContainerCard>
              </EachCardItemContainer>
            );
          })}
        </>
      </OneCardComponent>
    );
  }
  if (props.title === "Top posts" && isPostData(props)) {
    return (
      <OneCardComponent
        $height="433px"
        $overflowY={true}
        $isheightChange={true}
        $flexBasis={data > 983 ? false : true}
      >
        <>
          <LinkStyleTitleContainer href="/topposts">
            <SpanContainer $bold={true}>{props.title}</SpanContainer>
            <Image
              src="/caretright.svg"
              alt="caretrightarrow"
              width={20}
              height={16}
            />
          </LinkStyleTitleContainer>
          {props.data.map((item) => {
            const itemName = item.name;
            return (
              <EachCardItemContainer key={item.id}>
                <NamePercentTypeContainer
                  $width="15%"
                  $mobileW="7%"
                  $applyTWidth={true}
                >
                  <ImageStyled
                    src={item.image || defaultProductImage}
                    alt={item.name}
                    width={35}
                    height={35}
                  />
                </NamePercentTypeContainer>
                <OneContainerTabHeight $width="70%">
                  <SpanContainer
                    $bold={true}
                    $applyItemNameStyle={true}
                    $widthWrap={true}
                  >
                    {itemName}
                  </SpanContainer>
                </OneContainerTabHeight>

                <ColumFlexContainerCard $width="15%">
                  <SpanContainer $bold={true} $nowrap={true}>
                    SEK {item.price}
                  </SpanContainer>
                </ColumFlexContainerCard>
              </EachCardItemContainer>
            );
          })}
        </>
      </OneCardComponent>
    );
  }
  if (props.title === "Top stores" && isStoresData(props)) {
    return (
      // <BoxShadowContainer>
      <OneCardComponent
        $height="433px"
        $overflowY={true}
        $flexBasis={data > 983 ? false : true}
        $isheightChange={true}
      >
        <>
          <LinkStyleTitleContainer href="/topstores">
            <SpanContainer $bold={true}>{props.title}</SpanContainer>
            <Image
              src="/caretright.svg"
              alt="caretrightarrow"
              width={20}
              height={16}
            />
          </LinkStyleTitleContainer>
          {props.data.map((item) => {
            const itemName = item.name;
            return (
              <EachCardItemContainer key={item.id}>
                <OneContainerTabHeight $width="80%">
                  <SpanContainer
                    $bold={true}
                    $applyItemNameStyle={true}
                    $widthWrap={true}
                  >
                    {itemName}
                  </SpanContainer>
                </OneContainerTabHeight>
                <ColumFlexContainerCard $width="20%">
                  <SpanContainer $bold={true} $nowrap={true}>
                    SEK {item.price}
                  </SpanContainer>
                </ColumFlexContainerCard>
              </EachCardItemContainer>
            );
          })}
        </>
      </OneCardComponent>
    );
  }
};

export default CardComponent;
