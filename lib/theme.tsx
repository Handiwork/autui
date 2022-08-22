import * as Color from "color";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { ThemeContext, ThemeProvider } from "styled-components";
import { Normalize } from "./normalize";

export interface AutuiTheme {
  borderRadius: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    lightPrimary: string;
    darkenPrimary: string;
    highlight: string;
    hoverLayer: string;
    textPrimary: string;
    textSecondary: string;
  };
  spacing: {
    containerMargin: string;
    containerPadding: string;
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

export function createColors(primaryColor: string): AutuiTheme["colors"] {
  const primary = Color(primaryColor);
  const seconday = primary.hue(primary.hue() + 60);
  const accent = primary.hue(primary.hue() + 180);

  const highlight = primary.lightness(primary.lightness() * 1.2);
  const textPrimary = Color("black");
  const lightPrimary = primary.lighten(0.5);
  const darkenPrimary = primary.darken(0.2);
  const hoverLayer = primary.lighten(0.6).alpha(0.15);
  const textSecondary = primary.isDark() ? Color("white") : Color("black");
  return {
    primary: primaryColor,
    secondary: seconday.toString(),
    accent: accent.toString(),
    lightPrimary: lightPrimary.toString(),
    darkenPrimary: darkenPrimary.toString(),
    hoverLayer: hoverLayer.toString(),
    highlight: highlight.toString(),
    textPrimary: textPrimary.toString(),
    textSecondary: textSecondary.toString(),
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
