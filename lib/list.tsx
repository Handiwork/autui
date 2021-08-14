import styled from "styled-components";
import { Container } from "./layout";

export const List = styled.div`
  padding: ${(p) => p.theme.spacing.containerPadding};
  overflow-y: auto;
`;

export const ListItem = styled(Container)`
  border-radius: ${(p) => p.theme.borderRadius};
  padding: ${(p) => p.theme.spacing.containerPadding};
  margin: 0;
  cursor: pointer;

  &:hover {
    background-color: ${(p) => p.theme.colors.lightPrimary};
    color: ${(p) => p.theme.colors.onPrimary};
  }
`;
