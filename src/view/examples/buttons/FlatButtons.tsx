import {
  ColorFlatButton,
  DisabledFlatButton,
  FlatButton,
  InversedFlatButton,
} from "autui";
import { ReactElement } from "react";
import { FaShare } from "react-icons/fa";

export default function NormalButtons(): ReactElement {
  return (
    <>
      <div>
        <FlatButton>
          <FaShare />
        </FlatButton>

        <FlatButton>FlatButton</FlatButton>
      </div>
      <div>
        <ColorFlatButton>
          <FaShare />
        </ColorFlatButton>

        <ColorFlatButton>ColorFlatButton</ColorFlatButton>
      </div>
      <div>
        <InversedFlatButton>
          <FaShare />
        </InversedFlatButton>

        <InversedFlatButton>InversedFlatButton</InversedFlatButton>
      </div>
      <div>
        <DisabledFlatButton>
          <FaShare />
        </DisabledFlatButton>

        <DisabledFlatButton>InversedFlatButton</DisabledFlatButton>
      </div>
    </>
  );
}
