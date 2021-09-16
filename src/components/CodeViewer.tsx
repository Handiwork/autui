import { ReactElement, PropsWithChildren } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import defaultStyle from "react-syntax-highlighter/dist/esm/styles/prism/coy";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";

type Props = PropsWithChildren<{
  language: "tsx" | "typescript" | "bash";
}>;

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("bash", bash);

export default function CodeViewer({
  language,
  children,
}: Props): ReactElement {
  return (
    <SyntaxHighlighter language={language} style={defaultStyle}>
      {children}
    </SyntaxHighlighter>
  );
}
