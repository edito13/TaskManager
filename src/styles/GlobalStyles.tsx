import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        outline: none;
        font-family: "Roboto Regular";
    }
    body {
        background: #121215;
    }

    .checkbox-icon {
        width: 70px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
      }
      
      .check-icon {
        fill: none;
        stroke: #8b57f6;
        stroke-width: 10;
        stroke-dasharray: 100;
        stroke-dashoffset: 100;
        animation: drawCheck 2s ease-in-out forwards .8s;
      }
      
      @keyframes drawCheck {
        to {
          stroke-dashoffset: 0;
        }
      }
`;

export default GlobalStyles;
