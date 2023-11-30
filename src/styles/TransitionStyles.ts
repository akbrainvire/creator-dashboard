// components/TransitionStyles.js
import { createGlobalStyle } from "styled-components";

const TransitionStyles = createGlobalStyle`
  /* Apply smooth transitions to all elements */
  * {
    transition: all 0.1s ease-in-out;
  }
`;
export default TransitionStyles;
