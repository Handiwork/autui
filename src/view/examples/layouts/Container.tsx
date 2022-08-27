import { Container, useTheme, XFlexBox, YFlexBox } from "autui";
import styled from "styled-components";

export default function ContainerExample() {
  const {
    colors: { primary, surface, onPrimary },
  } = useTheme();
  return (
    <>
      <u>{"<hr/> are applied to avoid margin collapse"}</u>
      <div style={{ background: primary }}>
        <hr />
        <Container style={{ background: surface }}>
          <div style={{ background: primary, color: onPrimary }}>inner</div>
        </Container>
        <hr />
      </div>
      <XFlexBox>
        <Items />
        <Items />
        <Items />
        <Items />
      </XFlexBox>
      <YFlexBox>
        <Items />
        <Items />
        <Items />
        <Items />
      </YFlexBox>
    </>
  );
}

const Items = styled.div`
  height: 28px;
  width: 28px;
  background-color: ${(p) => p.theme.colors.primary};
  margin: ${(p) => p.theme.spacing.containerMargin};
`;
