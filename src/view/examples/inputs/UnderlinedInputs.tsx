import React from "react";
import styled from "styled-components";
import { UnderlinedInput } from "autui";

const Form = styled.div`
  & > label {
    display: block;
    & span {
      display: inline-block;
      min-width: 80px;
      text-align: right;
    }
  }
`;

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
    </Form>
  );
}