import CodeViewer from "@doc/components/CodeViewer";
import MarkdownViewer from "@doc/components/MarkdownViewer";
import loadable from "@loadable/component";
import { Card, ColorFlatButton, VerticalDivider } from "autui";
import { ComponentType, ReactNode, useCallback, useState } from "react";
import { FaChevronUp, FaCode } from "react-icons/fa";
import styled from "styled-components";

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
  return (
    <ExampleContainer>
      <Card>
        <Cmp />
        <VerticalDivider />
        <MarkdownViewer>{description}</MarkdownViewer>
        <ColorFlatButton onClick={toggleCode}>
          <FaCode size="1.0rem" />
          <span>Code</span>
        </ColorFlatButton>
        {currentTab === "code" && (
          <>
            <VerticalDivider />
            <CodeViewer language="tsx">{code}</CodeViewer>
            <ColorFlatButton onClick={toggleCode}>
              <FaChevronUp size="1.0rem" />
              <span>Collapse</span>
            </ColorFlatButton>
          </>
        )}
      </Card>
    </ExampleContainer>
  );
}

const ExampleContainer = styled.div`
  width: 100%;
  transition: height 0.2s ease-in;

  & ${ColorFlatButton} {
    display: inline-flex;
    & * {
      font-size: 1rem;
      margin: 0 2px;
    }
  }
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
