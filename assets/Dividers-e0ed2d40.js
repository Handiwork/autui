const e=`import { HorizantalDivider, VerticalDivider, XFlexBox, YFlexBox } from "autui";
import styled from "styled-components";

const PlaceHolder = styled.div\`
  flex: 1 1 auto;
  width: 20px;
  height: 20px;
  background-color: \${(p) => p.theme.colors.primary};
\`;

export default function Dividers() {
  return (
    <>
      <XFlexBox>
        <PlaceHolder />
        <HorizantalDivider />
        <PlaceHolder />
      </XFlexBox>
      <hr />
      <YFlexBox>
        <PlaceHolder />
        <VerticalDivider />
        <PlaceHolder />
      </YFlexBox>
    </>
  );
}
`;export{e as default};
