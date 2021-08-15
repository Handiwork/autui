import styled from "styled-components";
import { CSSProperties } from "react";

type AbosulteLayoutProps = Pick<
  CSSProperties,
  "top" | "right" | "bottom" | "left"
>;

export const AbsoluteLayout = styled.div<AbosulteLayoutProps>((p) => ({
  position: "absolute",
  top: p.top ?? 0,
  right: p.right ?? 0,
  bottom: p.bottom ?? 0,
  left: p.left ?? 0,
}));

/**
 * Default container with spacing
 */
export const Container = styled.div`
  margin: ${(p) => p.theme.spacing.containerMargin};
  padding: ${(p) => p.theme.spacing.containerPadding};
`;

export const HorizantalDivider = styled.div`
  border-left: 1px solid rgba(0.2, 0.2, 0.2, 0.1);
  margin: 0 ${(p) => p.theme.spacing.containerMargin};
`;

export const VerticalDivider = styled.div`
  border-top: 1px solid rgba(0.2, 0.2, 0.2, 0.1);
  margin: ${(p) => p.theme.spacing.containerMargin} 0;
`;
