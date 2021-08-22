import React, { ReactNode, useState, useCallback, ComponentType } from "react";
import { FaCode, FaChevronUp } from "react-icons/fa";
import { Card, ContentButton, VerticalDivider } from "autui";
import styled from "styled-components";
import CodeViewer from "@doc/components/CodeViewer";

interface ExampleSectionProps {
  description: ReactNode;
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
        <DescriptionBlockWrapper>{description}</DescriptionBlockWrapper>
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

  @media (min-width: 1200px) {
    width: 50%;
  }

  @media (min-width: 1600px) {
    width: 33.333%;
  }
`;

const DescriptionBlockWrapper = styled.div`
  padding: ${(p) => p.theme.spacing.containerPadding};
  white-space: pre;
`;

export interface ExampleSectionConf {
  description: ReactNode;
  code: string;
  component: ComponentType<any>;
}
