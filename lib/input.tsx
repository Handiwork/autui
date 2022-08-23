import styled, { css } from "styled-components";

const sliderThumbStyle = css`
  -webkit-appearance: none;
  width: 1px;
  height: ${(p) => p.theme.spacing.containerPadding};
  background: ${(p) => p.theme.colors.primary};
  border: none;
  border-radius: 0;
  cursor: pointer;
  box-shadow: -401px 0 0 400px ${(p) => p.theme.colors.primary};
`;

const colorSwatchStyle = css`
  border: none;
  border-radius: ${(p) => p.theme.borderRadius};
`;

const inputBaseStyle = css`
  outline: none;
  margin: ${(p) => p.theme.spacing.containerMargin};
  padding: ${(p) => p.theme.spacing.containerPadding};
  background-color: transparent;

  &[type="range"] {
    -webkit-appearance: none;
    padding: 0;
    height: ${(p) => p.theme.spacing.containerPadding};
    outline: none;
    overflow: hidden;
    &::-webkit-slider-thumb,
    &::-moz-range-thumb {
      ${sliderThumbStyle}
    }
  }

  &[type="color"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    padding: 0;
    height: 0.8rem;
    width: 4rem;
    border: none;
    &::-moz-color-swatch,
    &::-webkit-color-swatch {
      ${colorSwatchStyle}
    }
    &::-webkit-color-swatch-wrapper {
      padding: 0;
    }
  }
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
