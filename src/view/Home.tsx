import { AbsoluteLayout, H1, H2 } from "autui";
import { ReactElement, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
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
  const logoStyle = { width: size, height: size, margin: 8 };
  const rest = useCountDown();
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
        <AbsoluteLayout top="auto" left="auto">
          <H2 style={{ flex: "0 1 auto", alignSelf: "end", margin: 8 }}>
            {rest}
          </H2>
        </AbsoluteLayout>
      </AbsoluteLayout>
    </HomeWrapper>
  );
}

const target = new Date("2024-7-21").getTime();

function pad(x: number, l = 2) {
  return x.toString().padStart(l, "0");
}

function getInterval() {
  const current = new Date().getTime();
  const interval = Math.max(0, target - current);
  let i = Math.floor(interval / 1000);
  const s = i % 60;
  i = Math.floor(i / 60);
  const m = i % 60;
  i = Math.floor(i / 60);
  const h = i % 24;
  i = Math.floor(i / 24);
  const d = i;
  return `${d}:${pad(h)}:${pad(m)}:${pad(s)}`;
}
function useCountDown() {
  const [rest, setRest] = useState(getInterval());
  useEffect(() => {
    const h = setInterval(() => {
      setRest(getInterval());
    }, 1000);
    return () => clearInterval(h);
  });
  return rest;
}
