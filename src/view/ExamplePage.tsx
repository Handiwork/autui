import React, { HTMLAttributes } from "react";
import { H3 } from "../../lib";

interface ExamplePageProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

export default function ExamplePage(props: ExamplePageProps) {
  const { title, children, ...others } = props;
  return (
    <div {...others}>
      <H3>{title}</H3>
      {children}
    </div>
  );
}
