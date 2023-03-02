const o=`import { FixedRatioImage } from "autui";
import logo from "@doc/favicon.svg";

export default function FixedRatioImages() {
  return (
    <div>
      <FixedRatioImage src={logo} width="50%" ratio={0.618} />
      <FixedRatioImage src={logo} width="25%" ratio={0.618} />
      <FixedRatioImage src={logo} width="12.5%" ratio={0.618} />
    </div>
  );
}
`;export{o as default};
