import HelmetTitle from "@doc/components/HelmetTitle";
import { Container, H3 } from "autui";
import { HTMLAttributes } from "react";
import styled from "styled-components";
import { LazyExampleSection, LazyExampleSectionProps } from "./ExampleSection";

interface ExamplePageProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

export default function ExamplePageWrapper(props: ExamplePageProps) {
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
      <ExampleListWrapper>{children}</ExampleListWrapper>
    </div>
  );
}

const ExampleListWrapper = styled(Container)`
  & > * {
    float: left;
    @media (min-width: 1200px) {
      width: 50%;
    }
    @media (min-width: 1800px) {
      width: 33.33333%;
    }
  }
`;

export interface LazyExamplePageConf {
  title: string;
  sections: LazyExampleSectionProps[];
}

export function lazyExamplePage(pageConfs: LazyExamplePageConf) {
  return function LazyExamplePage() {
    return (
      <ExamplePageWrapper title={pageConfs.title}>
        {pageConfs.sections.map((it, i) => (
          <LazyExampleSection
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            component={it.component}
            code={it.code}
            description={it.description}
          />
        ))}
      </ExamplePageWrapper>
    );
  };
}
