import { ThemeProvider } from "styled-components";
import React, { ReactNode } from "react";
import { Normalize } from "./normalize";

export interface AutuiTheme {
  colors: {
    primary: string;
    onPrimary: string;
    lightPrimary: string;
    hoverLayer: string;
  };
  borderRadius: string;
  spacing: {
    containerPadding: string;
    containerMargin: string;
  };
  fontSizes: {
    root: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
  };
}
/**
 * @public
 */
declare module "styled-components" {
  export interface DefaultTheme extends AutuiTheme {
    version?: string;
  }
}

export function createTheme(): AutuiTheme {
  return {
    colors: {
      primary: "#50466b",
      onPrimary: "white",
      lightPrimary: "#706396",
      hoverLayer: "#a28eda",
    },
    borderRadius: "4px",
    spacing: {
      containerMargin: "8px",
      containerPadding: "8px",
    },
    fontSizes: {
      root: "62.5%",
      h1: "2.4rem",
      h2: "2.2rem",
      h3: "2.0rem",
      h4: "1.8rem",
      h5: "1.6rem",
      h6: "1.4rem",
    },
  };
}

interface AutuiThemeProviderProps {
  theme: AutuiTheme;
  children: ReactNode;
  normalize?: boolean;
}

export function AutuiThemeProvider(props: AutuiThemeProviderProps) {
  return (
    <ThemeProvider theme={props.theme}>
      {(props.normalize ?? true) && <Normalize />}
      {props.children}
    </ThemeProvider>
  );
}
