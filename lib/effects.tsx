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

export const floatEffect = css`
  box-shadow: 2px 2px 4px 1px rgba(0.2, 0.2, 0.2, 0.2);
  transition: all 0.15s ease-in-out;
`;
