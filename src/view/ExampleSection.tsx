import React, {
  ReactNode,
  FunctionComponent,
  useState,
  useCallback,
} from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy as defaultStyle } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaCode, FaChevronUp } from "react-icons/fa";
import { Card, ContentButton, VerticalDivider } from "../../lib";

interface ExampleSectionProps {
  description: ReactNode;
  code: string;
  component: FunctionComponent;
}

export default function ExampleSection(props: ExampleSectionProps) {
  const { description, code, component: Cmp } = props;
  const [currentTab, setCurrentTab] = useState<"code" | null>(null);
  const toggleCode = useCallback(() => {
    setCurrentTab((e) => (e === "code" ? null : "code"));
  }, []);
  const iconStyle = {
    fontSize: "1.0rem",
    verticalAlign: "middle",
    display: "inline-block",
    margin: "0 2px",
  };
  return (
    <div style={{ flex: "0 1 50%", maxWidth: "50%" }}>
      <Card>
        <Cmp />
        <VerticalDivider />
        {description}
        <ContentButton onClick={toggleCode}>
          <FaCode size="1.0rem" style={iconStyle} />
          <span style={iconStyle}>Code</span>
        </ContentButton>
        {currentTab === "code" && (
          <>
            <VerticalDivider />
            <SyntaxHighlighter language="tsx" style={defaultStyle}>
              {code}
            </SyntaxHighlighter>
            <ContentButton onClick={toggleCode}>
              <FaChevronUp size="1.0rem" style={iconStyle} />
              <span style={iconStyle}>Collapse</span>
            </ContentButton>
          </>
        )}
      </Card>
    </div>
  );
}
