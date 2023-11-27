import React from "react";
import OptionsChart from "@/components/OptionsChart";
import Graph from "@/components/Graph";
import { MainContainer } from "@/styles/indexStyle";
import CardComponent from "@/components/CardComponent";
import { CardsComponentContainer } from "@/styles/CardComponentStyles";
import { Data } from "@/types";
import TitleOfPPS from "@/components/TitleOfPPS";

type Props = {
  productData: Data[];
  postData: Data[];
  storesData: Data[];
};

const Dashboard = (props: Props) => {
  return (
    <MainContainer>
      <TitleOfPPS title="My dashboard" show={true} />
      <div className="options of chart">
        <OptionsChart isApplyStyle={true} />
      </div>
      <div className="graph">
        <Graph />
      </div>
      <CardsComponentContainer>
        <CardComponent data={props.productData} title="Top products" />
        <CardComponent data={props.postData} title="Top posts" />
        <CardComponent data={props.storesData} title="Top stores" />
      </CardsComponentContainer>
    </MainContainer>
  );
};

export default Dashboard;

export async function getServerSideProps() {
  // console.log("enter");
  const response = await fetch("http://localhost:3000/api/topproductsfetch");
  const data = await response.json();
  // console.log(data);

  const postResponse = await fetch("http://localhost:3000/api/toppostfetch");
  const postData = await postResponse.json();

  const storesResponse = await fetch(
    "http://localhost:3000/api/topstoresfetch"
  );
  const storesData = await storesResponse.json();
  return {
    props: {
      productData: data,
      postData,
      storesData,
    },
  };
}
