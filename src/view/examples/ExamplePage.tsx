import { HTMLAttributes } from "react";
import { Container, H3 } from "autui";
import HelmetTitle from "../../components/HelmetTitle";
import { LazyExampleSection, LazyExampleSectionConf } from "./ExampleSection";

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
      <div style={{ display: "flex", flexWrap: "wrap" }}>{children}</div>
    </div>
  );
}

export interface LazyExamplePageConf {
  title: string;
  sections: LazyExampleSectionConf[];
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
