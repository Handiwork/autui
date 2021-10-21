import { ReactElement, ReactNode } from "react";
import {
  PrismLight as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from "react-syntax-highlighter";
import defaultStyle from "react-syntax-highlighter/dist/esm/styles/prism/coy";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";

interface Props extends SyntaxHighlighterProps {
  language: "tsx" | "typescript" | "bash";
  children?: ReactNode | undefined;
}

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("bash", bash);

export default function CodeViewer(props: Props): ReactElement {
  const { style, ...rest } = props;
  return <SyntaxHighlighter style={style ?? defaultStyle} {...rest} />;
}
