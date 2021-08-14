import React, { ReactNode, FunctionComponent, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaCode } from "react-icons/fa";
import { Card } from "../../lib";

interface ExampleSectionProps {
  description: ReactNode;
  code: string;
  component: FunctionComponent;
}

export default function ExampleSection(props: ExampleSectionProps) {
  const { description: discription, code, component: Cmp } = props;
  const [currentTab, setCurrentTab] = useState<"code" | null>(null);
  return (
    <Card>
      <Cmp />
      <div
        style={{ borderTop: "1px rgba(.2,.2,.2,.1) solid", margin: "8px 0" }}
      />
      {discription}
      <FaCode
        size="2rem"
        cursor="pointer"
        onClick={() => setCurrentTab((e) => (e === "code" ? null : "code"))}
      />
      {currentTab === "code" && (
        <SyntaxHighlighter language="typescript" style={docco}>
          {code}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
