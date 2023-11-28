import {
  ColumFlexContainerCard,
  EachCardItemContainer,
  LinkStyleTitleContainer,
  NamePercentTypeContainer,
  OneCardComponent,
  OneContainerTabHeight,
  PostsImageStyled,
  ProductPercentAndType,
  SpanContainer,
} from "@/styles/CardComponentStyles";
import { BoxShadowContainer } from "@/styles/indexStyle";
import { checkIfStringIsUnderCharacter } from "@/utility";
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
      <BoxShadowContainer>
        <OneCardComponent
          $height="433px"
          $overflowY={true}
          $isheightChange={true}
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
              const itemName = checkIfStringIsUnderCharacter(`${item.name}`);
              return (
                <EachCardItemContainer key={item.id}>
                  <NamePercentTypeContainer>
                    <Image
                      src={item.image || defaultProductImage}
                      alt={item.name}
                      width={25}
                      height={25}
                    />
                    <div className="nameAndpercent">
                      <SpanContainer $bold={true}>{itemName}</SpanContainer>
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
                    </div>
                  </NamePercentTypeContainer>
                  <ColumFlexContainerCard>
                    <SpanContainer $bold={true}>SEK {item.price}</SpanContainer>
                    <SpanContainer>CSV {item.cvrPercent}</SpanContainer>
                  </ColumFlexContainerCard>
                </EachCardItemContainer>
              );
            })}
          </>
        </OneCardComponent>
      </BoxShadowContainer>
    );
  }
  if (props.title === "Top posts" && isPostData(props)) {
    return (
      <BoxShadowContainer>
        <OneCardComponent
          $height="433px"
          $overflowY={true}
          $isheightChange={true}
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
              const itemName = checkIfStringIsUnderCharacter(item.name);
              return (
                <EachCardItemContainer key={item.id}>
                  <NamePercentTypeContainer>
                    <PostsImageStyled
                      src={item.image || defaultProductImage}
                      alt={item.name}
                      width={35}
                      height={35}
                    />
                    <OneContainerTabHeight>
                      <SpanContainer $bold={true}>{itemName}</SpanContainer>
                    </OneContainerTabHeight>
                  </NamePercentTypeContainer>
                  <ColumFlexContainerCard>
                    <SpanContainer $bold={true}>SEK {item.price}</SpanContainer>
                  </ColumFlexContainerCard>
                </EachCardItemContainer>
              );
            })}
          </>
        </OneCardComponent>
      </BoxShadowContainer>
    );
  }
  if (props.title === "Top stores" && isStoresData(props)) {
    return (
      <BoxShadowContainer>
        <OneCardComponent
          $height="433px"
          $overflowY={true}
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
              const itemName = checkIfStringIsUnderCharacter(item.name);
              return (
                <EachCardItemContainer
                  key={item.id}
                  $padding="0.625rem 1.2rem;"
                >
                  <NamePercentTypeContainer>
                    <SpanContainer $bold={true}>{itemName}</SpanContainer>
                  </NamePercentTypeContainer>
                  <ColumFlexContainerCard>
                    <SpanContainer $bold={true}>SEK {item.price}</SpanContainer>
                  </ColumFlexContainerCard>
                </EachCardItemContainer>
              );
            })}
          </>
        </OneCardComponent>
      </BoxShadowContainer>
    );
  }
};

export default CardComponent;
