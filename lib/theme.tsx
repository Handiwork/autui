import { ThemeProvider } from "styled-components";
import React, { ReactNode } from "react";
import Color from "color";
import { Normalize } from "./normalize";

export interface AutuiTheme {
  colors: {
    primary: string;
    onPrimary: string;
    lightPrimary: string;
    darkenPrimary: string;
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

export function createColors(primaryColor: string) {
  const primary = Color(primaryColor);
  const onPrimary = primary.isDark() ? Color("white") : Color("black");
  const lightPrimary = primary.lighten(0.4);
  const darkenPrimary = primary.darken(0.2);
  const hoverLayer = primary.lighten(0.6).alpha(0.15);
  return {
    primary: primaryColor,
    onPrimary: onPrimary.toString(),
    lightPrimary: lightPrimary.toString(),
    darkenPrimary: darkenPrimary.toString(),
    hoverLayer: hoverLayer.toString(),
  };
}

export function createTheme(): AutuiTheme {
  const colors = createColors("#2196F3");
  return {
    colors,
    borderRadius: "4px",
    spacing: {
      containerMargin: "8px",
      containerPadding: "8px",
    },
    fontSizes: {
      root: "87.5%",
      h1: "2.2rem",
      h2: "2.0rem",
      h3: "1.8rem",
      h4: "1.6rem",
      h5: "1.4rem",
      h6: "1.2rem",
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
