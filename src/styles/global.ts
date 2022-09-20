import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.colors["gray-900"]};
    color: ${props => props.theme.colors["gray-100"]};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme.colors["green-500"]};
  }

  body, input, textarea, button {
    font: ${props => props.theme.fonts.body};
    font-size: ${props => props.theme.fontSizes.md};
    font-family: ${props => props.theme.fonts.body};
  }
`;