import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* your global styles here */

  body {
    border: 0;
  }
`;

const theme = {
  /* your theme object here */
  primaryButtonBgColor: "#2a3dd9",
};

export { GlobalStyle, theme, ThemeProvider };
