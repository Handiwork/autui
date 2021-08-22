import { FixedRatioImage } from "autui";
import React from "react";
import logo from "../../../favicon.png";

export default function FixedRatioImages() {
  return (
    <div>
      <FixedRatioImage src={logo} width="50%" ratio={0.618} />
      <FixedRatioImage src={logo} width="25%" ratio={0.618} />
      <FixedRatioImage src={logo} width="12.5%" ratio={0.618} />
    </div>
  );
}
