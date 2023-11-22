import DatePicker from "react-datepicker";
import styled from "styled-components";

export const ButtonStyled = styled.button<{ $isSelected?: boolean }>`
  padding: 0px, 14px, 0px, 14px;
  background-color: white;
  border: ${(props) => (props.$isSelected ? "1px solid black" : "none")};
  border-radius: 20px;
  width: 89px;
  height: 39px;
  gap: 5px;
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;

export const DatePickerContainer = styled(DatePicker)`
  text-align: center;
  display: flex;
  align-items: center;

  padding: 0px, 14px, 0px, 14px;
  background-color: white;
  border-radius: 20px;
  width: 146px;
  height: 39px;
  gap: 5px;
  border: 1px solid black;
`;

export const BoxShadowContainer = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */

  margin: 50px 150px;
`;
