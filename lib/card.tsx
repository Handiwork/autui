import { HTMLAttributes, ReactNode, useState } from "react";
import styled from "styled-components";
import { floatEffect } from "./effects";
import { Container } from "./layout";

export const Card = styled(Container)`
  border-radius: ${(p) => p.theme.borderRadius};
  ${floatEffect}
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
