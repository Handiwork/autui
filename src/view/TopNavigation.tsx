import { Container, floatEffect, ListItem, PureButton, XFlexBox } from "autui";
import { ReactElement, ReactNode } from "react";
import { FaGithub } from "react-icons/fa";
import { useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../components/Logo";
import routes from "./routes";

export default function TopNavigation(): ReactElement {
  const home = useMatch({ path: "/", end: true });
  return (
    <BarContainer>
      <ContentContainer data-home={!!home}>
        <LogoHome />
        <XFlexBox style={{ margin: "0 8px" }}>
          {routes.map((it) => (
            <NavItem key={it.path} path={it.path} title={it.title} />
          ))}
          <PureButton
            onClick={() => {
              window.open("https://github.com/Handiwork/autui", "blank");
            }}
          >
            <FaGithub />
          </PureButton>
        </XFlexBox>
      </ContentContainer>
    </BarContainer>
  );
}

function LogoHome() {
  const navigate = useNavigate();
  const home = useMatch({ path: "/", end: true });
  return (
    <LogoHomeContainer
      data-home={!!home}
      onClick={() => !home && navigate("/")}
    >
      <XFlexBox>
        <Logo />
        <span>Autui</span>
      </XFlexBox>
    </LogoHomeContainer>
  );
}

const LogoHomeContainer = styled(Container)`
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
  & svg {
    width: 1em;
    height: 1em;
  }
  & span {
    margin: 0 4px;
  }
  &:not([data-home="true"]) {
    & svg {
      color: ${(p) => p.theme.colors.primary};
    }
  }
`;

interface NavItemProps {
  path: string;
  title: ReactNode;
}

function NavItem({ path, title }: NavItemProps): ReactElement {
  const navigate = useNavigate();
  return <ListItem onClick={() => navigate(path)}>{title}</ListItem>;
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
    color: ${(p) => p.theme.colors.onPrimary};

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
  z-index: 20;
`;
