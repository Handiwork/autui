import styled from "styled-components";
import { hoverHighlight } from "./effects";

export const Button = styled.button`
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
