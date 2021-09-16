import { ThemeProvider, ThemeContext } from "styled-components";
import { ReactNode, useContext, useState, Dispatch, SetStateAction, createContext } from "react";
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
  const lightPrimary = primary.lighten(0.5);
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
  initTheme: AutuiTheme;
  children: ReactNode;
  normalize?: boolean;
}

const AutuiThemeContext = createContext<Dispatch<SetStateAction<AutuiTheme>>>(
  () => {}
);

export function AutuiThemeProvider(props: AutuiThemeProviderProps) {
  const [theme, setTheme] = useState(props.initTheme);
  return (
    <AutuiThemeContext.Provider value={setTheme}>
      <ThemeProvider theme={theme}>
        {(props.normalize ?? true) && <Normalize />}
        {props.children}
      </ThemeProvider>
    </AutuiThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdater() {
  return useContext(AutuiThemeContext);
}
