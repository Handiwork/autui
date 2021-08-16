import styled, { css } from "styled-components";

const inputBaseStyle = css`
  outline: none;
  margin: ${(p) => p.theme.spacing.containerMargin};
  padding: ${(p) => p.theme.spacing.containerPadding};
  background-color: transparent;
`;

export const OutlinedInput = styled.input`
  border: ${(p) => p.theme.colors.lightPrimary} 1px solid;
  &:focus {
    border: ${(p) => p.theme.colors.primary} 1px solid;
  }
  border-radius: ${(p) => p.theme.borderRadius};
  ${inputBaseStyle}
`;

export const UnderlinedInput = styled.input`
  border: none;
  border-bottom: ${(p) => p.theme.colors.lightPrimary} 1px solid;
  &:focus {
    border-bottom: ${(p) => p.theme.colors.primary} 1px solid;
  }
  border-radius: 0;
  ${inputBaseStyle}
`;
