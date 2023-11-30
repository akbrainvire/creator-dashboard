import {
  BothEarningContainer,
  GraphContainer,
  StyledGraphImage,
} from "@/styles/GraphStyles";
import React, { useEffect, useState } from "react";
import ChartComponent from "./ChartComponent";
import { BoxShadowContainer } from "@/styles/indexStyle";
import Image from "next/image";
import graphImage from "../../public/graph.svg";
import useWindowDimension from "../../hooks/useWindowDimension";
import SCEarning from "./SCEarning";
import overallData from "../constants/GraphData.json";

type Props = {
  selectedValue: string;
  selectedDate: any;
  // selectedDate: any;
};

const Graph = (props: Props) => {
  const [graphData, setGraphData] = useState({});
  const [fromTo, setFromTo] = useState<any>([]);

  // console.log(graphData, "graph.tsx");

  useEffect(() => {
    const graphD = overallData.data.filter((item: any) => {
      return item.name === props.selectedValue;
    });
    setGraphData(graphD[0]);

    console.log(graphD, props.selectedValue, "props.selectedVAlue");

    if (props.selectedDate && props.selectedValue == "") {
      console.log("first");
      const valueS = props.selectedDate.split(" ");
      // const findIndexofSecondSpace = valueS.indexOf('-');
      const startDate = valueS[0] + valueS[1];
      const endDate = valueS[3] + valueS[4];
      const date = startDate + " " + endDate;
      // console.log(startDate, endDate, valueS);

      const graphD = overallData.data.filter((item: any) => {
        return item.name === "1stOct 30thNov";
      });

      setGraphData(graphD[0]);

      // if(valueS[1] === "Nov"){
      //   const startIndex = 30;
      //   const setLabels = graphD[0].labels.splice(30 + valueS[0], 30 +  )
      // } else if(valueS[1] === "Oct"){

      // }
      // const indexOfStartDate = graphD[0].labels.indexOf(startDate);
      // const indexOfEndDate = graphD[0].labels.indexOf(endDate);

      // const splicedData = graphD.splice(startDate, )
    }
  }, [props.selectedValue, props.selectedDate]);

  // console.log(graphData, "GraphData");
  const { data } = useWindowDimension();
  console.log(graphData, "graphData");
  return (
    <BoxShadowContainer>
      <GraphContainer>
        {data > 650 ? (
          <div style={{ color: "black", padding: "2rem 2rem 1.75rem 2rem" }}>
            Earnings
          </div>
        ) : (
          ""
        )}
        {/* <StyledGraphImage src={graphImage} alt="graph" /> */}
        <ChartComponent
          selectedValue={graphData}
          selectedDate={props.selectedDate}
        />
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
