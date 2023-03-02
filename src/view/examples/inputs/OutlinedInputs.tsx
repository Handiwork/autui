import styled from "styled-components";
import { OutlinedInput } from "autui";

const Form = styled.div`
  & > label {
    display: flex;
    align-items: center;
    & span {
      display: inline-block;
      min-width: 80px;
      text-align: right;
    }
  }
`;

export default function OutlinedInputs() {
  return (
    <Form>
      <label>
        <span>number</span>
        <OutlinedInput name="number" type="number" />
      </label>
      <label htmlFor="date">
        <span>date</span>
        <OutlinedInput name="date" type="date" />
      </label>
      <label>
        <span>time</span>
        <OutlinedInput type="time" />
      </label>
      <label>
        <span>password</span>
        <OutlinedInput type="password" />
      </label>
      <label>
        <span>email</span>
        <OutlinedInput type="email" />
      </label>
      <label>
        <span>search</span>
        <OutlinedInput type="search" />
      </label>
      <label>
        <span>color</span>
        <OutlinedInput type="color" />
      </label>
      <label>
        <span>range</span>
        <OutlinedInput type="range" />
      </label>
      <label>
        <span>checked</span>
        <OutlinedInput type="checkbox" checked />
      </label>
      <label>
        <span>unchecked</span>
        <OutlinedInput type="checkbox" />
      </label>
    </Form>
  );
}
