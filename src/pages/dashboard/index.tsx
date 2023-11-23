import React from "react";
import OptionsChart from "@/components/OptionsChart";
import Graph from "@/components/Graph";
import { MainContainer } from "@/styles/indexStyle";
import CardComponent from "@/components/CardComponent";
import { CardsComponentContainer } from "@/styles/CardComponentStyles";

type Props = {};

import data from "../../constants/TopProductData.json";
import postData from "../../constants/TopPostData.json";
import storeData from "../../constants/TopStoresData.json";

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
        <CardComponent data={data} title="Top products" />
        <CardComponent data={postData} title="Top posts" />
        <CardComponent data={storeData} title="Top stores" />
      </CardsComponentContainer>
    </MainContainer>
  );
};

export default Dashboard;
