import {
  ColumFlexContainerCard,
  EachCardItemContainer,
  NamePercentContainer,
  NamePercentTypeContainer,
  NormalTitleContainer,
  OneCardComponent,
  ProductPercentAndType,
  SpanContainer,
} from "@/styles/CardComponentStyles";
import { BoxShadowContainer, MainContainer } from "@/styles/indexStyle";
import { Data } from "@/types";
import Image from "next/image";
import React, { Fragment } from "react";
import defaultProductImage from "../../public/defaultProductImage.png";
import SearchFindComponent from "@/components/SearchFindComponent";
import TitleOfPPS from "@/components/TitleOfPPS";
interface Props {
  productData: Data[];
  title: string;
}

const TopProducts = (props: Props) => {
  return (
    <Fragment>
      <MainContainer>
        <SearchFindComponent />
        <BoxShadowContainer>
          <OneCardComponent>
            <>
              <TitleOfPPS title={props.title} />

              {props.productData.map((item: Data) => {
                return (
                  <EachCardItemContainer key={item.id}>
                    {props.title === "Top posts" ||
                    props.title === "Top products" ? (
                      <NamePercentTypeContainer $width="5%" $applyMwidth={true}>
                        <Image
                          src={item.image || defaultProductImage}
                          alt={item.name}
                          width={25}
                          height={25}
                        />
                      </NamePercentTypeContainer>
                    ) : (
                      ""
                    )}

                    <NamePercentContainer $width="80%" $applyMwidth={true}>
                      <SpanContainer $applyItemNameStyle={true} $bold={true}>
                        {item.name}
                      </SpanContainer>

                      {props.title === "Top products" ? (
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
                      ) : (
                        ""
                      )}
                    </NamePercentContainer>

                    <ColumFlexContainerCard $applyMwidth={true} $width="15%">
                      <SpanContainer $bold={true} $nowrap={true}>
                        SEK {item.price}
                      </SpanContainer>
                      {props.title === "Top products" ? (
                        <SpanContainer $nowrap={true}>
                          CSV {item.cvrPercent}
                        </SpanContainer>
                      ) : (
                        ""
                      )}
                    </ColumFlexContainerCard>
                  </EachCardItemContainer>
                );
              })}
            </>
          </OneCardComponent>
        </BoxShadowContainer>
      </MainContainer>
    </Fragment>
  );
};

export default TopProducts;

export async function getServerSideProps(context: any) {
  //   console.log(context.params);
  // console.log("enter");
  const params = context.params;

  function findWhatToFetch() {
    if (params.category === "topposts") {
      return { search: "toppostfetch", title: "Top posts" };
    } else if (params.category === "topproducts") {
      return { search: "topproductsfetch", title: "Top products" };
    } else if (params.category === "topstores") {
      return { search: "topstoresfetch", title: "Top stores" };
    } else {
      return console.log("NO SUCH ROUTE FOUND");
    }
  }
  const searchCategory = findWhatToFetch();
  const response = await fetch(
    `http://localhost:3000/api/${searchCategory?.search}`
  );
  const data = await response.json();
  // console.log(data);

  return {
    props: {
      productData: data,
      title: searchCategory?.title,
    },
  };
}
