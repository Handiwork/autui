import React, { ReactElement } from "react";
import {
  useHistory,
  useRouteMatch,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { AbsoluteLayout, List, ListItem } from "autui";
import { IRoute } from "../data/IRoute";

const NavItem = ({ it }: { it: IRoute }) => {
  const history = useHistory();
  const match = useRouteMatch(it.path);
  return (
    <ListItem onClick={() => history.push(it.path)} active={!!match}>
      {it.title}
    </ListItem>
  );
};

export default function masterDetailPage(routes: Array<IRoute>) {
  return function MasterDetialPage(): ReactElement {
    const leftWidth = 250;
    const defaultRoute = routes[0];
    return (
      <AbsoluteLayout top="48px">
        <AbsoluteLayout right={`calc(100% - ${leftWidth}px)`}>
          <List>
            {routes.map((it) => (
              <NavItem it={it} key={it.path} />
            ))}
          </List>
        </AbsoluteLayout>
        <AbsoluteLayout left={leftWidth}>
          <Switch>
            {routes.map((it) => (
              <Route key={it.path} path={it.path} component={it.component} />
            ))}
            {defaultRoute && <Redirect to={defaultRoute.path} />}
          </Switch>
        </AbsoluteLayout>
      </AbsoluteLayout>
    );
  };
}
