import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const OneCardComponent = styled.div<{
  $height?: string;
  $overflowY?: boolean;
  $isheightChange?: boolean;
}>`
  min-width: 390px;
  height: ${(props) => (props.$height ? props.$height : "auto")};

  border-radius: 10px;
  gap: 16px;
  overflow-y: ${(props) => (props.$height ? "scroll" : "")};
  background-color: rgba(255, 255, 255, 0.4);

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 972px) {
    min-width: 0;
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 655px) {
    height: ${(props) => (props.$isheightChange ? "300px" : "auto")};
  }
`;

export const CardsComponentContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.8rem;
  flex-wrap: wrap;
  /* width: 76.25rem; */
  /* 
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  } */

  @media only screen and (max-width: 972px) {
    display: block;
  }
`;

// export const Title = styled.div`
//   position: sticky;
//   background-color: rgba(255, 255, 255, 1);
//   top: 0;

//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   padding: 22px 50px;
//   box-sizing: border-box;
//   border-bottom: 1px solid #dddddd;
//   align-items: center;

//   & > span {
//     font-size: 22px;
//     font-weight: 500;
//     line-height: 26px;
//     letter-spacing: 0em;
//   }
// `;

export const LinkStyleTitleContainer = styled(Link)`
  position: sticky;
  position: -webkit-sticky;
  background-color: rgba(255, 255, 255, 1);
  top: 0;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 22px 25px;
  box-sizing: border-box;
  border-bottom: 1px solid #dddddd;
  align-items: center;
  text-decoration: none;

  & > span {
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0em;
  }
`;

export const NormalTitleContainer = styled.div<{ $marginBottom?: boolean }>`
  position: sticky;
  width: 100%;
  position: -webkit-sticky;
  background-color: rgba(255, 255, 255, 1);
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 32px;
  box-sizing: border-box;
  border-bottom: ${(props) =>
    props.$marginBottom ? " 1px solid #dddddd" : "0"};
  align-items: center;
  /* z-index: 100; */
  & > span {
    font-size: 21px;
    line-height: 20px;
    letter-spacing: 0em;
  }

  @media only screen and (max-width: 1024px) {
    position: fixed;
    top: 0;
    left: 0;
    padding: 12px 15px;
    z-index: 1000;
  }
  @media only screen and (max-width: 600px) {
    & > span {
      font-size: 1.2rem;
    }
  }
`;

export const PostsImageStyled = styled(Image)``;

export const EachCardItemContainer = styled.div<{ $padding?: string }>`
  /* display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0.625rem 2rem; */
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex: 1 0 0;
  align-self: stretch;
  padding: ${(props) => (props.$padding ? props.$padding : "0.625rem  1.2rem")};
  border-bottom: 1px solid #dddddd;
`;

export const NamePercentTypeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1 0 0;
  align-self: stretch;
`;

export const ColumFlexContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  color: #3a3a3a;
  align-items: end;

  #percent {
    background-color: #f4f0ec;
    color: #3a3a3a;

    font-size: 0.60869rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.02738rem;
  }
`;

// export const SpanTextStyleContainer = styled.span`
//   white-space: nowrap;
// `;

export const SpanContainer = styled.span<{
  $wrap?: boolean;
  $bold?: boolean;
  $background?: string;
  $padding?: boolean;
  $nowrap?: boolean;
}>`
  /* min-width: 0;
  white-space: nowrap;
  text-overflow: ellipsis; */

  font-size: ${(props) => (props.$bold ? "0.875rem" : "0.75rem")};
  font-style: normal;
  font-weight: ${(props) => (props.$bold ? "600" : "400")};
  line-height: normal;
  color: #3a3a3a;
  white-space: ${(props) => (props.$nowrap ? "nowrap" : "")};

  /* height: 50px; */
  background-color: ${(props) => (props.$background ? props.$background : "")};
  /* margin: 0.3rem 0; */
  padding: ${(props) => (props.$padding ? "0.2rem" : "0.3rem 0")};

  white-space: ${(props) => (props.$wrap ? "nowrap" : "")};
`;

export const ProductPercentAndType = styled.div`
  margin-top: 0.3rem;
  gap: 0.5rem;
  display: flex;
`;

export const OneContainerTabHeight = styled.div`
  box-sizing: border-box;
  /* height: 50px; */
`;
