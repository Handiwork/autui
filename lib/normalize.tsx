import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";

export const Normalize = createGlobalStyle`

${normalize()}

html{
  font-size: ${(p) => p.theme.fontSizes.root};
  font-family: Arial, Helvetica;
}
body{
  font-size: 1rem;
}

html,body{
  margin: 0;
  padding: 0;
}

*{
  &::selection{
    color: ${(p) => p.theme.colors.onPrimary};
    background-color: ${(p) => p.theme.colors.lightPrimary};
  }

  &::-webkit-scrollbar{
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb{
    appearance:none;
    opacity: 0;
    width: 4px;
    border-radius: 4px;
    background-color: transparent;
  }

  &:hover::-webkit-scrollbar-thumb{
    background-color: ${(p) => p.theme.colors.lightPrimary};
  }

  &::-webkit-scrollbar-track{
    appearance:none;
    opacity: 0;
    border-radius: 4px;
    background-color: transparent;
  }

  &:hover::-webkit-scrollbar-track{
    background-color: ${(p) => p.theme.colors.hoverLayer};
  }
}

`;
