import { css } from "styled-components";

export const hoverHighlight = css`
  &:hover {
    box-shadow: 0 0px 10px 3px ${(p) => p.theme.colors.primary};
  }
`;

export const floatEffect = css`
  box-shadow: 1px 2px 8px 1px rgba(0.2, 0.2, 0.2, 0.2);
  transition: box-shadow 0.15s ease-in-out;
`;
