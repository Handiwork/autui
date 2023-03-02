const n=`import { UnderlinedInput } from "autui";
import styled from "styled-components";

const Form = styled.div\`
  & > label {
    display: flex;
    align-items: center;
    & span {
      display: inline-block;
      min-width: 80px;
      text-align: right;
    }
  }
\`;

export default function UnderlinedInputs() {
  return (
    <Form>
      <label>
        <span>number</span>
        <UnderlinedInput name="number" type="number" />
      </label>
      <label htmlFor="date">
        <span>date</span>
        <UnderlinedInput name="date" type="date" />
      </label>
      <label>
        <span>time</span>
        <UnderlinedInput type="time" />
      </label>
      <label>
        <span>password</span>
        <UnderlinedInput type="password" />
      </label>
      <label>
        <span>email</span>
        <UnderlinedInput type="email" />
      </label>
      <label>
        <span>search</span>
        <UnderlinedInput type="search" />
      </label>
      <label>
        <span>color</span>
        <UnderlinedInput type="color" />
      </label>
      <label>
        <span>range</span>
        <UnderlinedInput type="range" />
      </label>
      <label>
        <span>checked</span>
        <UnderlinedInput type="checkbox" defaultChecked />
      </label>
      <label>
        <span>unchecked</span>
        <UnderlinedInput type="checkbox" />
      </label>
    </Form>
  );
}
`;export{n as default};
