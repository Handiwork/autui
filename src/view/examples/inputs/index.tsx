import React from "react";
import ExamplePageWrapper from "../ExamplePage";
import ExampleSection from "../ExampleSection";

import OutlinedInputs from "./OutlinedInputs";
import OutlinedInputsCode from "./OutlinedInputs?raw";
import OutlinedInputsDes from "./OutlinedInputs.txt?raw";
import UnderlinedInputs from "./UnderlinedInputs";
import UnderlinedInputsCode from "./UnderlinedInputs?raw";
import UnderlinedInputsDes from "./UnderlinedInputs.txt?raw";

export default function InputExamples() {
  return (
    <ExamplePageWrapper title="Input Examples">
      <ExampleSection
        component={OutlinedInputs}
        description={OutlinedInputsDes}
        code={OutlinedInputsCode}
      />
      <ExampleSection
        component={UnderlinedInputs}
        description={UnderlinedInputsDes}
        code={UnderlinedInputsCode}
      />
    </ExamplePageWrapper>
  );
}
