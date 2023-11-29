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
  $applyPadding?: boolean;
  $changeMargin?: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-bottom: ${(props) => (props.$applyPadding ? "0" : "0")};
  align-items: center;
  gap: 0.5rem;
  width: 100%;

  @media only screen and (max-width: 655px) {
    justify-content: normal;
    ${(props) =>
      !props.$applyStyle &&
      `
        /* Styles to apply when isPrimary prop is true */
        display: flex;
    // flex-direction: row-reverse;
    & :nth-child(1) { order: 2; }
    &  :nth-child(2) { order: 3; }
    &  :nth-child(3) { order: 4; }
    & :nth-child(4) { order: 5; }
    &  :nth-child(5) { order: 1; }
    justify-content: normal;
    overflow-x: auto;
    white-space: nowrap;
    /////////////HIDE SCROLLBAR/////////////////////////
    &::-webkit-scrollbar {
      display: none;
    }
      `}/* min-width: 100%; */
  }

  @media only screen and (max-width: 1024px) {
    margin-top: 2rem;
  }
  @media only screen and (max-width: 920px) {
    margin-top: ${(props) => (props.$changeMargin ? "0" : "2rem")};
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
    box-shadow: 3px 2px 11px rgb(136 136 136 / 30%);
    background-color: white;
    border: none;
  }

  .react-datepicker__month-container {
    padding: 0.5rem 0.4rem;
  }

  .react-datepicker__header {
    background-color: white;
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

  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    padding: 0.7rem 1rem 0.5rem 1rem;
  }

  .react-datepicker__day-name {
    color: #6b6969;
  }

  .react-datepicker__day--range-start:hover {
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
  .react-datepicker__current-month {
    font-weight: normal;
  }

  @media only screen and (max-width: 650px) {
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
      padding: 6px;
    }

    .react-datepicker__day {
      padding: 6px;
    }
  }
`;

export const DatePickerCustomHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1rem;
  font-size: 1rem;
  font-weight: 600;
`;

export const BoxShadowContainer = styled.div`
  border-radius: 20px;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.08);
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  /* justify-content: center; */
  /* align-items: center; */
  padding: 2rem 0;
  max-width: 1320px;
  margin: auto;

  @media only screen and (max-width: 1400px) {
    max-width: 1200px;
  }

  @media only screen and (max-width: 1200px) {
    max-width: 1000px;
  }

  @media only screen and (max-width: 1000px) {
    max-width: 770px;
  }

  @media only screen and (max-width: 768px) {
    max-width: 500px;
  }

  @media only screen and (max-width: 500px) {
    max-width: 90%;
  }
`;

export const SearchFindContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 31px; */
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
  gap: 3.5rem;
  padding-left: 20px;
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
