import {
  adjustHue,
  complement,
  darken,
  lighten,
  readableColor,
  transparentize,
  mix,
} from "polished";
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
    onPrimary: string;
    secondary: string;
    onSecondary: string;
    surface: string;
    onSurface: string;
    accent: string;
    disable: string;
    lightPrimary: string;
    darkPrimary: string;
    highlight: string;
    hoverLayer: string;
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

export function createColors(primary: string): AutuiTheme["colors"] {
  const onPrimary = readableColor(primary);
  const secondary = adjustHue(60, primary);
  const onSecondary = readableColor(secondary);
  const surface = "white";
  const onSurface = readableColor(surface);
  const accent = complement(primary);
  const disable = mix(0.5, "#7777", onSurface);

  const highlight = lighten(0.2, primary);
  const lightPrimary = lighten(0.2, primary);
  const darkPrimary = darken(0.2, primary);
  const hoverLayer = transparentize(0.85)(lightPrimary);
  return {
    primary,
    onPrimary,
    secondary,
    onSecondary,
    surface,
    onSurface,
    accent,
    disable,
    lightPrimary,
    darkPrimary,
    hoverLayer,
    highlight,
  };
}

export function createTheme(): AutuiTheme {
  // const colors = createColors("#2196F3");
  const colors = createColors("#3e689b");
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

const AutuiThemeContext = createContext<
  Dispatch<SetStateAction<AutuiTheme>> | undefined
>(undefined);

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
  const updater = useContext(AutuiThemeContext);
  if (!updater)
    throw new Error(
      `${useThemeUpdater.name} should be called within ${AutuiThemeProvider.name}`
    );
  return updater;
}
