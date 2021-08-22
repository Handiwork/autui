import React from "react";
import ExamplePageWrapper from "../ExamplePage";
import ExampleSection from "../ExampleSection";

import BasicCompositions from "./BasicCompositions";
import BasicCompositionsCode from "./BasicCompositions?raw";
import BasicCompositionsDes from "./BasicCompositions.txt?raw";

export default function CompositionExamples() {
  return (
    <ExamplePageWrapper title="Composition Examples">
      <ExampleSection
        component={BasicCompositions}
        description={BasicCompositionsDes}
        code={BasicCompositionsCode}
      />
    </ExamplePageWrapper>
  );
}
