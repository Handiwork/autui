import { ReactNode, useState, useCallback, ComponentType } from "react";
import { FaCode, FaChevronUp } from "react-icons/fa";
import { Card, ContentButton, VerticalDivider } from "autui";
import styled from "styled-components";
import CodeViewer from "@doc/components/CodeViewer";
import loadable from "@loadable/component";
import MarkdownViewer from "@doc/components/MarkdownViewer";

interface ExampleSectionProps {
  description: string;
  code: string;
  component: ComponentType<any>;
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
    <ExampleContainer>
      <Card>
        <Cmp />
        <VerticalDivider />
        {/* <DescriptionBlockWrapper>{description}</DescriptionBlockWrapper> */}
        <MarkdownViewer>{description}</MarkdownViewer>
        <ContentButton onClick={toggleCode}>
          <FaCode size="1.0rem" style={iconStyle} />
          <span style={iconStyle}>Code</span>
        </ContentButton>
        {currentTab === "code" && (
          <>
            <VerticalDivider />
            <CodeViewer language="tsx">{code}</CodeViewer>
            <ContentButton onClick={toggleCode}>
              <FaChevronUp size="1.0rem" style={iconStyle} />
              <span style={iconStyle}>Collapse</span>
            </ContentButton>
          </>
        )}
      </Card>
    </ExampleContainer>
  );
}

const ExampleContainer = styled.div`
  flex: 0 1 auto;
  width: 100%;

  @media (min-width: 1000px) {
    width: 50%;
  }

  @media (min-width: 1500px) {
    width: 33.333%;
  }

  transition: height 0.2s ease-in;
`;

export interface ExampleSectionConf {
  description: ReactNode;
  code: string;
  component: ComponentType<any>;
}

export interface LazyExampleSectionConf {
  component: () => Promise<any>;
  code: () => Promise<string>;
  description: () => Promise<any>;
}

export function LazyExampleSection(props: LazyExampleSectionConf) {
  const Datum = loadable.lib(() =>
    Promise.all([props.component(), props.code(), props.description()])
  );
  return (
    <Datum>
      {([component, code, description]) => (
        <ExampleSection
          component={component}
          code={code}
          description={description}
        />
      )}
    </Datum>
  );
}
