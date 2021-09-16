import { ReactElement } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { AbsoluteLayout, H1 } from "autui";
import Logo from "../components/Logo";

const HomeWrapper = styled(AbsoluteLayout)`
  background-image: linear-gradient(
    -45deg,
    ${(p) => p.theme.colors.primary},
    ${(p) => p.theme.colors.lightPrimary}
  );
  color: ${(p) => p.theme.colors.onPrimary};
`;

export default function Home(): ReactElement {
  const size = 100;
  const logoStyle = { width: size, height: size };
  return (
    <HomeWrapper>
      <Helmet>
        <title>Autui - Personal UI Lib of Autumn</title>
      </Helmet>
      <AbsoluteLayout
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <H1 style={{ flex: "0 1 auto" }}>
          <Logo style={logoStyle} />
          Autui
        </H1>
      </AbsoluteLayout>
    </HomeWrapper>
  );
}
