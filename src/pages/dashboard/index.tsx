import React from "react";
import OptionsChart from "@/components/OptionsChart";
import Graph from "@/components/Graph";
import { MainContainer } from "@/styles/indexStyle";
import CardComponent from "@/components/CardComponent";
import { CardsComponentContainer } from "@/styles/CardComponentStyles";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <MainContainer>
      <div className="options of chart">
        <OptionsChart />
      </div>
      <div className="graph">
        <Graph />
      </div>
      <CardsComponentContainer>
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </CardsComponentContainer>
    </MainContainer>
  );
};

export default Dashboard;
