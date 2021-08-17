---
title: Introduction
---
# Lib for personal use. Not tested at all

```tsx
import React from "react";
import { Container } from "autui";
import HelmetTitle from "../../components/HelmetTitle";
import MarkdownViewer from "../../components/MarkdownViewer";

export default function Introduction() {
  return (
    <Container>
      <HelmetTitle title="Introduction" />
      <MarkdownViewer
        loader={() => import("./Introduction.md?raw").then((it) => it.default)}
      />
    </Container>
  );
}

```
