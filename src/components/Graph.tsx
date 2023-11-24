import { GraphContainer } from "@/styles/GraphStyles";
import React from "react";
import ChartComponent from "./ChartComponent";
import { BoxShadowContainer } from "@/styles/indexStyle";
import Image from "next/image";
import graphImage from "../../public/graph.svg";

type Props = {};

const Graph = (props: Props) => {
  return (
    <BoxShadowContainer>
      <GraphContainer>
        <div style={{ color: "black", padding: "2rem 2rem 1.75rem 2rem" }}>
          Earnings
        </div>
        <Image
          src={graphImage}
          alt="graph"
          style={{ width: "100%", height: "auto" }}
        />
        {/* <ChartComponent /> */}
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
      </GraphContainer>
    </BoxShadowContainer>
  );
};

export default Graph;
