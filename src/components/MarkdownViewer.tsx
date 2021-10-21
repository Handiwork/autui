import { ReactElement } from "react";
import Markdown from "markdown-to-jsx";
import { H1, H2, H3, H4, H5, H6 } from "autui";
import CodeViewer from "./CodeViewer";

interface Props {
  children: string;
}

function Code({
  className,
  children,
}: {
  className?: string;
  children: string;
}) {
  const language = className?.replace("lang-", "");
  if (!language) return <code>{children}</code>;
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
