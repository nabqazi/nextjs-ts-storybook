export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

import React from "react";
import { createGlobalStyle } from "styled-components";
import "./fonts/css/satoshi.css";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Satoshi-Regular", Helvetica, Arial, sans-serif;
  }
`;

const withGlobalStyle = (Story) => (
  <>
    <GlobalStyle />
    <Story />
  </>
);

export const decorators = [withGlobalStyle];
