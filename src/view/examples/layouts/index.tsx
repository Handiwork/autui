import React, { ReactElement } from "react";
import ExamplePageWrapper from "../ExamplePage";
import ExampleSection from "../ExampleSection";

import AbsoluteLayouts from "./AbsoluteLayouts";
import AbsoluteLayoutsCode from "./AbsoluteLayouts?raw";
import AbsoluteLayoutsDes from "./AbsoluteLayouts.txt?raw";

export default function LayoutExamples(): ReactElement {
  return (
    <ExamplePageWrapper title="Layout Examples">
      <ExampleSection
        code={AbsoluteLayoutsCode}
        description={<pre>{AbsoluteLayoutsDes}</pre>}
        component={AbsoluteLayouts}
      />
    </ExamplePageWrapper>
  );
}
