import {
  BothEarningContainer,
  GraphContainer,
  StyledGraphImage,
} from "@/styles/GraphStyles";
import React, { useEffect, useState } from "react";
import ChartComponent from "./ChartComponent";
import { BoxShadowContainer } from "@/styles/indexStyle";
import graphImage from "../../public/graph.svg";
import useWindowDimension from "../../hooks/useWindowDimension";
import SCEarning from "./SCEarning";
type Props = {
  selectedDate: any;
};

const Graph = (props: Props) => {
  const { data } = useWindowDimension();
  return (
    <BoxShadowContainer $removeBoxShadowOnMobile={false}>
      <GraphContainer>
        {data > 650 ? (
          <div style={{ color: "black", padding: "2rem 2rem 1.75rem 2rem" }}>
            Earnings
          </div>
        ) : (
          ""
        )}
        {/* <StyledGraphImage src={graphImage} alt="graph" /> */}
        <ChartComponent selectedDate={props.selectedDate} />
        <div
          style={{
            color: "black",
            padding: "0 2rem 1.75rem 2rem",
            fontWeight: "600",
            fontSize: "2rem",
          }}
        >
          SEK 2590
        </div>
        {data < 650 ? (
          <BothEarningContainer>
            <SCEarning title="Sales earning" earning="SEK 6625" />
            <SCEarning title="Click earning" earning="SEK 957" />
          </BothEarningContainer>
        ) : (
          ""
        )}
      </GraphContainer>
    </BoxShadowContainer>
  );
};

export default Graph;
