import React, { HTMLAttributes } from "react";
import { H3 } from "../../lib";

interface ExamplePageProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

export default function ExamplePage(props: ExamplePageProps) {
  const { title, children, style, ...others } = props;
  return (
    <div
      style={{ ...style, overflowY: "auto", width: "100%", height: "100%" }}
      {...others}
    >
      <H3>{title}</H3>
      <div style={{ display: "flex", flexWrap: "wrap" }}>{children}</div>
    </div>
  );
}
