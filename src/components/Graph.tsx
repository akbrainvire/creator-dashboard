import { GraphContainer } from "@/styles/GraphStyles";
import React from "react";
import ChartComponent from "./ChartComponent";
import { BoxShadowContainer } from "@/styles/indexStyle";

type Props = {};

const Graph = (props: Props) => {
  return (
    <BoxShadowContainer>
      <GraphContainer>
        Graph
        {/* <ChartComponent /> */}
      </GraphContainer>
    </BoxShadowContainer>
  );
};

export default Graph;
