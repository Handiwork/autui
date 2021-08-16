import React from "react";
import { H1, Section } from "autui";
import CodeViewer from "../../components/CodeViewer";
import HelmetTitle from "../../components/HelmetTitle";

export default function QuickStart() {
  return (
    <Section>
      <HelmetTitle title="Quick Start" />
      <H1>Install</H1>
      <CodeViewer language="bash">pnpm install autui</CodeViewer>
    </Section>
  );
}
