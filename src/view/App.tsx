import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AutuiThemeProvider, createTheme } from "autui";
import { createElement, useRef } from "react";
import styled from "styled-components";
import Home from "./Home";
import routes from "./routes";
import TopNavigation from "./TopNavigation";
import VirtualScreen, {
  ScreenRefNotifier,
  VirtualScreenOutlet,
} from "../../lib/virtual-screen/VirtualScreen";

const theme = createTheme();

export default function App() {
  const ref = useRef(null);
  return (
    <HelmetProvider>
      <AutuiThemeProvider initTheme={theme}>
        <VirtualScreen>
          <Screen ref={ref}>
            <Routes>
              {routes.map((it) => (
                <Route
                  key={it.path}
                  path={`${it.path}/*`}
                  element={createElement(it.component, {})}
                />
              ))}
              <Route path="/" element={<Home />} />
            </Routes>
            <TopNavigation />
            <ScreenRefNotifier nodeRef={ref} />
            <VirtualScreenOutlet />
          </Screen>
        </VirtualScreen>
      </AutuiThemeProvider>
    </HelmetProvider>
  );
}

const Screen = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
