import styled from "styled-components";

export const OneCardComponent = styled.div`
  width: 390px;
  height: 440px;

  border-radius: 10px;
  gap: 16px;
  overflow-y: scroll;
  background-color: rgba(255, 255, 255, 0.4);

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CardsComponentContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.1875rem;
  /* width: 76.25rem; */
  /* 
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  } */
`;

export const Title = styled.div`
  position: sticky;
  background-color: rgba(255, 255, 255, 1);
  top: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 22px 50px;
  box-sizing: border-box;
  border-bottom: 1px solid #dddddd;
  align-items: center;

  & > span {
    font-size: 22px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0em;
  }
`;

export const EachCardItemContainer = styled.div`
  /* display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0.625rem 2rem; */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  flex: 1 0 0;
  align-self: stretch;
  padding: 0.625rem 2rem;
`;

export const NamePercentTypeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex: 1 0 0;
  align-self: stretch;
`;

export const ColumFlexContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  color: #3a3a3a;

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
}>`
  /* min-width: 0;
  white-space: nowrap;
  text-overflow: ellipsis; */

  font-size: ${(props) => (props.$bold ? "0.875rem" : "0.75rem")};
  font-style: normal;
  font-weight: ${(props) => (props.$bold ? "600" : "400")};
  line-height: normal;
  color: #3a3a3a;
  background-color: ${(props) => (props.$background ? props.$background : "")};
  /* margin: 0.3rem 0; */
  padding: ${(props) => (props.$padding ? "0.3rem 0.2rem" : "0.3rem 0")};

  white-space: ${(props) => (props.$wrap ? "nowrap" : "")};
`;
