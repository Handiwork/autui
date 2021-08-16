import React, { ReactElement } from "react";
import styled from "styled-components";
import { useRouteMatch, useHistory } from "react-router-dom";
import { Container, ListItem } from "../../lib";
import Logo from "../components/Logo";
import routes from "./routes";
import { floatEffect } from "../../lib/effects";

export default function TopNavigation(): ReactElement {
  const home = useRouteMatch({ path: "/", exact: true });
  return (
    <BarContainer>
      <ContentContainer data-home={!!home}>
        <LogoHome />
        <div style={{ display: "flex" }}>
          {routes.map((it) => (
            <NavItem key={it.path} path={it.path} title={it.title} />
          ))}
        </div>
      </ContentContainer>
    </BarContainer>
  );
}

function LogoHome() {
  const history = useHistory();
  const home = useRouteMatch({ path: "/", exact: true });
  return (
    <LogoHomeContainer
      data-home={!!home}
      onClick={() => !home && history.push("/")}
    >
      <Logo />
      <span>Autui</span>
    </LogoHomeContainer>
  );
}

const LogoHomeContainer = styled(Container)`
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
  & > svg {
    width: 1em;
    height: 1em;
  }
  & > span {
    margin: 0 4px;
  }
  &:not([data-home="true"]) {
    & > svg {
      color: ${(p) => p.theme.colors.primary};
    }
  }
`;

interface NavItemProps {
  path: string;
  title: string;
}

function NavItem({ path, title }: NavItemProps): ReactElement {
  const history = useHistory();
  return <ListItem onClick={() => history.push(path)}>{title}</ListItem>;
}

const ContentContainer = styled.div`
  transition: all 0.3s ease-in-out;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: 48px;
  &[data-home="true"] {
    max-width: 1000px;
    color: white;

    @media screen and (min-width: 1600px) {
      max-width: 1200px;
    }
  }
`;

const BarContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  ${floatEffect}
`;
