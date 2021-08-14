import React, { HTMLAttributes, ReactNode, useState } from "react";
import styled from "styled-components";

export const Card = styled.div`
  border-radius: ${(p) => p.theme.borderRadius};
  box-shadow: 2px 2px 4px 1px rgba(0.2, 0.2, 0.2, 0.2);
  margin: ${(p) => p.theme.spacing.containerMargin};
  padding: ${(p) => p.theme.spacing.containerPadding};
`;

interface ExpandableCardProps extends HTMLAttributes<HTMLDivElement> {
  extra: ReactNode;
}

export const ExpandableCard = (props: ExpandableCardProps) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Card>
      {props.children}
      <div onClick={() => setExpanded((e) => !e)} role="button" tabIndex={0}>
        {expanded ? "collapse" : "expand"}
      </div>
      {expanded && props.extra}
    </Card>
  );
};
