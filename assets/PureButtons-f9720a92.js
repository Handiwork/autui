const n=`import {
  ColorPureButton,
  DisabledPureButton,
  InverseColorPureButton,
  PureButton,
} from "autui";
import { ReactElement } from "react";
import { FaCodeBranch, FaShare } from "react-icons/fa";

export default function ContentButtons(): ReactElement {
  return (
    <>
      <div>
        <PureButton>
          <FaShare />
        </PureButton>
        <PureButton>
          <FaCodeBranch />
        </PureButton>
        <PureButton>PureButton</PureButton>
      </div>
      <div>
        <ColorPureButton>
          <FaShare />
        </ColorPureButton>
        <ColorPureButton>
          <FaCodeBranch />
        </ColorPureButton>
        <ColorPureButton>ColorPureButton</ColorPureButton>
      </div>
      <div style={{ background: "grey" }}>
        <InverseColorPureButton>
          <FaShare />
        </InverseColorPureButton>
        <InverseColorPureButton>
          <FaCodeBranch />
        </InverseColorPureButton>
        <InverseColorPureButton>InverseColorPureButton</InverseColorPureButton>
      </div>
      <div>
        <DisabledPureButton>
          <FaShare />
        </DisabledPureButton>
        <DisabledPureButton>
          <FaCodeBranch />
        </DisabledPureButton>
        <DisabledPureButton>ColorPureButton</DisabledPureButton>
      </div>
    </>
  );
}
`;export{n as default};
