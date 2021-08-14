import styled, { css } from "styled-components";

export const Section = styled.section`
  margin: ${(p) => p.theme.spacing.containerMargin};
  padding: ${(p) => p.theme.spacing.containerPadding};
`;

const headerBase = css`
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

export const H1 = styled.h1`
  font-size: ${(p) => p.theme.fontSizes.h1};
  ${headerBase}
`;

export const H2 = styled.h2`
  font-size: ${(p) => p.theme.fontSizes.h2};
  ${headerBase}
`;

export const H3 = styled.h3`
  font-size: ${(p) => p.theme.fontSizes.h3};
  ${headerBase}
`;

export const H4 = styled.h4`
  font-size: ${(p) => p.theme.fontSizes.h4};
  ${headerBase}
`;

export const H5 = styled.h5`
  font-size: ${(p) => p.theme.fontSizes.h5};
  ${headerBase}
`;

export const H6 = styled.h6`
  font-size: ${(p) => p.theme.fontSizes.h6};
  ${headerBase}
`;
