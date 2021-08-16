import React from "react";
import { Route, Switch } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AutuiThemeProvider, createTheme } from "../../lib";
import Home from "./Home";
import routes from "./routes";
import TopNavigation from "./TopNavigation";

const theme = createTheme();

function App() {
  return (
    <HelmetProvider>
      <AutuiThemeProvider theme={theme}>
        <Switch>
          {routes.map((it) => (
            <Route key={it.path} path={it.path} component={it.component} />
          ))}
          <Route path="/" component={Home} />
        </Switch>
        <TopNavigation />
      </AutuiThemeProvider>
    </HelmetProvider>
  );
}

export default App;
