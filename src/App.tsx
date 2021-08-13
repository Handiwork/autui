import React, { useState } from "react";
import {
  AbosulteLayout,
  AutuiThemeProvider,
  Button,
  createTheme,
  sb,
} from "../lib";

const theme = createTheme();

function App() {
  const [leftWidth, setLeftWidth] = useState(250);
  const rightStyle = sb({ backgroundColor: "blueviolet" })
    .absoluteLayout({
      left: leftWidth,
    })
    .build();
  return (
    <AutuiThemeProvider theme={theme}>
      <AbosulteLayout>
        <AbosulteLayout right={`calc(100% - ${leftWidth}px)`}>
          <h1>left</h1>
        </AbosulteLayout>
        <div style={rightStyle}>
          <Button onClick={() => setLeftWidth(750 - leftWidth)}>
            Hello World
          </Button>
        </div>
      </AbosulteLayout>
    </AutuiThemeProvider>
  );
}

export default App;
