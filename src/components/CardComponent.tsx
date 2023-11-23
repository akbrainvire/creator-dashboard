import {
  ColumFlexContainerCard,
  EachCardItemContainer,
  NamePercentTypeContainer,
  OneCardComponent,
  SpanContainer,
  Title,
} from "@/styles/CardComponentStyles";
import { BoxShadowContainer } from "@/styles/indexStyle";
import { checkIfStringIsUnderCharacter } from "@/utility";
import Image from "next/image";
import React from "react";

interface Data {
  id: number;
  name: string;
  image?: string;
  price: number;
  type?: string;
  percent?: number;
  cvrPercent?: number;
}

interface PostDataProps {
  data: { id: number; name: string; image: string; price: number }[];
  title: string;
}

interface StoresDataProps {
  data: { id: number; name: string; price: number }[];
  title: string;
}

interface ProductDataProps {
  data: Data[];
  title: string;
}

type PropsData = StoresDataProps | PostDataProps | ProductDataProps;

const CardComponent = (props: PropsData) => {
  if (props.title === "Top products") {
    return (
      <BoxShadowContainer>
        <OneCardComponent>
          <>
            <Title>
              <SpanContainer $bold={true}>{props.title}</SpanContainer>
              <Image
                src="/caretright.svg"
                alt="caretrightarrow"
                width={25}
                height={25}
              />
            </Title>
            {props.data.map((item: Data) => {
              const itemName = checkIfStringIsUnderCharacter(`${item.name}`);
              return (
                <EachCardItemContainer key={item.id}>
                  <NamePercentTypeContainer>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={25}
                      height={25}
                    />
                    <div className="nameAndpercent">
                      <SpanContainer $bold={true}>{itemName}</SpanContainer>
                      <div className="percentandtype">
                        <SpanContainer
                          $background="#f4f0ec"
                          $bold={true}
                          $padding={true}
                        >
                          {item.percent + "%"}
                        </SpanContainer>
                        <SpanContainer>{" " + item.type}</SpanContainer>
                      </div>
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
  if (props.title === "Top posts") {
    return (
      <BoxShadowContainer>
        <OneCardComponent>
          <>
            <Title>
              <SpanContainer $bold={true}>{props.title}</SpanContainer>
              <Image
                src="/caretright.svg"
                alt="caretrightarrow"
                width={25}
                height={25}
              />
            </Title>
            {props.data.map((item) => {
              const itemName = checkIfStringIsUnderCharacter(item.name);
              return (
                <EachCardItemContainer key={item.id}>
                  <NamePercentTypeContainer>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={25}
                      height={25}
                    />
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
  if (props.title === "Top stores") {
    return (
      <BoxShadowContainer>
        <OneCardComponent>
          <>
            <Title>
              <SpanContainer $bold={true}>{props.title}</SpanContainer>
              <Image
                src="/caretright.svg"
                alt="caretrightarrow"
                width={25}
                height={25}
              />
            </Title>
            {props.data.map((item) => {
              const itemName = checkIfStringIsUnderCharacter(item.name);
              return (
                <EachCardItemContainer key={item.id}>
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
