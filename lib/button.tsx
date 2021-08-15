import styled, { css } from "styled-components";
import { hoverHighlight } from "./effects";

const buttonBaseStyle = css`
  font-size: 1rem;
  user-select: none;
`;

export const Button = styled.button`
  ${buttonBaseStyle}
  outline: none;
  border: ${(p) => p.theme.colors.primary} 1px solid;
  color: white;
  background-color: ${(p) => p.theme.colors.primary};
  padding: 8px 16px;
  border-radius: ${(p) => p.theme.borderRadius};
  user-select: none;
  cursor: pointer;

  position: relative;

  ${hoverHighlight}
`;

export const ContentButton = styled.button`
  ${buttonBaseStyle}
  outline: none;
  border: none;
  color: ${(p) => p.theme.colors.primary};
  background-color: transparent;
  font-weight: bold;
  padding: 8px;
  cursor: pointer;

  &:hover {
    color: ${(p) => p.theme.colors.lightPrimary};
  }
`;
