import Image from "next/image";
import Link from "next/link";
import DatePicker from "react-datepicker";
import styled from "styled-components";

export const ButtonStyled = styled.button<{
  $isSelected?: boolean;
  $width?: boolean;
  $height?: boolean;
  $gap?: boolean;
  $padding?: boolean;
}>`
  cursor: pointer;
  padding: ${(props) => (props.$padding ? "12px" : "")};
  background-color: white;
  border: ${(props) =>
    props.$isSelected ? "1px solid black" : "1px solid #9D9D9D"};
  color: ${(props) => (props.$isSelected ? "black" : "#9D9D9D")};
  border-radius: 20px;
  white-space: nowrap;

  & > a {
    color: ${(props) => (props.$isSelected ? "black" : "#9D9D9D")};
  }

  gap: ${(props) => (props.$gap ? "5px" : "0")};

  @media only screen and (max-width: 655px) {
    display: inline-block;
    padding: 8px;
  }
`;

export const HeadingContainer = styled.div<{
  $applyStyle?: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-bottom: ${(props) => (props.$applyStyle ? "31px" : "0")};
  align-items: center;
  gap: 0.5rem;
  width: 100%;

  @media only screen and (max-width: 655px) {
    justify-content: normal;
    ${(props) =>
      props.$applyStyle &&
      `
        /* Styles to apply when isPrimary prop is true */
        display: flex;
    // flex-direction: row-reverse;
    justify-content: normal;
    overflow-x: auto;
    white-space: nowrap;
    /////////////HIDE SCROLLBAR/////////////////////////
    &::-webkit-scrollbar {
      display: none;
    }
      `}/* min-width: 100%; */
  }
`;

export const DatePickerContainer = styled(DatePicker)`
  text-align: center;
  display: flex;
  align-items: center;
  font-family: "Strawford", sans-serif;
  padding: 0px, 14px, 0px, 14px;
  background-color: white;
  border-radius: 20px;
  padding: 12px;
  width: 8rem;
  gap: 5px;
  border: 1px solid black;

  @media only screen and (max-width: 655px) {
    padding: 8px;
  }
`;

export const DatePickerWrapper = styled.div`
  .react-datepicker {
    box-shadow: 3px 2px 11px rgb(0 0 0 / 30%);
  }

  //This one
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    background-color: #34554a;
    color: #fff;
    border-radius: 0px;
    margin: 0;
    padding: 2px;
  }

  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    border-radius: 45px 0 0 45px;
  }

  .react-datepicker__day--range-start: hover {
    border-radius: 45px 0 0 45px;
  }

  .react-datepicker__day:hover {
    border-radius: 0 45px 45px 0;
  }
  .react-datepicker__day--range-end {
    border-radius: 0 45px 45px 0;
  }

  .react-datepicker__day {
    margin: 0;
    padding: 2px;
  }
  .react-datepicker__week {
    margin-bottom: 1px;
  }
`;

export const BoxShadowContainer = styled.div`
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.08);
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */

  margin: 3.125rem 9.375rem;

  @media only screen and (max-width: 1100px) {
    margin: 2.125rem 5.375rem;
  }

  @media only screen and (max-width: 920px) {
    margin: 1.125rem 3.375rem;
  }

  @media only screen and (max-width: 500px) {
    margin: 2.25rem 1rem;
  }
`;

export const SearchFindContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 31px;
`;

export const SearchFindLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.625rem;
`;

export const CaretRightandLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const ControlHorizontalScrollDetail = styled.div`
  display: flex;
  justify-content: normal;
  align-items: center;
  gap: 0.5rem;
  width: 100%;

  @media only screen and (max-width: 1060px) {
    display: flex;
    justify-content: normal;
    overflow: auto;
    white-space: nowrap;
    /////////////HIDE SCROLLBAR/////////////////////////
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const LinkStyle = styled(Link)<{ $isSelected?: boolean }>`
  text-decoration: none;
  color: #9d9d9d;
  cursor: pointer;

  &:active {
    color: #9d9d9d;
  }

  &:focus {
    color: black;
  }
`;

export const CaretLeftImage = styled(Image)`
  transform: rotate(180deg);
`;
