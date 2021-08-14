import React from "react";
import ExamplePage from "../../ExamplePage";
import ExampleSection from "../../ExampleSection";

import NormalButtons from "./NormalButtons";
import NormalButtonsCode from "./NormalButtons?raw";
import NormalButtonsDes from "./NormalButtons.txt?raw";

export default function ButtonExamples() {
  return (
    <ExamplePage title="Button Examples">
      <ExampleSection
        code={NormalButtonsCode}
        description={<pre>{NormalButtonsDes}</pre>}
        component={NormalButtons}
      />
    </ExamplePage>
  );
}
