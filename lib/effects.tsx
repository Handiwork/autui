import { css } from "styled-components";

export const hoverHighlight = css`
  &:hover::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    box-shadow: 0 0px 10px 3px ${(p) => p.theme.colors.primary};
  }
`;
