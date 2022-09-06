import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AutuiThemeProvider, createTheme } from "autui";
import { createElement } from "react";
import Home from "./Home";
import routes from "./routes";
import TopNavigation from "./TopNavigation";
import VirtualScreen, {
  VirtualScreenOutlet,
} from "../../lib/virtual-screen/VirtualScreen";

const theme = createTheme();

function App() {
  return (
    <HelmetProvider>
      <AutuiThemeProvider initTheme={theme}>
        <VirtualScreen>
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
          <VirtualScreenOutlet />
        </VirtualScreen>
      </AutuiThemeProvider>
    </HelmetProvider>
  );
}

export default App;
