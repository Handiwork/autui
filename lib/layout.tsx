import styled from "styled-components";
import { CSSProperties } from "react";

type AbosulteLayoutProps = Pick<
  CSSProperties,
  "top" | "right" | "bottom" | "left"
>;

export const AbosulteLayout = styled.div<AbosulteLayoutProps>((p) => ({
  position: "absolute",
  top: p.top ?? 0,
  right: p.right ?? 0,
  bottom: p.bottom ?? 0,
  left: p.left ?? 0,
}));
