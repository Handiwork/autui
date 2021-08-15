import React from "react";
import { AbsoluteLayout } from "../../../../lib";

export default function AbsoluteLayouts() {
  return (
    <div style={{ position: "relative", height: 300 }}>
      <AbsoluteLayout style={{ backgroundColor: "#50266b" }} />
      <AbsoluteLayout
        style={{ backgroundColor: "skyblue" }}
        left="50px"
        right="40px"
        bottom="30px"
        top="40px"
      />
      <AbsoluteLayout
        style={{ backgroundColor: "gray" }}
        left="60px"
        right="calc(100% - 80px)"
      />
    </div>
  );
}
