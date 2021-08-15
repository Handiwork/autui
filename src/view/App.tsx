import React from "react";
import { Route, useHistory, useRouteMatch } from "react-router-dom";
import {
  AbsoluteLayout,
  AutuiThemeProvider,
  Container,
  ContentButton,
  createTheme,
  H1,
  List,
  ListItem,
  sb,
} from "../../lib";
import Logo from "../components/Logo";
import routes, { IRoute } from "./examples/routes";

const theme = createTheme();

const NavItem = ({ it }: { it: IRoute }) => {
  const history = useHistory();
  const match = useRouteMatch(it.path);
  return (
    <ListItem onClick={() => history.push(it.path)} active={!!match}>
      {it.title}
    </ListItem>
  );
};

function App() {
  const leftWidth = 250;
  const rightStyle = sb()
    .absoluteLayout({
      left: leftWidth,
    })
    .build();
  return (
    <AutuiThemeProvider theme={theme}>
      <AbsoluteLayout>
        <AbsoluteLayout right={`calc(100% - ${leftWidth}px)`}>
          <Container>
            <H1>
              <ContentButton style={{ fontSize: "1em" }}>
                <Logo
                  style={{
                    height: "1em",
                    width: "1em",
                  }}
                />
              </ContentButton>
              <span>Autui</span>
            </H1>
          </Container>

          <List>
            {routes.map((it) => (
              <NavItem it={it} key={it.path} />
            ))}
          </List>
        </AbsoluteLayout>
        <div style={rightStyle}>
          {routes.map((it) => (
            <Route key={it.path} path={it.path} component={it.component} />
          ))}
        </div>
      </AbsoluteLayout>
    </AutuiThemeProvider>
  );
}

export default App;
