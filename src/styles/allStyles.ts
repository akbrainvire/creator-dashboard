import styled from "styled-components";

export const ButtonStyled = styled.button<{ $isSelected?: boolean }>`
  padding: 10px;
  background-color: white;
  border: ${(props) => (props.$isSelected ? "1px solid black" : "none")};
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;

export const DateButtonStyled = styled.button`
  padding: 10px;
  background-color: white;
  border: 1px solid black;
`;
