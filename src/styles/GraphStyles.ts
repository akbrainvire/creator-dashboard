import Image from "next/image";
import styled from "styled-components";

export const GraphContainer = styled.div`
  // height: 274px;
  display: flex;
  margin-top: 23px;
  flex-direction: column;
  border-radius: 10px;
  gap: 16px;
`;

export const BothEarningContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;

export const SCEarningBoxContainer = styled.div`
  display: flex;
  border-top: 1px solid #dddddd;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
`;

export const StyledGraphImage = styled(Image)`
  width: 100%;
  height: "auto";
`;
