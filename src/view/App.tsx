import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AutuiThemeProvider, createTheme } from "autui";
import { createElement } from "react";
import Home from "./Home";
import routes from "./routes";
import TopNavigation from "./TopNavigation";

const theme = createTheme();

function App() {
  return (
    <HelmetProvider>
      <AutuiThemeProvider initTheme={theme}>
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
      </AutuiThemeProvider>
    </HelmetProvider>
  );
}

export default App;
