import React from "react";
import ExamplePage from "../ExamplePage";
import ExampleSection from "../ExampleSection";

import NormalButtons from "./NormalButtons";
import NormalButtonsCode from "./NormalButtons?raw";
import NormalButtonsDes from "./NormalButtons.txt?raw";
import ContentButtons from "./ContentButtons";
import ContentButtonsCode from "./ContentButtons?raw";
import ContentButtonsDes from "./ContentButtons.txt?raw";

export default function ButtonExamples() {
  return (
    <ExamplePage title="Button Examples">
      <ExampleSection
        code={NormalButtonsCode}
        description={<pre>{NormalButtonsDes}</pre>}
        component={NormalButtons}
      />
      <ExampleSection
        code={ContentButtonsCode}
        description={<pre>{ContentButtonsDes}</pre>}
        component={ContentButtons}
      />
    </ExamplePage>
  );
}
