import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0px;
    padding: 0px;
    background: #131314;
    color: #afafaf;
    font-family: "Forum", serif;
  }

  a, a:visited, a:active {
    text-decoration: none;
    color: inherit;
  }

  ul {
    padding: 0px;
  }
  
  li {
    list-style-type: none;
  }

  button {
    outline: 0px;
    cursor: pointer;
  }

  input {
    background: transparent;
    outline: 0px;
  }
`;
