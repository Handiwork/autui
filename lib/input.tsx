import styled, { css } from "styled-components";

const sliderThumbStyle = css`
  appearance: none;
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
  appearance: none;
  outline: none;
  margin: ${(p) => p.theme.spacing.containerMargin};
  padding: ${(p) => p.theme.spacing.containerPadding};
  background-color: transparent;

  &[type="range"] {
    padding: 0;
    height: ${(p) => p.theme.spacing.containerPadding};
    outline: none;
    overflow: hidden;

    &::-moz-range-thumb {
      ${sliderThumbStyle}
    }

    &::-webkit-slider-thumb {
      ${sliderThumbStyle}
    }
  }

  &[type="color"] {
    padding: 0;
    height: 0.8rem;
    width: 4rem;
    border: none;
    &::-moz-color-swatch {
      ${colorSwatchStyle}
    }
    &::-webkit-color-swatch {
      ${colorSwatchStyle}
    }
    &::-webkit-color-swatch-wrapper {
      padding: 0;
    }
  }

  &[type="checkbox"] {
    font: inherit;
    color: ${(p) => p.theme.colors.primary};
    width: 1.15em;
    height: 1.15em;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;

    &::before {
      content: "";
      width: 0.65em;
      height: 0.65em;
      border-radius: ${(p) => p.theme.borderRadius};
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      background-color: ${(p) => p.theme.colors.primary};
      transform-origin: bottom left;
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    }

    &:checked::before {
      transform: scale(1);
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
