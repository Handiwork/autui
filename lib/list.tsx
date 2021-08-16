import styled, { css } from "styled-components";
import { floatEffect } from "./effects";
import { Container } from "./layout";

export const List = styled.div`
  padding: ${(p) => p.theme.spacing.containerPadding};
  overflow-y: auto;
`;

interface ListItemProps {
  active?: boolean;
}

const listItemActive = css`
  background-color: ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.colors.onPrimary};
  ${floatEffect}
`;

const listItemHover = css`
  &:hover {
    background-color: ${(p) => p.theme.colors.hoverLayer};
    color: inherit;
    ${floatEffect}
  }
`;

export const ListItem = styled(Container)<ListItemProps>`
  border-radius: ${(p) => p.theme.borderRadius};
  padding: ${(p) => p.theme.spacing.containerPadding};
  margin: 0;
  cursor: pointer;
  ${(p) => (p.active ? listItemActive : listItemHover)}
`;
