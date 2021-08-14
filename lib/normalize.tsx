import { createGlobalStyle } from "styled-components";

export const Normalize = createGlobalStyle`

html{
  font-size: ${(p) => p.theme.fontSizes.root};
}

html,body{
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar-thumb{
  -webkit-appearance:none;
  border-radius: 4px;
  background-color: ${(p) => p.theme.colors.lightPrimary};
}

::-webkit-scrollbar-track{
  -webkit-appearance:none;
  background-color: ${(p) => p.theme.colors.hoverLayer};
  border-radius: 4px;
}
`;
