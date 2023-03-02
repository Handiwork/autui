import CodeViewer from "@doc/components/CodeViewer";
import MarkdownViewer from "@doc/components/MarkdownViewer";
import { useOneShotData } from "@doc/hooks/state";
import {
  Card,
  ColorFlatButton,
  Expandable,
  VerticalDivider,
  XFlexBox,
} from "autui";
import { ComponentType, useCallback, useState } from "react";
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
        {description.length > 0 && <VerticalDivider />}
        <XFlexBox style={{ justifyContent: "end" }}>
          <ColorFlatButton onClick={toggleCode}>
            <FaCode />
            <span>Code</span>
          </ColorFlatButton>
        </XFlexBox>
        <Expandable expanded={currentTab === "code"}>
          <VerticalDivider />
          <CodeViewer language="tsx">{code}</CodeViewer>
          <XFlexBox style={{ justifyContent: "end" }}>
            <ColorFlatButton onClick={toggleCode}>
              <FaChevronUp />
              <span>Collapse</span>
            </ColorFlatButton>
          </XFlexBox>
        </Expandable>
      </Card>
    </ExampleContainer>
  );
}

const ExampleContainer = styled.div`
  width: 100%;

  & ${ColorFlatButton} {
    display: inline-flex;
    & * {
      font-size: 1rem;
      margin: 0 2px;
    }
  }
`;

export interface LazyExampleSectionProps {
  component: () => Promise<any>;
  code: () => Promise<string>;
  description: () => Promise<any>;
}

export function LazyExampleSection(props: LazyExampleSectionProps) {
  const states = useOneShotData(() =>
    Promise.all([props.component(), props.code(), props.description()])
  );

  if (!states) return null;
  const [component, code, description] = states;
  return (
    <ExampleSection
      component={component}
      code={code}
      description={description}
    />
  );
}
