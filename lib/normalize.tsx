import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";
import { floatEffect } from "./effects";

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

::selection{
  color: ${(p) => p.theme.colors.onPrimary};
  background-color: ${(p) => p.theme.colors.lightPrimary};
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-thumb{
  -webkit-appearance:none;
  width: 4px;
  border-radius: 4px;
  background-color: ${(p) => p.theme.colors.lightPrimary};
  ${floatEffect}
}

::-webkit-scrollbar-track{
  -webkit-appearance:none;
  background-color: ${(p) => p.theme.colors.hoverLayer};
  border-radius: 4px;
}
`;
