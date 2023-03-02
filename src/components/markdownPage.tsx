import HelmetTitle from "@doc/components/HelmetTitle";
import MarkdownViewer from "@doc/components/MarkdownViewer";
import { useOneShotData } from "@doc/hooks/state";
import { Container } from "autui";
import matter from "front-matter";
import { ReactElement } from "react";

export default function createMarkdownPage(
  loader: () => Promise<string | { default: string }>
) {
  return function MarkdownPage(): ReactElement | null {
    const md = useOneShotData(loader);
    if (md == null) return null;

    const emd = typeof md === "object" ? md.default : md;
    const { attributes, body } = matter(emd);
    return (
      <Container>
        <HelmetTitle title={(attributes as any).title ?? ""} />
        <MarkdownViewer>{body}</MarkdownViewer>
      </Container>
    );
  };
}
