import styled, { css } from "styled-components";

const buttonBaseStyle = css`
  font-size: 1rem;
  user-select: none;
  font-weight: bold;
  outline: none;
  cursor: pointer;
`;

export const Button = styled.button`
  ${buttonBaseStyle}
  border: ${(p) => p.theme.colors.primary} 1px solid;
  color: white;
  background-color: ${(p) => p.theme.colors.primary};
  padding: 8px 16px;
  margin: 8px;
  border-radius: ${(p) => p.theme.borderRadius};

  &:hover {
    box-shadow: 0 0px 10px 3px ${(p) => p.theme.colors.primary};
  }
`;

export const ContentButton = styled.button`
  ${buttonBaseStyle}
  border: none;
  color: ${(p) => p.theme.colors.primary};
  background-color: transparent;
  padding: 8px;

  &:hover {
    color: ${(p) => p.theme.colors.darkenPrimary};
  }
`;
