import React, { HTMLAttributes } from "react";
import { Container, H3 } from "../../../lib";
import HelmetTitle from "../../components/HelmetTitle";

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
      <HelmetTitle title={title} />
      <Container>
        <H3>{title}</H3>
      </Container>
      <div style={{ display: "flex", flexWrap: "wrap" }}>{children}</div>
    </div>
  );
}
