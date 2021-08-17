import React, { ReactElement } from "react";
import loadable from "@loadable/component";
import matter from "front-matter";
import HelmetTitle from "@doc/components/HelmetTitle";
import MarkdownViewer from "@doc/components/MarkdownViewer";
import { Container } from "autui";

export default function markdownPage(
  loader: () => Promise<string | { default: string }>
) {
  return function MarkdownPage(): ReactElement {
    const Md = loadable.lib(loader);
    return (
      <Md>
        {(md) => {
          const emd = typeof md === "object" ? md.default : md;
          const { attributes, body } = matter(emd);
          return (
            <Container>
              <HelmetTitle title={(attributes as any).title ?? ""} />
              <MarkdownViewer>{body}</MarkdownViewer>
            </Container>
          );
        }}
      </Md>
    );
  };
}
