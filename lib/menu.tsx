import styled from "styled-components";

import { ReactElement, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;

export function Menu({ children, className }: Props): ReactElement {
  return <div className={className}>{children}</div>;
}

export const MenuItem = styled.div``;
