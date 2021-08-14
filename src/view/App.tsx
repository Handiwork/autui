import React from "react";
import loadable from "@loadable/component";
import { Route, useHistory } from "react-router-dom";
import {
  AbosulteLayout,
  AutuiThemeProvider,
  Container,
  createTheme,
  H1,
  List,
  ListItem,
  sb,
} from "../../lib";

const theme = createTheme();
const routes = [
  {
    path: "/buttons",
    title: "Button Examples",
    component: loadable(() => import("./examples/buttons")),
  },
];

function App() {
  const leftWidth = 250;
  const rightStyle = sb()
    .absoluteLayout({
      left: leftWidth,
    })
    .build();
  const history = useHistory();
  return (
    <AutuiThemeProvider theme={theme}>
      <AbosulteLayout>
        <AbosulteLayout right={`calc(100% - ${leftWidth}px)`}>
          <Container>
            <H1>Autui</H1>
          </Container>

          <List>
            {routes.map((it) => (
              <ListItem key={it.path} onClick={() => history.push(it.path)}>
                {it.title}
              </ListItem>
            ))}
          </List>
        </AbosulteLayout>
        <div style={rightStyle}>
          {routes.map((it) => (
            <Route key={it.path} path={it.path} component={it.component} />
          ))}
        </div>
      </AbosulteLayout>
    </AutuiThemeProvider>
  );
}

export default App;
