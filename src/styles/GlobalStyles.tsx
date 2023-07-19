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
`;

export default GlobalStyles;
