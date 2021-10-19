import { AbsoluteLayout, List, ListItem } from "autui";
import { ReactElement, useState } from "react";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import styled from "styled-components";
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
    const defaultRoute = routes[0];
    const [active, setActive] = useState(false);
    return (
      <MasterDetailPageContainer top="48px">
        <div
          id="master"
          role="contentinfo"
          data-active={active}
          onClick={() => setActive((v) => !v)}
        >
          <List>
            {routes.map((it) => (
              <NavItem it={it} key={it.path} />
            ))}
          </List>
        </div>
        <div id="detail">
          <Switch>
            {routes.map((it) => (
              <Route key={it.path} path={it.path} component={it.component} />
            ))}
            {defaultRoute && <Redirect to={defaultRoute.path} />}
          </Switch>
        </div>
      </MasterDetailPageContainer>
    );
  };
}
const smallBreak = "600px";
const MasterDetailPageContainer = styled(AbsoluteLayout)`
  & > #master {
    z-index: 1;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: auto;
    background-color: white;
    transition: all 0.15s ease-in-out 0.15s;

    @media (max-width: ${smallBreak}) {
      &[data-active="false"] {
        transform: translateX(calc(-100% + 16px));
        background-color: transparent;
        cursor: pointer;
        & * {
          pointer-events: none;
        }
      }
    }
  }
  & > #detail {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  @media (min-width: ${smallBreak}) {
    & > #master {
      position: sticky;
      left: 0;
      width: 200px;
    }
    & > #detail {
      position: absolute;
      left: 200px;
    }
  }
  @media (min-width: 960px) {
    & > #master {
      width: 250px;
    }
    & > #detail {
      left: 250px;
    }
  }
`;
