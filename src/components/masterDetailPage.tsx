import { AbsoluteLayout, List, ListItem } from "autui";
import { createElement, ReactElement, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useMatch,
  useNavigate,
} from "react-router-dom";
import styled from "styled-components";
import { IRoute } from "../data/IRoute";

const NavItem = ({ it }: { it: IRoute }) => {
  const navigate = useNavigate();
  const match = useMatch({ path: it.path, end: false });
  return (
    <ListItem onClick={() => navigate(it.path)} active={!!match}>
      {it.title}
    </ListItem>
  );
};

export default function createMasterDetailPage(routes: Array<IRoute>) {
  return function MasterDetialPage(): ReactElement {
    return (
      <MasterDetailPageContainer top="48px">
        <MasterSec routes={routes} />
        <DetailSec routes={routes} />
      </MasterDetailPageContainer>
    );
  };
}
const smallBreak = "600px";

function MasterSec(props: { routes: Array<IRoute> }) {
  const [active, setActive] = useState(false);
  return (
    <MasterWrap data-active={active} onClick={() => setActive((v) => !v)}>
      <List>
        {props.routes.map((it) => (
          <NavItem it={it} key={it.path} />
        ))}
      </List>
    </MasterWrap>
  );
}

const MasterWrap = styled(AbsoluteLayout)`
  z-index: 1;
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
`;

function DetailSec(props: { routes: Array<IRoute> }) {
  const defaultRoute = props.routes[0];
  return (
    <DetailWrapper>
      <Routes>
        {props.routes.map((it) => (
          <Route
            key={it.path}
            path={it.path}
            element={createElement(it.component, {})}
          />
        ))}
        {defaultRoute && (
          <Route index element={<Navigate to={defaultRoute.path} replace />} />
        )}
      </Routes>
    </DetailWrapper>
  );
}

const DetailWrapper = styled(AbsoluteLayout)``;

const MasterDetailPageContainer = styled(AbsoluteLayout)`
  @media (min-width: ${smallBreak}) {
    & > ${MasterWrap} {
      position: sticky;
      left: 0;
      width: 200px;
    }
    & > ${DetailWrapper} {
      position: absolute;
      left: 200px;
    }
  }
  @media (min-width: 960px) {
    & > ${MasterWrap} {
      width: 250px;
    }
    & > ${DetailWrapper} {
      left: 250px;
    }
  }
`;
