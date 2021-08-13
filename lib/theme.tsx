import { ThemeProvider } from "styled-components";
import React, { ReactNode } from "react";
import { Normalize } from "./normalize";

export interface AutuiTheme {
  colors: {
    primary: string;
  };
  borderRadius: string;
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
    },
    borderRadius: "4px",
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
