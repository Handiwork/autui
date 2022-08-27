import { H1, H2, H3, H4, H5, H6 } from "autui";
import Markdown from "markdown-to-jsx";
import { ReactElement } from "react";
import styled from "styled-components";
import CodeViewer from "./CodeViewer";

interface Props {
  children: string;
}

const PrimaryCode = styled.code`
  color: ${(p) => p.theme.colors.primary};
`;

function Code({
  className,
  children,
}: {
  className?: string;
  children: string;
}) {
  const language = className?.replace("lang-", "");
  if (!language) return <PrimaryCode>{children}</PrimaryCode>;
  return (
    <CodeViewer language={language as "tsx" | "typescript" | "bash"}>
      {children}
    </CodeViewer>
  );
}

export default function MarkdownViewer({ children }: Props): ReactElement {
  return (
    <Markdown
      options={{
        overrides: {
          code: Code,
          h1: H1,
          h2: H2,
          h3: H3,
          h4: H4,
          h5: H5,
          h6: H6,
        },
      }}
    >
      {children}
    </Markdown>
  );
}
